import React, { useState, useRef } from 'react';
import { getGuaCi, getYaoCi, getShaoYong } from '../constants';
import { BaguaAttributes } from './BaguaAttributes';

interface GuaDetailsProps {
  benGuaName: string;
  bianGuaName: string;
  movingYao: number;
  result?: any; // 添加 result 属性用于 BaguaAttributes
}

export const GuaDetails: React.FC<GuaDetailsProps> = ({ benGuaName, bianGuaName, movingYao, result }) => {
  const [activeTab, setActiveTab] = useState<'gua' | 'yao' | 'biangua' | 'bagua'>('gua');
  const [isGuaCiExpanded, setIsGuaCiExpanded] = useState(false);
  const [isBianGuaCiExpanded, setIsBianGuaCiExpanded] = useState(false);

  // 创建 refs 用于滚动控制
  const guaCiRef = useRef<HTMLDivElement>(null);
  const bianGuaCiRef = useRef<HTMLDivElement>(null);

  const guaCiText = getGuaCi(benGuaName);
  const shaoYongText = getShaoYong(benGuaName);
  const bianGuaCiText = getGuaCi(bianGuaName);
  const bianShaoYongText = getShaoYong(bianGuaName);
  const yaoCiText = getYaoCi(benGuaName, movingYao);

  // 切换展开/收起状态的函数
  const toggleGuaCi = () => {
    if (isGuaCiExpanded && guaCiRef.current) {
      guaCiRef.current.scrollTop = 0;
    }
    setIsGuaCiExpanded(!isGuaCiExpanded);
  };

  const toggleBianGuaCi = () => {
    if (isBianGuaCiExpanded && bianGuaCiRef.current) {
      bianGuaCiRef.current.scrollTop = 0;
    }
    setIsBianGuaCiExpanded(!isBianGuaCiExpanded);
  };

  // 格式化文本，突出显示小标题
  const formatText = (text: string) => {
    let filteredText = text;



    // 清理多余的空白行
    filteredText = filteredText.replace(/\n\s*\n\s*\n/g, '\n\n');

    const lines = filteredText.split('\n');

    return lines.map((line, index) => {
      // 定义需要突出的标题模式
      const titlePatterns = [
        { regex: /^(【白话文解释】)/, name: '白话文解释' },
        { regex: /^(【北宋易学家邵雍解】)/, name: '北宋易学家邵雍解' },
        { regex: /^(《[^》]+》说)/, name: '书名号说' },
        { regex: /^(《[^》]+》解)/, name: '书名号解' },
        { regex: /^(《[^》]+》)/, name: '书名号' },
        { regex: /^(台湾国学大儒傅佩荣解)/, name: '傅佩荣解' },
        { regex: /^(北宋易学家邵雍解)/, name: '邵雍解' },
        { regex: /^(传统解卦)/, name: '传统解卦' },
        { regex: /^(台湾张铭仁解卦)/, name: '张铭仁解卦' },
        { regex: /^(邵雍河洛理数解卦)/, name: '邵雍河洛' },
        { regex: /^(傅佩荣解卦手册)/, name: '傅佩荣手册' },
        { regex: /^(白话文解释)/, name: '白话文' },
        { regex: /^(大象)[:：]/, name: '大象' },
        { regex: /^(运势)[:：]/, name: '运势' },
        { regex: /^(事业)[:：]/, name: '事业' },
        { regex: /^(经商)[:：]/, name: '经商' },
        { regex: /^(求名)[:：]/, name: '求名' },
        { regex: /^(婚恋)[:：]/, name: '婚恋' },
        { regex: /^(决策)[:：]/, name: '决策' },
        { regex: /^(解释)[:：]/, name: '解释' },
        { regex: /^(特性)[:：]/, name: '特性' },
        { regex: /^(家运)[:：]/, name: '家运' },
        { regex: /^(疾病)[:：]/, name: '疾病' },
        { regex: /^(胎孕)[:：]/, name: '胎孕' },
        { regex: /^(子女)[:：]/, name: '子女' },
        { regex: /^(周转)[:：]/, name: '周转' },
        { regex: /^(买卖)[:：]/, name: '买卖' },
        { regex: /^(等人)[:：]/, name: '等人' },
        { regex: /^(寻人)[:：]/, name: '寻人' },
        { regex: /^(失物)[:：]/, name: '失物' },
        { regex: /^(外出)[:：]/, name: '外出' },
        { regex: /^(考试)[:：]/, name: '考试' },
        { regex: /^(诉讼)[:：]/, name: '诉讼' },
        { regex: /^(求事)[:：]/, name: '求事' },
        { regex: /^(改行)[:：]/, name: '改行' },
        { regex: /^(开业)[:：]/, name: '开业' }
      ];

      // 检查是否匹配任何标题模式
      for (const pattern of titlePatterns) {
        const match = line.match(pattern.regex);
        if (match) {
          const title = match[1];
          const rest = line.substring(title.length);
          return (
            <div key={index} className="mt-3">
              <span className="font-bold text-c-brown">{title}</span>
              {rest}
            </div>
          );
        }
      }

      // 检查是否是卦名开头（如"否卦："、"萃卦："）
      const guaNameMatch = line.match(/^([^：:]+卦)[:：](.*)/);
      if (guaNameMatch) {
        const guaName = guaNameMatch[1]; // 否卦、萃卦等
        const rest = guaNameMatch[2]; // 冒号后的内容
        return (
          <div key={index}>
            <span className="font-bold text-c-brown">{guaName}：</span>
            {rest}
          </div>
        );
      }

      // 普通行（保留空行）
      return <div key={index}>{line || '\u00A0'}</div>;
    });
  };

  // 格式化爻辞文本，仅在【北宋易学家邵雍解】部分为吉凶平添加颜色
  const formatYaoText = (text: string) => {
    const lines = text.split('\n');
    let inShaoYongSection = false; // 标记是否在邵雍解部分

    return lines.map((line, index) => {
      // 定义需要突出的标题模式（与formatText相同）
      const titlePatterns = [
        { regex: /^(【白话文解释】)/, name: '白话文解释', isShaoYong: false },
        { regex: /^(【北宋易学家邵雍解】)/, name: '北宋易学家邵雍解', isShaoYong: true },
        { regex: /^(《[^》]+》说)/, name: '书名号说', isShaoYong: false },
        { regex: /^(《[^》]+》解)/, name: '书名号解', isShaoYong: false },
        { regex: /^(《[^》]+》)/, name: '书名号', isShaoYong: false },
        { regex: /^(台湾国学大儒傅佩荣解)/, name: '傅佩荣解', isShaoYong: false },
        { regex: /^(北宋易学家邵雍解)/, name: '邵雍解', isShaoYong: true },
        { regex: /^(传统解卦)/, name: '传统解卦', isShaoYong: false },
        { regex: /^(台湾张铭仁解卦)/, name: '张铭仁解卦', isShaoYong: false },
        { regex: /^(邵雍河洛理数解卦)/, name: '邵雍河洛', isShaoYong: true },
        { regex: /^(傅佩荣解卦手册)/, name: '傅佩荣手册', isShaoYong: false },
        { regex: /^(白话文解释)/, name: '白话文', isShaoYong: false },
        { regex: /^(大象)[:：]/, name: '大象', isShaoYong: false },
        { regex: /^(运势)[:：]/, name: '运势', isShaoYong: false },
        { regex: /^(事业)[:：]/, name: '事业', isShaoYong: false },
        { regex: /^(经商)[:：]/, name: '经商', isShaoYong: false },
        { regex: /^(求名)[:：]/, name: '求名', isShaoYong: false },
        { regex: /^(婚恋)[:：]/, name: '婚恋', isShaoYong: false },
        { regex: /^(决策)[:：]/, name: '决策', isShaoYong: false },
        { regex: /^(解释)[:：]/, name: '解释', isShaoYong: false },
        { regex: /^(特性)[:：]/, name: '特性', isShaoYong: false },
        { regex: /^(家运)[:：]/, name: '家运', isShaoYong: false },
        { regex: /^(疾病)[:：]/, name: '疾病', isShaoYong: false },
        { regex: /^(胎孕)[:：]/, name: '胎孕', isShaoYong: false },
        { regex: /^(子女)[:：]/, name: '子女', isShaoYong: false },
        { regex: /^(周转)[:：]/, name: '周转', isShaoYong: false },
        { regex: /^(买卖)[:：]/, name: '买卖', isShaoYong: false },
        { regex: /^(等人)[:：]/, name: '等人', isShaoYong: false },
        { regex: /^(寻人)[:：]/, name: '寻人', isShaoYong: false },
        { regex: /^(失物)[:：]/, name: '失物', isShaoYong: false },
        { regex: /^(外出)[:：]/, name: '外出', isShaoYong: false },
        { regex: /^(考试)[:：]/, name: '考试', isShaoYong: false },
        { regex: /^(诉讼)[:：]/, name: '诉讼', isShaoYong: false },
        { regex: /^(求事)[:：]/, name: '求事', isShaoYong: false },
        { regex: /^(改行)[:：]/, name: '改行', isShaoYong: false },
        { regex: /^(开业)[:：]/, name: '开业', isShaoYong: false }
      ];

      // 检查是否匹配任何标题模式
      for (const pattern of titlePatterns) {
        const match = line.match(pattern.regex);
        if (match) {
          const title = match[1];
          const rest = line.substring(title.length);
          inShaoYongSection = pattern.isShaoYong; // 更新状态
          // 只在邵雍解部分对标题后的内容进行吉凶平着色
          const coloredRest = inShaoYongSection ? highlightJiXiongPing(rest) : rest;
          return (
            <div key={index} className="mt-3">
              <span className="font-bold text-c-brown">{title}</span>
              {coloredRest}
            </div>
          );
        }
      }

      // 普通行，只在邵雍解部分为吉凶平添加颜色
      const content = line || '\u00A0';
      const coloredLine = inShaoYongSection ? highlightJiXiongPing(content) : content;
      return <div key={index}>{coloredLine}</div>;
    });
  };

  // 为文本中的吉凶平添加颜色（仅匹配带冒号的：吉：、凶：、平：）
  const highlightJiXiongPing = (text: string) => {
    if (!text || text === '\u00A0') return text;

    // 使用正则表达式匹配吉：、凶：、平：（包括中英文冒号）
    const parts = text.split(/(吉[:：]|凶[:：]|平[:：])/);

    return parts.map((part, idx) => {
      if (part === '吉：' || part === '吉:') {
        return <span key={idx} className="text-red-600 font-semibold">{part}</span>;
      } else if (part === '凶：' || part === '凶:') {
        return <span key={idx} className="text-black font-semibold">{part}</span>;
      } else if (part === '平：' || part === '平:') {
        return <span key={idx} className="text-blue-600 font-semibold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="bg-paper border border-c-brown p-6 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-c-brown"></div>

      {/* Tab Navigation */}
      <div className="flex border-b border-stone-300 mb-4">
        <button
          className={`px-4 py-2 font-serif text-sm ${activeTab === 'gua' ? 'text-c-red border-b-2 border-c-red' : 'text-stone-600'}`}
          onClick={() => setActiveTab('gua')}
        >
          卦辞解读（本卦）
        </button>
        <button
          className={`px-4 py-2 font-serif text-sm ${activeTab === 'biangua' ? 'text-c-red border-b-2 border-c-red' : 'text-stone-600'}`}
          onClick={() => setActiveTab('biangua')}
        >
          卦辞解读（变卦）
        </button>
        <button
          className={`px-4 py-2 font-serif text-sm ${activeTab === 'yao' ? 'text-c-red border-b-2 border-c-red' : 'text-stone-600'}`}
          onClick={() => setActiveTab('yao')}
        >
          爻辞解释
        </button>
        <button
          className={`px-4 py-2 font-serif text-sm ${activeTab === 'bagua' ? 'text-c-red border-b-2 border-c-red' : 'text-stone-600'}`}
          onClick={() => setActiveTab('bagua')}
        >
          八卦万物属类
        </button>
      </div>

      {/* Tab Content */}
      <div className="font-serif text-ink">
        {activeTab === 'gua' && (
          <div className="space-y-4">
            {/* 卦辞部分 */}
            <div className="border-b border-stone-200 pb-4 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-c-red">【{benGuaName}卦辞】</span>
                <button
                  onClick={toggleGuaCi}
                  className="text-xs text-stone-500 hover:text-c-red transition-colors px-2 py-1 border border-stone-300 rounded"
                >
                  {isGuaCiExpanded ? '收起 ▲' : '展开 ▼'}
                </button>
              </div>
              <div
                ref={guaCiRef}
                className={`leading-7 overflow-hidden transition-all duration-300 relative ${isGuaCiExpanded ? 'max-h-[600px] overflow-y-auto' : 'max-h-32'
                  }`}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#8B4513 #F5F5DC'
                }}
              >
                <div className="text-sm">{formatText(guaCiText)}</div>
              </div>
              {!isGuaCiExpanded && guaCiText.length > 200 && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* 邵雍解部分 */}
            <div>
              <div className="mb-2">
                <span className="font-bold text-c-red">【北宋易学家邵雍解】</span>
              </div>
              <div className="leading-7 text-sm">
                {formatText(shaoYongText)}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'biangua' && (
          <div className="space-y-4">
            {/* 变卦卦辞部分 */}
            <div className="border-b border-stone-200 pb-4 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-c-red">【{bianGuaName}卦辞】</span>
                <button
                  onClick={toggleBianGuaCi}
                  className="text-xs text-stone-500 hover:text-c-red transition-colors px-2 py-1 border border-stone-300 rounded"
                >
                  {isBianGuaCiExpanded ? '收起 ▲' : '展开 ▼'}
                </button>
              </div>
              <div
                ref={bianGuaCiRef}
                className={`leading-7 overflow-hidden transition-all duration-300 relative ${isBianGuaCiExpanded ? 'max-h-[600px] overflow-y-auto' : 'max-h-32'
                  }`}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#8B4513 #F5F5DC'
                }}
              >
                <div className="text-sm">{formatText(bianGuaCiText)}</div>
              </div>
              {!isBianGuaCiExpanded && bianGuaCiText.length > 200 && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* 变卦邵雍解部分 */}
            <div>
              <div className="mb-2">
                <span className="font-bold text-c-red">【北宋易学家邵雍解】</span>
              </div>
              <div className="leading-7 text-sm">
                {formatText(bianShaoYongText)}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'yao' && (
          <div>
            <span className="font-bold text-c-red">【第{movingYao}爻】</span>
            <div className="mt-2 leading-7 max-h-[500px] overflow-y-auto text-sm"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#8B4513 #F5F5DC'
              }}
            >
              <div>{formatYaoText(yaoCiText)}</div>
            </div>
          </div>
        )}

        {activeTab === 'bagua' && (
          <BaguaAttributes result={result} />
        )}
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: #F5F5DC;
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb {
          background: #8B4513;
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #654321;
        }
      `}</style>
    </div>
  );
};
