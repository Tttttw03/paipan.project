import React, { useState } from 'react';
import { DivinationResult } from '../types';
import { BAGUA_ATTRIBUTES } from '../data/baguaAttributes';

interface BaguaAttributesProps {
    result?: DivinationResult;
}

export const BaguaAttributes: React.FC<BaguaAttributesProps> = ({ result }) => {
    // 找出结果中出现过的所有单卦（去重）
    // 本卦上下、互卦上下、变卦上下
    const involvedGuas = result ? new Set([
        result.benGua.upper.name,
        result.benGua.lower.name,
        result.huGua.upper.name,
        result.huGua.lower.name,
        result.bianGua.upper.name,
        result.bianGua.lower.name,
    ]) : new Set();

    // 映射中文名到ID的辅助函数 (或直接匹配name)
    const isRelevant = (guaName: string) => {
        // 数据中的name是 "乾卦"，而result中的name是 "乾"
        return result && involvedGuas.has(guaName.replace('卦', ''));
    };

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // 格式化描述文本，将冒号前的小标题加粗
    const formatDescription = (text: string) => {
        // 将文本按行分割
        const lines = text.split('\n');
        
        return lines.map((line, index) => {
            // 检查是否包含冒号，且冒号前有文字
            const colonIndex = line.indexOf('：');
            if (colonIndex > 0) {
                const title = line.substring(0, colonIndex);
                const content = line.substring(colonIndex);
                return (
                    <div key={index}>
                        <span className="font-bold text-c-brown">{title}</span>
                        <span>{content}</span>
                    </div>
                );
            }
            // 如果没有冒号，保持原样
            return <div key={index}>{line}</div>;
        });
    };

    return (
        <div className="p-3 mb-4 animate-fade-in" style={{ fontSize: '0.8rem', maxWidth: '700px' }}>
            <div className="space-y-2">
                {BAGUA_ATTRIBUTES.map((attr) => {
                    const relevant = isRelevant(attr.name);
                    const isExpanded = expandedId === attr.id;

                    return (
                        <div
                            key={attr.id}
                            className={`transition-all duration-300 ${isExpanded ? 'border-c-red' : ''}`}
                        >
                            <button
                                onClick={() => toggleExpand(attr.id)}
                                className={`w-full text-left px-2 py-2 flex justify-between items-center ${relevant ? 'bg-stone-50' : 'bg-transparent'
                                    } hover:bg-stone-100 transition-colors`}
                            >
                                <div className="flex items-center">
                                    <span className={`font-serif font-bold ${relevant ? 'text-c-red' : 'text-c-brown'}`}>
                                        {attr.name}
                                    </span>
                                </div>
                                <span className={`transform transition-transform duration-300 text-stone-400 ${isExpanded ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${isExpanded ? 'max-h-[600px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                                    }`}
                            >
                                <div 
                                    className="text-stone-600 leading-relaxed font-serif whitespace-pre-wrap max-h-[300px] overflow-y-auto"
                                    style={{
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#8B4513 #F5F5DC'
                                    }}
                                >
                                    {formatDescription(attr.description || "暂无内容")}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
