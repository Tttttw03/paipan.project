import React, { useState, useEffect } from 'react';
import { InputMethodId, TimeZone } from '../types';
import { TIME_ZONES, DIRECTIONS, BAGUA_DATA } from '../constants';
import { Solar } from 'lunar-typescript';

interface InputViewProps {
  method: InputMethodId;
  onSubmit: (u: number, l: number, m: number, customDate?: Date) => void;
  onBack: () => void;
}

export const InputView: React.FC<InputViewProps> = ({ method, onSubmit, onBack }) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [timeZone, setTimeZone] = useState<number>(1);
  const [lunarInfo, setLunarInfo] = useState<string>('');

  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');

  const [textInput, setTextInput] = useState<string>('');

  const [objCount, setObjCount] = useState<string>('');

  const [selectedObjGua, setSelectedObjGua] = useState<number>(1);
  const [selectedDirGua, setSelectedDirGua] = useState<number>(3); // South default

  const [customUpper, setCustomUpper] = useState<number>(1);
  const [customLower, setCustomLower] = useState<number>(8);
  const [customYao, setCustomYao] = useState<number>(1);

  // 当日期改变时，更新农历信息
  useEffect(() => {
    if (method === InputMethodId.TIME && date) {
      const d = new Date(date);
      const solar = Solar.fromDate(d);
      const lunar = solar.getLunar();

      const yearGanZhi = lunar.getYearInGanZhi();
      const monthChinese = lunar.getMonthInChinese();
      const dayChinese = lunar.getDayInChinese();

      setLunarInfo(`农历：${yearGanZhi}年 ${monthChinese}月 ${dayChinese}`);
    }
  }, [date, method]);

  const handleTimeSubmit = () => {
    const d = new Date(date);
    const solar = Solar.fromDate(d);
    const lunar = solar.getLunar();

    // 获取生肖对应的数字（1-12）
    const zodiacAnimals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const yearZodiac = lunar.getYearShengXiao(); // 获取生肖
    const yearNum = zodiacAnimals.indexOf(yearZodiac) + 1; // 转换为1-12

    const month = lunar.getMonth(); // 农历月
    const day = lunar.getDay(); // 农历日

    // 计算上卦、下卦、动爻
    const upperVal = yearNum + month + day;
    const lowerVal = yearNum + month + day + timeZone;
    const yaoVal = lowerVal;

    onSubmit(upperVal, lowerVal, yaoVal, d);
  };

  const handleNumSubmit = () => {
    const n1 = parseInt(num1) || 0;
    const n2 = parseInt(num2) || 0;
    if (n1 === 0 || n2 === 0) return;

    // Formula: Upper = n1, Lower = n2, Yao = (n1+n2+Time)
    onSubmit(n1, n2, n1 + n2 + timeZone);
  };

  const handleWordSubmit = () => {
    if (!textInput.trim()) return;
    const text = textInput.trim();
    const n = text.length;

    // 分割为上/下部分（上取较少，若偶数则平分）
    const upCount = n % 2 === 0 ? n / 2 : Math.floor(n / 2);
    const downCount = n - upCount;

    let upperSource = 0;
    let lowerSource = 0;

    // 按用户设计的区间选择数源，未提供笔画/声调时使用合理的回退计算（最小改动实现）
    if (n > 10) {
      // 直接使用字数
      upperSource = upCount;
      lowerSource = downCount;
    } else if (n >= 4 && n <= 10) {
      // 声调计数：回退策略为用字符码估算声调 (charCode % 4) + 1
      for (let i = 0; i < upCount; i++) upperSource += (text.charCodeAt(i) % 4) + 1;
      for (let i = upCount; i < n; i++) lowerSource += (text.charCodeAt(i) % 4) + 1;
    } else {
      // 1 < n <= 3：笔画数优先；回退为 (charCode % 20)
      for (let i = 0; i < upCount; i++) upperSource += text.charCodeAt(i) % 20;
      for (let i = upCount; i < n; i++) lowerSource += text.charCodeAt(i) % 20;
    }

    // 防止出现 0 导致不可预期映射，回退为计数值
    if (upperSource === 0) upperSource = upCount;
    if (lowerSource === 0) lowerSource = downCount;

    // 按设计，动爻由 (上数 + 下数) % 6 决定；这里传回 sum，由服务端再做 mod6 映射以保证统一行为
    const movingSum = upperSource + lowerSource;

    onSubmit(upperSource, lowerSource, movingSum);
  };

  const handleObjectSubmit = () => {
    const count = parseInt(objCount) || 0;
    if (count === 0) return;
    // Upper = Count, Lower = Time, Yao = Count + Time
    onSubmit(count, timeZone, count + timeZone);
  };

  const handleDirSubmit = () => {
    // Upper = Object (Gua ID), Lower = Direction (Gua ID), Yao = U + L + Time
    onSubmit(selectedObjGua, selectedDirGua, selectedObjGua + selectedDirGua + timeZone);
  };

  const handleCustomSubmit = () => {
    onSubmit(customUpper, customLower, customYao);
  };

  const commonTimeSelect = (
    <div className="mb-4">
      <label className="block text-ink font-serif mb-2">当前时辰</label>
      <select
        value={timeZone}
        onChange={(e) => setTimeZone(parseInt(e.target.value))}
        className="w-full p-2 border border-stone-400 bg-paper rounded-sm focus:border-c-red outline-none"
      >
        {TIME_ZONES.map(tz => (
          <option key={tz.number} value={tz.number}>{tz.name} - {tz.zodiac}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded border border-stone-200">
      <h2 className="text-2xl font-cursive text-center text-c-red mb-6">
        {method === InputMethodId.TIME && "时间起卦"}
        {method === InputMethodId.NUMBERS && "报数起卦"}
        {method === InputMethodId.WORDS && "文字起卦"}
        {method === InputMethodId.OBJECTS && "物数起卦"}
        {method === InputMethodId.DIRECTION && "物象方位"}
        {method === InputMethodId.CUSTOM && "自定义排盘"}
      </h2>

      {method === InputMethodId.TIME && (
        <div className="space-y-4">
          <div>
            <label className="block text-ink font-serif mb-2">公历日期</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-stone-400 bg-paper rounded-sm focus:border-c-red outline-none"
            />
            {lunarInfo && (
              <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-stone-700">
                {lunarInfo}
              </div>
            )}
          </div>
          {commonTimeSelect}
          <button onClick={handleTimeSubmit} className="w-full btn-primary">起卦</button>
        </div>
      )}

      {method === InputMethodId.NUMBERS && (
        <div className="space-y-4">
          <div>
            <label className="block text-ink font-serif mb-2">第一个数字 (上卦)</label>
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)} className="input-field" placeholder="1-999" />
          </div>
          <div>
            <label className="block text-ink font-serif mb-2">第二个数字 (下卦)</label>
            <input type="number" value={num2} onChange={e => setNum2(e.target.value)} className="input-field" placeholder="1-999" />
          </div>
          {commonTimeSelect}
          <button onClick={handleNumSubmit} className="w-full btn-primary">起卦</button>
        </div>
      )}

      {method === InputMethodId.WORDS && (
        <div className="space-y-4">
          <div className="p-4 bg-stone-100 text-xs text-stone-500 mb-4 rounded">
            注：此演示版本通过字数和字符编码模拟起卦。
          </div>
          <div>
            <label className="block text-ink font-serif mb-2">所听/所见文字</label>
            <textarea
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              className="input-field h-32"
              placeholder="输入文字..."
            />
          </div>
          <button onClick={handleWordSubmit} className="w-full btn-primary">起卦</button>
        </div>
      )}

      {method === InputMethodId.OBJECTS && (
        <div className="space-y-4">
          <div>
            <label className="block text-ink font-serif mb-2">物品数量</label>
            <input type="number" value={objCount} onChange={e => setObjCount(e.target.value)} className="input-field" placeholder="例如见到5只鸟" />
          </div>
          {commonTimeSelect}
          <button onClick={handleObjectSubmit} className="w-full btn-primary">起卦</button>
        </div>
      )}

      {method === InputMethodId.DIRECTION && (
        <div className="space-y-4">
          <div>
            <label className="block text-ink font-serif mb-2">所见物象 (取象归类)</label>
            <select value={selectedObjGua} onChange={e => setSelectedObjGua(parseInt(e.target.value))} className="input-field">
              {BAGUA_DATA.filter(g => g.id !== 0).map(g => (
                <option key={g.id} value={g.id}>{g.name} - {g.nature} (属{g.element})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-ink font-serif mb-2">所在方位</label>
            <select value={selectedDirGua} onChange={e => setSelectedDirGua(parseInt(e.target.value))} className="input-field">
              {DIRECTIONS.map(d => {
                const guaData = BAGUA_DATA.find(g => g.id === d.guaId);
                const displayName = guaData ? `${guaData.name}-${d.name}` : d.name;
                return (
                  <option key={d.name} value={d.guaId}>{displayName}</option>
                );
              })}
            </select>
          </div>
          {commonTimeSelect}
          <button onClick={handleDirSubmit} className="w-full btn-primary">起卦</button>
        </div>
      )}

      {method === InputMethodId.CUSTOM && (
        <div className="space-y-4">
          <div>
            <label className="block text-ink font-serif mb-2">上卦</label>
            <select value={customUpper} onChange={e => setCustomUpper(parseInt(e.target.value))} className="input-field">
              {BAGUA_DATA.filter(g => g.id !== 0).map(g => (
                <option key={g.id} value={g.id}>{g.name} - {g.nature}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-ink font-serif mb-2">下卦</label>
            <select value={customLower} onChange={e => setCustomLower(parseInt(e.target.value))} className="input-field">
              {BAGUA_DATA.filter(g => g.id !== 0).map(g => (
                <option key={g.id} value={g.id}>{g.name} - {g.nature}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-ink font-serif mb-2">动爻</label>
            <select value={customYao} onChange={e => setCustomYao(parseInt(e.target.value))} className="input-field">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n}爻</option>
              ))}
            </select>
          </div>
          <button onClick={handleCustomSubmit} className="w-full btn-primary">排盘</button>
        </div>
      )}

      <button onClick={onBack} className="w-full mt-4 text-stone-500 underline hover:text-c-brown">
        返回
      </button>

      <style>{`
        .input-field {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #a8a29e;
          background-color: #f7f5f0;
          border-radius: 0.125rem;
          outline: none;
        }
        .input-field:focus {
          border-color: #8b0000;
        }
        .btn-primary {
          background-color: #8b0000;
          color: #f7f5f0;
          padding: 0.75rem;
          font-family: "Noto Serif SC", serif;
          font-weight: bold;
          border-radius: 0.25rem;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #5d0000;
        }
      `}</style>
    </div>
  );
};