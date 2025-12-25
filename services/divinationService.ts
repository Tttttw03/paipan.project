import { BAGUA_DATA, HEXAGRAM_NAMES, getGuaCi } from '../constants';
import { BaGua, DivinationResult, ElementType } from '../types';

/**
 * Helper to get modulo 8 result mapped to 1-8
 */
const mod8 = (num: number): number => {
  const res = num % 8;
  return res === 0 ? 8 : res;
};

/**
 * Helper to get modulo 6 result mapped to 1-6
 */
const mod6 = (num: number): number => {
  const res = num % 6;
  return res === 0 ? 6 : res;
};

/**
 * Analyze Five Elements relationship
 */
const analyzeFiveElements = (ti: BaGua, yong: BaGua): { relation: string; verdict: string; description: string } => {
  const t = ti.element;
  const y = yong.element;

  let relation = '';
  let verdict = '';
  let description = '';

  // Generation Cycle: Metal>Water>Wood>Fire>Earth>Metal
  // Restriction Cycle: Metal>Wood>Earth>Water>Fire>Metal

  const isSame = t === y;
  
  // Check Generation (Yong Generates Ti = Good, Ti Generates Yong = Bad)
  const generates = (a: ElementType, b: ElementType) => {
    if (a === ElementType.METAL && b === ElementType.WATER) return true;
    if (a === ElementType.WATER && b === ElementType.WOOD) return true;
    if (a === ElementType.WOOD && b === ElementType.FIRE) return true;
    if (a === ElementType.FIRE && b === ElementType.EARTH) return true;
    if (a === ElementType.EARTH && b === ElementType.METAL) return true;
    return false;
  };

  // Check Restriction (Yong Restricts Ti = Bad, Ti Restricts Yong = Good control)
  const restricts = (a: ElementType, b: ElementType) => {
    if (a === ElementType.METAL && b === ElementType.WOOD) return true;
    if (a === ElementType.WOOD && b === ElementType.EARTH) return true;
    if (a === ElementType.EARTH && b === ElementType.WATER) return true;
    if (a === ElementType.WATER && b === ElementType.FIRE) return true;
    if (a === ElementType.FIRE && b === ElementType.METAL) return true;
    return false;
  };

  if (isSame) {
    relation = '比和';
    verdict = '大吉';
    description = `体卦${ti.element}与用卦${yong.element}五行相同，为比和之象，主凡事顺遂，多得贵人相助。`;
  } else if (generates(y, t)) {
    relation = '用生体';
    verdict = '大吉';
    description = `用卦${yong.element}生体卦${ti.element}，为进益之喜，主做事易成，不费力气。`;
  } else if (generates(t, y)) {
    relation = '体生用';
    verdict = '小凶';
    description = `体卦${ti.element}生用卦${yong.element}，为泄气之象，主操心劳神，虽成亦累。`;
  } else if (restricts(t, y)) {
    relation = '体克用';
    verdict = '小吉';
    description = `体卦${ti.element}克用卦${yong.element}，为主导之象，虽有阻力但最终能成。`;
  } else if (restricts(y, t)) {
    relation = '用克体';
    verdict = '大凶';
    description = `用卦${yong.element}克体卦${ti.element}，为受制之象，主事多阻碍，甚至有损。`;
  }

  return { relation, verdict, description };
};

export const calculateDivination = (
  upperNum: number,
  lowerNum: number,
  movingYaoNum: number,
  methodName: string,
  customDate?: Date // 可选的自定义日期参数
): DivinationResult => {
  const upperId = mod8(upperNum);
  const lowerId = mod8(lowerNum);
  const movingYao = mod6(movingYaoNum);

  const benUpper = BAGUA_DATA[upperId];
  const benLower = BAGUA_DATA[lowerId];
  const benName = HEXAGRAM_NAMES[`${upperId}-${lowerId}`] || '未知卦';

  // Calculate Hu Gua (Mutual Hexagram)
  // Ben Gua Lines (bottom to top):
  // L1, L2, L3 (Lower)
  // L4, L5, L6 (Upper)
  // Hu Lower = L2, L3, L4
  // Hu Upper = L3, L4, L5

  const getLine = (gua: BaGua, index0: number) => gua.lines[index0]; // index 0-2

  // Construct combined lines 0-5
  const benLines = [...benLower.lines, ...benUpper.lines];

  // Helper to find Gua ID by lines
  const findGuaByLines = (lines: number[]): BaGua => {
    // lines is array of 3 numbers
    return BAGUA_DATA.find(g => 
      g.id !== 0 && 
      g.lines[0] === lines[0] && 
      g.lines[1] === lines[1] && 
      g.lines[2] === lines[2]
    ) || BAGUA_DATA[0];
  };

  const huLowerLines = [benLines[1], benLines[2], benLines[3]];
  const huUpperLines = [benLines[2], benLines[3], benLines[4]];
  
  const huLower = findGuaByLines(huLowerLines);
  const huUpper = findGuaByLines(huUpperLines);
  const huName = HEXAGRAM_NAMES[`${huUpper.id}-${huLower.id}`] || '未知卦';

  // Calculate Bian Gua (Changed Hexagram)
  const movingIndex = movingYao - 1; // 0-5
  const bianLines = [...benLines];
  bianLines[movingIndex] = bianLines[movingIndex] === 1 ? 0 : 1;

  const bianLowerLines = bianLines.slice(0, 3);
  const bianUpperLines = bianLines.slice(3, 6);

  const bianLower = findGuaByLines(bianLowerLines);
  const bianUpper = findGuaByLines(bianUpperLines);
  const bianName = HEXAGRAM_NAMES[`${bianUpper.id}-${bianLower.id}`] || '未知卦';

  // Analyze Ti / Yong
  // If moving yao is in lower (1,2,3), Upper is Ti, Lower is Yong
  // If moving yao is in upper (4,5,6), Lower is Ti, Upper is Yong
  let tiGua, yongGua;
  if (movingYao <= 3) {
    tiGua = benUpper;
    yongGua = benLower;
  } else {
    tiGua = benLower;
    yongGua = benUpper;
  }

  const analysis = analyzeFiveElements(tiGua, yongGua);

  // 使用自定义日期或当前日期
  const dateToUse = customDate || new Date();

  return {
    methodName,
    benGua: { upper: benUpper, lower: benLower, name: benName },
    huGua: { upper: huUpper, lower: huLower, name: huName },
    bianGua: { upper: bianUpper, lower: bianLower, name: bianName },
    movingYao,
    analysis: {
      tiGua,
      yongGua,
      ...analysis
    },
    timestamp: dateToUse.toLocaleString('zh-CN')
  };
};