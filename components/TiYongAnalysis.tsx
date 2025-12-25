import React, { useState } from 'react';
import { DivinationResult, ElementType } from '../types';
import { analyzeTiYongRelation, getGuaQiStatus, calculateTiYongParty, getCurrentLunarMonth } from '../services/guaAnalysis';
import { EARTHLY_BRANCHES } from '../constants';

interface TiYongAnalysisProps {
  result: DivinationResult;
}

// 天干数组
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 地支数组
const EARTHLY_BRANCHES_ARRAY = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 计算指定日期的干支 (使用更准确的算法)
const calculateGanZhi = (date: Date): string => {
  // 使用更准确的基准日期：1984年1月1日是甲子日
  // 但由于时区问题，我们需要调整基准日期
  // 我们使用一个已知的准确日期作为基准：2025年12月10日是癸丑日

  // 基准日期：2025年12月10日是癸丑日
  const baseDate = new Date(2025, 11, 10); // 月份从0开始，所以11代表12月
  const baseGanIndex = 9; // 癸 (在数组中的索引)
  const baseZhiIndex = 1; // 丑 (在数组中的索引)

  // 计算相差天数
  const timeDiff = date.getTime() - baseDate.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // 计算当天的天干地支索引
  // 注意：天干周期是10，地支周期是12
  let ganIndex = (baseGanIndex + dayDiff) % 10;
  let zhiIndex = (baseZhiIndex + dayDiff) % 12;

  // 处理负数情况
  if (ganIndex < 0) ganIndex += 10;
  if (zhiIndex < 0) zhiIndex += 12;

  // 返回干支字符串
  return `${HEAVENLY_STEMS[ganIndex]}${EARTHLY_BRANCHES_ARRAY[zhiIndex]}日`;
};

