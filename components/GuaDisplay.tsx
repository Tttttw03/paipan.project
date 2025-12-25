import React from 'react';
import { BaGua, ElementType } from '../types';
import { ELEMENT_COLORS, getGuaCi } from '../constants';

interface GuaDisplayProps {
  upper: BaGua;
  lower: BaGua;
  name: string;
  title: string;
  isMoving?: boolean;
  movingYaoIndex?: number; // 1-6
  tiYongLabel?: 'upper' | 'lower' | null; // 'upper' 表示上卦为体，'lower' 表示下卦为体
}

const YaoLine: React.FC<{ isYang: boolean; colorClass: string; isMoving?: boolean }> = ({ isYang, colorClass, isMoving }) => {
  return (
    <div className={`flex gap-2 items-center justify-center h-6 my-1 w-24 ${isMoving ? 'animate-pulse' : ''}`}>
      {isYang ? (
        <div className={`w-full h-4 ${colorClass} bg-current rounded-sm`}></div>
      ) : (
        <>
          <div className={`w-[45%] h-4 ${colorClass} bg-current rounded-sm`}></div>
          <div className="w-[10%]"></div>
          <div className={`w-[45%] h-4 ${colorClass} bg-current rounded-sm`}></div>
        </>
      )}
      {isMoving && <span className="absolute right-0 text-red-500 text-xs font-bold">○</span>}
    </div>
  );
};

export const GuaDisplay: React.FC<GuaDisplayProps> = ({ upper, lower, name, title, movingYaoIndex, tiYongLabel }) => {
  // Combine lines for rendering (Top to Bottom for visual, but data is Bottom to Top)
  // Upper lines: 2 (top), 1, 0 (bottom) relative to upper
  // Lower lines: 2, 1, 0 relative to lower

  // Moving index passed is 1-6 (1 is bottom of lower)

  return (
    <div className="flex items-start gap-2">
      {/* Left side Ti/Yong labels - outside the white box */}
      <div className="flex flex-col justify-center pt-12" style={{ height: '280px', minWidth: '20px' }}>
        {tiYongLabel && (
          <>
            {/* Upper label */}
            <div className="h-1/2 flex items-center justify-end" style={{ height: '90px' }}>
              {tiYongLabel === 'upper' && (
                <span className="text-base font-serif font-bold" style={{ color: '#8B0000' }}>体</span>
              )}
              {tiYongLabel === 'lower' && (
                <span className="text-base font-serif font-bold" style={{ color: '#8B0000' }}>用</span>
              )}
            </div>
            {/* Lower label */}
            <div className="h-1/2 flex items-center justify-end" style={{ height: '90px' }}>
              {tiYongLabel === 'upper' && (
                <span className="text-base font-serif font-bold" style={{ color: '#8B0000' }}>用</span>
              )}
              {tiYongLabel === 'lower' && (
                <span className="text-base font-serif font-bold" style={{ color: '#8B0000' }}>体</span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Main card with white background */}
      <div className="flex flex-col items-center p-4 bg-white/80 border border-stone-300 rounded-sm shadow-sm">
        <h3 className="text-lg font-serif font-bold text-c-brown mb-2">{title}</h3>

        {/* Hexagram lines */}
        <div className="flex flex-col relative">
          {/* Upper Trigram (Lines 6, 5, 4) */}
          <div className="flex flex-col-reverse border-b border-dotted border-stone-300 pb-1 mb-1" title={`${upper.name} (${upper.element})`}>
            {[0, 1, 2].map(idx => (
              <YaoLine
                key={`upper-${idx}`}
                isYang={upper.lines[idx] === 1}
                colorClass={ELEMENT_COLORS[upper.element]}
                isMoving={movingYaoIndex === (idx + 4)}
              />
            ))}
          </div>

          {/* Lower Trigram (Lines 3, 2, 1) */}
          <div className="flex flex-col-reverse pt-1" title={`${lower.name} (${lower.element})`}>
            {[0, 1, 2].map(idx => (
              <YaoLine
                key={`lower-${idx}`}
                isYang={lower.lines[idx] === 1}
                colorClass={ELEMENT_COLORS[lower.element]}
                isMoving={movingYaoIndex === (idx + 1)}
              />
            ))}
          </div>
        </div>

        {/* Gua Name */}
        <div className="mt-3 text-center">
          <div className="text-2xl font-cursive text-ink">{name}</div>
          <div className="text-xs text-stone-500 mt-1 flex justify-center gap-2">
            <span className={ELEMENT_COLORS[upper.element]}>上{upper.name}{upper.element}</span>
            <span className="text-stone-300">|</span>
            <span className={ELEMENT_COLORS[lower.element]}>下{lower.name}{lower.element}</span>
          </div>
        </div>
      </div>
    </div>
  );
};