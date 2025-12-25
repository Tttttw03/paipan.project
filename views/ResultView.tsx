import React from 'react';
import { DivinationResult } from '../types';
import { GuaDisplay } from '../components/GuaDisplay';
import { GuaDetails } from '../components/GuaDetails';
import { TiYongAnalysis } from '../components/TiYongAnalysis';
import { BaguaAttributes } from '../components/BaguaAttributes';

interface ResultViewProps {
  result: DivinationResult;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  // 确定体用关系：动爻在下卦(1,2,3)则上卦为体，动爻在上卦(4,5,6)则下卦为体
  const tiYongLabel: 'upper' | 'lower' = result.movingYao <= 3 ? 'upper' : 'lower';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="text-center mb-8 border-b-2 border-c-red pb-4">
        <div className="text-stone-500 text-sm mb-2">
          {result.methodName === '时间起卦' ? result.methodName : `${result.timestamp} · ${result.methodName}`}
        </div>
        <h2 className="text-3xl font-cursive text-c-red">梅花易数排盘结果</h2>
      </div>

      {/* Main Gua Display */}
      <div className="overflow-x-auto mb-10">
        <div className="grid grid-cols-3 gap-4 min-w-max md:gap-8 px-2">
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-stone-400 mb-2 font-serif text-sm md:text-base">主事之始</div>
            <GuaDisplay
              upper={result.benGua.upper}
              lower={result.benGua.lower}
              name={result.benGua.name}
              title="本 卦"
              isMoving={true}
              movingYaoIndex={result.movingYao}
              tiYongLabel={tiYongLabel}
            />
          </div>

          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-stone-400 mb-2 font-serif text-sm md:text-base">过程发展</div>
            <GuaDisplay
              upper={result.huGua.upper}
              lower={result.huGua.lower}
              name={result.huGua.name}
              title="互 卦"
            />
          </div>

          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-stone-400 mb-2 font-serif text-sm md:text-base">最终结局</div>
            <GuaDisplay
              upper={result.bianGua.upper}
              lower={result.bianGua.lower}
              name={result.bianGua.name}
              title="变 卦"
              tiYongLabel={tiYongLabel}
            />
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>

        {/* Ti / Yong Analysis */}
        <TiYongAnalysis result={result} />

        {/* Gua Details with tabs */}
        <GuaDetails
          benGuaName={result.benGua.name}
          bianGuaName={result.bianGua.name}
          movingYao={result.movingYao}
          result={result}
        />

      </div>


      <div className="mt-10 text-center pb-10">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-stone-800 text-white font-serif rounded shadow hover:bg-c-brown transition-colors"
        >
          重新起卦
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