export const TiYongAnalysis: React.FC<TiYongAnalysisProps> = ({ result }) => {
  const { benGua, bianGua, huGua, analysis, movingYao } = result;

  // 状态管理用于展开/收起功能
  const [expandedSections, setExpandedSections] = useState({
    tiYongRelation: false,
    guaQiStatus: false,
    tiYongParty: false,
    waiGua: false // 合并后的外卦部分
  });

  // 切换展开/收起状态
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 确定体用卦
  let benTi, benYong, bianTi, bianYong;
  if (movingYao <= 3) {
    benTi = benGua.upper;
    benYong = benGua.lower;
    bianTi = bianGua.upper;
    bianYong = bianGua.lower;
  } else {
    benTi = benGua.lower;
    benYong = benGua.upper;
    bianTi = bianGua.lower;
    bianYong = bianGua.upper;
  }

  // 计算本卦和变卦的体用生克关系
  const benRelation = analyzeTiYongRelation(benTi, benYong);
  const bianRelation = analyzeTiYongRelation(bianTi, bianYong);

  // 获取当前农历月份（实际应该从起卦时间获取）
  // 传入起卦时间，确保时间起卦时使用的是用户输入的时间
  const lunarMonth = getCurrentLunarMonth(result.timestamp);

  // 获取月份对应的五行属性
  const getMonthElement = (monthBranch: string): string => {
    if (['寅', '卯'].includes(monthBranch)) return '木';
    if (['巳', '午'].includes(monthBranch)) return '火';
    if (['申', '酉'].includes(monthBranch)) return '金';
    if (['亥', '子'].includes(monthBranch)) return '水';
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '土';
    return '未知';
  };

  const monthElement = getMonthElement(lunarMonth);

  // 计算卦气旺衰
  const benTiQi = getGuaQiStatus(benTi.element, lunarMonth);
  const benYongQi = getGuaQiStatus(benYong.element, lunarMonth);
  const bianTiQi = getGuaQiStatus(bianTi.element, lunarMonth);
  const bianYongQi = getGuaQiStatus(bianYong.element, lunarMonth);

  // 确定互卦的体用
  let huTi, huYong;
  if (movingYao <= 3) {
    huTi = huGua.upper;
    huYong = huGua.lower;
  } else {
    huTi = huGua.lower;
    huYong = huGua.upper;
  }

  // 计算体党、用党
  const party = calculateTiYongParty(benTi, benYong, bianYong, benYong, huTi, huYong, bianYong);

  // 日应分析
  // 根据时间戳获取正确的干支信息
  const getRiYingInfo = () => {
    // 从时间戳中解析日期
    const timestamp = result.timestamp;
    let date: Date;

    try {
      // 尝试解析时间戳（格式：YYYY/M/D H:mm:ss 或类似格式）
      // 使用 Date 构造函数可以直接解析大多数标准日期字符串
      date = new Date(timestamp);

      // 检查日期是否有效
      if (isNaN(date.getTime())) {
        console.warn("无法解析时间戳，使用当前日期:", timestamp);
        date = new Date();
      }
    } catch (e) {
      console.error("解析时间戳时出错:", timestamp, e);
      // 出错时使用当前日期
      date = new Date();
    }

    // 计算当日干支
    const ganZhi = calculateGanZhi(date);
    // 提取地支（倒数第二个字符）
    const diZhi = ganZhi.charAt(ganZhi.length - 2);

    // 根据地支确定五行属性
    // 寅卯属木、巳午属火、申酉属金、亥子属水、辰戌丑未属土
    let wuXing: ElementType;
    if (['寅', '卯'].includes(diZhi)) {
      wuXing = ElementType.WOOD;
    } else if (['巳', '午'].includes(diZhi)) {
      wuXing = ElementType.FIRE;
    } else if (['申', '酉'].includes(diZhi)) {
      wuXing = ElementType.METAL;
    } else if (['亥', '子'].includes(diZhi)) {
      wuXing = ElementType.WATER;
    } else if (['辰', '戌', '丑', '未'].includes(diZhi)) {
      wuXing = ElementType.EARTH;
    } else {
      wuXing = ElementType.EARTH; // 默认
    }

    return { ganZhi, diZhi, wuXing };
  };

  const { ganZhi, diZhi, wuXing } = getRiYingInfo();

  // 分析日辰与体卦的生克关系（只显示：生体/克体/比和/被体生/被体克）
  const analyzeRiYingRelation = () => {
    const tiElement = benTi.element;
    const riElement = wuXing;

    if (tiElement === riElement) {
      return '比和';
    }

    // 生克关系判断
    const generates = (a: ElementType, b: ElementType) => {
      if (a === ElementType.METAL && b === ElementType.WATER) return true;
      if (a === ElementType.WATER && b === ElementType.WOOD) return true;
      if (a === ElementType.WOOD && b === ElementType.FIRE) return true;
      if (a === ElementType.FIRE && b === ElementType.EARTH) return true;
      if (a === ElementType.EARTH && b === ElementType.METAL) return true;
      return false;
    };

    const restricts = (a: ElementType, b: ElementType) => {
      if (a === ElementType.METAL && b === ElementType.WOOD) return true;
      if (a === ElementType.WOOD && b === ElementType.EARTH) return true;
      if (a === ElementType.EARTH && b === ElementType.WATER) return true;
      if (a === ElementType.WATER && b === ElementType.FIRE) return true;
      if (a === ElementType.FIRE && b === ElementType.METAL) return true;
      return false;
    };

    // 日生体
    if (generates(riElement, tiElement)) {
      return '生体';
    }
    // 日克体
    else if (restricts(riElement, tiElement)) {
      return '克体';
    }
    // 体生日（被体生）
    else if (generates(tiElement, riElement)) {
      return '被体生';
    }
    // 体克日（被体克）
    else if (restricts(tiElement, riElement)) {
      return '被体克';
    }

    return '关系未明';
  };

  // 获取吉凶颜色
  const getVerdictColor = (verdict: string) => {
    if (verdict.includes('大吉')) return 'text-red-600 font-bold';
    if (verdict.includes('吉')) return 'text-red-500';
    if (verdict.includes('大凶')) return 'text-black font-bold';
    if (verdict.includes('凶')) return 'text-stone-700';
    return 'text-stone-600';
  };

  // 归类显示卦气状态:旺、相属于"旺";休为"平";囚、死属于"衰"
  const getQiCategory = (status: '旺' | '相' | '休' | '囚' | '死'): '旺' | '平' | '衰' => {
    if (status === '旺' || status === '相') return '旺';
    if (status === '休') return '平';
    return '衰'; // 囚、死
  };

  const getQiColor = (status: '旺' | '相' | '休' | '囚' | '死') => {
    const category = getQiCategory(status);
    if (category === '旺') return 'text-red-600 font-semibold';
    if (category === '衰') return 'text-blue-600 font-semibold';
    return 'text-stone-600';
  };

  return (
    <div className="bg-paper border border-c-brown p-6 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-c-brown"></div>
      <h3 className="text-xl font-serif font-bold text-c-brown mb-4 border-b border-stone-300 pb-2">
        相关分析
      </h3>

      <div className="space-y-6 text-ink font-serif">
        {/* 第一部分：体用生克关系 */}
        <div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('tiYongRelation')}>
            <h4 className="font-bold text-c-red mb-3">【体用生克关系】</h4>
            <span className="text-sm text-c-brown">
              {expandedSections.tiYongRelation ? '收起 ▲' : '展开 ▼'}
            </span>
          </div>

          {expandedSections.tiYongRelation && (
            <>
              {/* 本卦体用生克 */}
              <div className="mb-3 p-3 bg-stone-50 rounded border border-stone-200">
                <div className="text-sm font-bold text-c-brown mb-2">本卦：</div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span>体卦：{benTi.name}（{benTi.element}）</span>
                  <span>用卦：{benYong.name}（{benYong.element}）</span>
                </div>
                <div className="text-center mt-2">
                  <span className={`text-base ${getVerdictColor(benRelation.verdict)}`}>
                    {benRelation.relation}：{benRelation.verdict}，{benRelation.description}
                  </span>
                </div>
              </div>

              {/* 变卦体用生克 */}
              <div className="p-3 bg-stone-50 rounded border border-stone-200">
                <div className="text-sm font-bold text-c-brown mb-2">变卦：</div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span>体卦：{bianTi.name}（{bianTi.element}）</span>
                  <span>用卦：{bianYong.name}（{bianYong.element}）</span>
                </div>
                <div className="text-center mt-2">
                  <span className={`text-base ${getVerdictColor(bianRelation.verdict)}`}>
                    {bianRelation.relation}：{bianRelation.verdict}，{bianRelation.description}
                  </span>
                </div>
              </div>

              <div className="text-xs text-stone-500 mt-2 pl-2 border-l-2 border-stone-300">
                体生用：小凶，主损耗 | 体克用：小吉，事缓成 | 用生体：吉，增益 | 用克体：大凶，凶险 | 体用比和：大吉，顺遂
              </div>
            </>
          )}
        </div>

        {/* 第二部分：卦气旺衰 */}
        <div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('guaQiStatus')}>
            <h4 className="font-bold text-c-red mb-3">
              【卦气旺衰】
              <span className="text-sm font-normal text-c-brown ml-2">
                当前:{lunarMonth}月({monthElement})
              </span>
            </h4>
            <span className="text-sm text-c-brown">
              {expandedSections.guaQiStatus ? '收起 ▲' : '展开 ▼'}
            </span>
          </div>

          {expandedSections.guaQiStatus && (
            <>
              {/* 本卦卦气 */}
              <div className="mb-3 p-3 bg-amber-50/30 rounded border border-amber-200">
                <div className="text-sm font-bold text-c-brown mb-2">本卦：</div>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    体卦 {benTi.name}（{benTi.element}）：
                    <span className={getQiColor(benTiQi)}>{benTiQi}({getQiCategory(benTiQi)})</span>
                  </span>
                  <span>
                    用卦 {benYong.name}（{benYong.element}）：
                    <span className={getQiColor(benYongQi)}>{benYongQi}({getQiCategory(benYongQi)})</span>
                  </span>
                </div>
              </div>

              {/* 变卦卦气 */}
              <div className="p-3 bg-amber-50/30 rounded border border-amber-200">
                <div className="text-sm font-bold text-c-brown mb-2">变卦：</div>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    体卦 {bianTi.name}（{bianTi.element}）：
                    <span className={getQiColor(bianTiQi)}>{bianTiQi}({getQiCategory(bianTiQi)})</span>
                  </span>
                  <span>
                    用卦 {bianYong.name}（{bianYong.element}）：
                    <span className={getQiColor(bianYongQi)}>{bianYongQi}({getQiCategory(bianYongQi)})</span>
                  </span>
                </div>
              </div>

              <div className="text-xs text-stone-500 mt-2 pl-2 border-l-2 border-stone-300">
                卦气状态：旺、相属于"旺"; 休为"平"; 囚、死属于"衰" | 木旺春(寅卢)衰秋(申酉) | 火旺夏(巳午)衰冬(亥子) | 金旺秋(申酉)衰夏(巳午) | 水旺冬(亥子)衰土月(辰戌丑未) | 土旺四季月(辰戌丑未)衰春(寅卢)
              </div>
            </>
          )}
        </div>

        {/* 第三部分：体党用党 */}
        <div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('tiYongParty')}>
            <h4 className="font-bold text-c-red mb-3">【体党用党】</h4>
            <span className="text-sm text-c-brown">
              {expandedSections.tiYongParty ? '收起 ▲' : '展开 ▼'}
            </span>
          </div>

          {expandedSections.tiYongParty && (
            <div className="p-4 bg-blue-50/30 rounded border border-blue-200">
              <div className="text-base text-stone-700 leading-relaxed">
                体卦的同类(体党)多，即：用卦、互之用(互卦的用)、互之体(互卦的体)、变卦之五行与体卦五行同类多者，则体卦卦气、卦势旺盛；用卦的同类(用党)多，则体卦卦气、卦势必然衰弱。
              </div>
            </div>
          )}
        </div>

        {/* 第四部分：外卦（合并了日应和方应） */}
        <div>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('waiGua')}>
            <h4 className="font-bold text-c-red mb-3">【外卦】</h4>
            <span className="text-sm text-c-brown">
              {expandedSections.waiGua ? '收起 ▲' : '展开 ▼'}
            </span>
          </div>

          {expandedSections.waiGua && (
            <div className="space-y-4">
              {/* 日应部分 */}
              <div className="p-4 bg-amber-50/30 rounded border border-amber-200">
                <h5 className="font-bold text-c-brown mb-2">日应</h5>
                <div className="space-y-2 text-base">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-c-brown">当日干支：</span>
                    <span>{ganZhi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-c-brown">日辰属性：</span>
                    <span>{diZhi}（{wuXing}）</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-c-brown">与体卦关系：</span>
                    <span>{analyzeRiYingRelation()}</span>
                  </div>
                </div>
              </div>

              {/* 方应部分 */}
              <div className="p-4 bg-blue-50/30 rounded border border-blue-200">
                <h5 className="font-bold text-c-brown mb-2">方应</h5>
                <div className="text-base text-stone-700">
                  看问卜者所在或事物发生的方位。若所在方能生体卦或与体卦比和则吉；若为克体则凶；若为体卦生之（反向生）亦不利。
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 说明 */}
        <div className="text-xs text-stone-500 bg-stone-100/50 p-3 rounded border border-stone-200 leading-relaxed">
          <p><span className="font-bold">注：</span>体为己，用为事。本卦看开始，互卦看过程，变卦看结局，<span className="font-bold text-c-red">卦是动态的过程</span>。</p>
          <p className="mt-1">体用生克关系不仅限于看本、变卦，还有用卦与用卦、体卦与体卦之间，按重要性依次进行分析。</p>
        </div>
      </div>
    </div>
  );
};
