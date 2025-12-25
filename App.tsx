import React, { useState } from 'react';
import { InputMethodId, DivinationResult } from './types';
import { calculateDivination } from './services/divinationService';
import { InputView } from './views/InputView';
import { ResultView } from './views/ResultView';

// Method Selection Cards
const METHODS = [
  { id: InputMethodId.TIME, name: '时间起卦', desc: '根据年月日时灵动起卦', icon: '⏳' },
  { id: InputMethodId.NUMBERS, name: '报数起卦', desc: '心念两数，直觉指引', icon: '🔢' },
  { id: InputMethodId.WORDS, name: '文字起卦', desc: '触机占断，字里乾坤', icon: '✍️' },
  { id: InputMethodId.OBJECTS, name: '物数起卦', desc: '观物计数，取象比类', icon: '🍎' },
  { id: InputMethodId.DIRECTION, name: '物象方位', desc: '环境风水，时空交织', icon: '🧭' },
  { id: InputMethodId.CUSTOM, name: '自定义', desc: '手动排盘，研究卦理', icon: '⚙️' },
];

function App() {
  const [view, setView] = useState<'home' | 'input' | 'result'>('home');
  const [selectedMethod, setSelectedMethod] = useState<InputMethodId | null>(null);
  const [result, setResult] = useState<DivinationResult | null>(null);

  const handleMethodSelect = (id: InputMethodId) => {
    setSelectedMethod(id);
    setView('input');
  };

  const handleDivination = (upper: number, lower: number, yao: number, customDate?: Date) => {
    const methodObj = METHODS.find(m => m.id === selectedMethod);
    const res = calculateDivination(upper, lower, yao, methodObj?.name || '未知方式', customDate);
    setResult(res);
    setView('result');
  };

  const resetApp = () => {
    setResult(null);
    setSelectedMethod(null);
    setView('home');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink">
      {/* Navbar */}
      <header className="bg-c-brown text-paper py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-cursive tracking-wider" onClick={resetApp} style={{ cursor: 'pointer' }}>
            梅花易数 <span className="text-sm font-serif opacity-80">在线排盘</span>
          </h1>
          <div className="hidden sm:block font-serif text-sm opacity-70">
            以玄制玄
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">

        {/* Home View: Method Selection */}
        {view === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-c-red mb-3">选择起卦方式</h2>
              <p className="text-stone-500 font-serif">心动意发，顺应自然。请选择最适合当下的起卦方式。</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {METHODS.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleMethodSelect(method.id)}
                  className="group bg-white p-6 rounded-sm border border-stone-300 shadow-sm hover:shadow-lg hover:border-c-red transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                  <h3 className="text-xl font-bold text-c-brown mb-2 font-serif">{method.name}</h3>
                  <p className="text-stone-500 text-sm">{method.desc}</p>
                  <div className="mt-4 w-8 h-0.5 bg-stone-200 group-hover:bg-c-red transition-colors"></div>
                </button>
              ))}
            </div>

            <div className="mt-16 text-center text-xs text-stone-400 font-serif">

            </div>
          </div>
        )}

        {/* Input View */}
        {view === 'input' && selectedMethod && (
          <InputView
            method={selectedMethod}
            onSubmit={handleDivination}
            onBack={() => setView('home')}
          />
        )}

        {/* Result View */}
        {view === 'result' && result && (
          <ResultView result={result} onReset={resetApp} />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-stone-200 py-6 text-center text-stone-500 text-sm font-serif border-t border-stone-300">
        <p>&copy; {new Date().getFullYear()} 梅花易数排盘系统 | 直观·完备·简明</p>
      </footer>
    </div>
  );
}

export default App;