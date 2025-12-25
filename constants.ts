import { BaGua, ElementType, TimeZone } from './types';
import { GUA_DATA_COMPLETE } from './data/guaDataComplete';

export const BAGUA_DATA: BaGua[] = [
  // 0 index filler to make ID match index 1-8
  { id: 0, name: '', symbol: '', element: ElementType.EARTH, nature: '', lines: [], description: '' },
  { id: 1, name: '乾', symbol: '☰', element: ElementType.METAL, nature: '天', lines: [1, 1, 1], description: '刚健，创始，君王，父亲' },
  { id: 2, name: '兑', symbol: '☱', element: ElementType.METAL, nature: '泽', lines: [1, 1, 0], description: '喜悦，口舌，少女，缺损' },
  { id: 3, name: '离', symbol: '☲', element: ElementType.FIRE, nature: '火', lines: [1, 0, 1], description: '光明，美丽，中女，依附' },
  { id: 4, name: '震', symbol: '☳', element: ElementType.WOOD, nature: '雷', lines: [1, 0, 0], description: '震动，奋起，长男，急躁' },
  { id: 5, name: '巽', symbol: '☴', element: ElementType.WOOD, nature: '风', lines: [0, 1, 1], description: '柔顺，进入，长女，不决' },
  { id: 6, name: '坎', symbol: '☵', element: ElementType.WATER, nature: '水', lines: [0, 1, 0], description: '险陷，流动，中男，智慧' },
  { id: 7, name: '艮', symbol: '☶', element: ElementType.EARTH, nature: '山', lines: [0, 0, 1], description: '静止，阻隔，少男，稳重' },
  { id: 8, name: '坤', symbol: '☷', element: ElementType.EARTH, nature: '地', lines: [0, 0, 0], description: '柔顺，包容，母亲，厚德' },
];

export const TIME_ZONES: TimeZone[] = [
  { name: '子时 (23-01)', number: 1, zodiac: '鼠' },
  { name: '丑时 (01-03)', number: 2, zodiac: '牛' },
  { name: '寅时 (03-05)', number: 3, zodiac: '虎' },
  { name: '卯时 (05-07)', number: 4, zodiac: '兔' },
  { name: '辰时 (07-09)', number: 5, zodiac: '龙' },
  { name: '巳时 (09-11)', number: 6, zodiac: '蛇' },
  { name: '午时 (11-13)', number: 7, zodiac: '马' },
  { name: '未时 (13-15)', number: 8, zodiac: '羊' },
  { name: '申时 (15-17)', number: 9, zodiac: '猴' },
  { name: '酉时 (17-19)', number: 10, zodiac: '鸡' },
  { name: '戌时 (19-21)', number: 11, zodiac: '狗' },
  { name: '亥时 (21-23)', number: 12, zodiac: '猪' },
];

export const DIRECTIONS = [
  { name: '南方', guaId: 3 },
  { name: '北方', guaId: 6 },
  { name: '东方', guaId: 4 },
  { name: '西方', guaId: 2 },
  { name: '东南', guaId: 5 },
  { name: '西南', guaId: 8 },
  { name: '东北', guaId: 7 },
  { name: '西北', guaId: 1 },
];

export const ELEMENT_COLORS: Record<ElementType, string> = {
  [ElementType.METAL]: 'text-wuxing-jin',
  [ElementType.WOOD]: 'text-wuxing-mu',
  [ElementType.WATER]: 'text-wuxing-shui',
  [ElementType.FIRE]: 'text-wuxing-huo',
  [ElementType.EARTH]: 'text-wuxing-tu',
};

export const ELEMENT_BG_COLORS: Record<ElementType, string> = {
  [ElementType.METAL]: 'bg-yellow-100',
  [ElementType.WOOD]: 'bg-green-100',
  [ElementType.WATER]: 'bg-blue-100',
  [ElementType.FIRE]: 'bg-red-100',
  [ElementType.EARTH]: 'bg-amber-100',
};

// A simplified map for 64 Hexagram Names (Upper ID, Lower ID)
export const HEXAGRAM_NAMES: Record<string, string> = {
  '1-1': '乾为天', '1-2': '天泽履', '1-3': '天火同人', '1-4': '天雷无妄', '1-5': '天风姤', '1-6': '天水讼', '1-7': '天山遁', '1-8': '天地否',
  '2-1': '泽天夬', '2-2': '兑为泽', '2-3': '泽火革', '2-4': '泽雷随', '2-5': '泽风大过', '2-6': '泽水困', '2-7': '泽山咸', '2-8': '泽地萃',
  '3-1': '火天大有', '3-2': '火泽睽', '3-3': '离为火', '3-4': '火雷噬嗑', '3-5': '火风鼎', '3-6': '火水未济', '3-7': '火山旅', '3-8': '火地晋',
  '4-1': '雷天大壮', '4-2': '雷泽归妹', '4-3': '雷火丰', '4-4': '震为雷', '4-5': '雷风恒', '4-6': '雷水解', '4-7': '雷山小过', '4-8': '雷地豫',
  '5-1': '风天小畜', '5-2': '风泽中孚', '5-3': '风火家人', '5-4': '风雷益', '5-5': '巽为风', '5-6': '风水涣', '5-7': '风山渐', '5-8': '风地观',
  '6-1': '水天需', '6-2': '水泽节', '6-3': '水火既济', '6-4': '水雷屯', '6-5': '水风井', '6-6': '坎为水', '6-7': '水山蹇', '6-8': '水地比',
  '7-1': '山天大畜', '7-2': '山泽损', '7-3': '山火贲', '7-4': '山雷颐', '7-5': '山风蛊', '7-6': '山水蒙', '7-7': '艮为山', '7-8': '山地剥',
  '8-1': '地天泰', '8-2': '地泽临', '8-3': '地火明夷', '8-4': '地雷复', '8-5': '地风升', '8-6': '地水师', '8-7': '地山谦', '8-8': '坤为地',
  '未济': '水火未济',
};

// 地支与五行对应关系
export const EARTHLY_BRANCHES: Record<string, ElementType> = {
  '子': ElementType.WATER,
  '丑': ElementType.EARTH,
  '寅': ElementType.WOOD,
  '卯': ElementType.WOOD,
  '辰': ElementType.EARTH,
  '巳': ElementType.FIRE,
  '午': ElementType.FIRE,
  '未': ElementType.EARTH,
  '申': ElementType.METAL,
  '酉': ElementType.METAL,
  '戌': ElementType.EARTH,
  '亥': ElementType.WATER,
};

// 辅助函数：灵活查找卦数据（支持精确匹配和部分匹配）
const findGuaData = (name: string) => {
  // 首先尝试精确匹配
  let guaData = GUA_DATA_COMPLETE.find(g => g.name === name || g.nameFull === name);

  // 如果没有找到，尝试部分匹配（例如"天风姤"匹配"姤"）
  if (!guaData) {
    guaData = GUA_DATA_COMPLETE.find(g => name.includes(g.name) || (g.nameFull && name.includes(g.nameFull)));
  }

  return guaData;
};

// 获取卦辞原文
export const getGuaCi = (name: string): string => {
  // 从完整数据中查找
  const guaData = findGuaData(name);

  // 如果还是没有找到，返回基本信息
  if (!guaData) {
    return `此卦名为${name}，卦辞原文请参考《易经》原文。\n\n象曰：${name}之象，君子观此象以明道。`;
  }

  // 从shaoYong字段中提取"台湾国学大儒傅佩荣解"之后的内容
  // 这样可以避免与【北宋易学家邵雍解】部分重复
  let additionalContent = '';
  const shaoYongText = guaData.shaoYong;
  const fuPeirongIndex = shaoYongText.indexOf('台湾国学大儒傅佩荣解');

  if (fuPeirongIndex !== -1) {
    // 只保留"台湾国学大儒傅佩荣解"及之后的内容
    additionalContent = shaoYongText.substring(fuPeirongIndex);
  }

  return `${guaData.originalText}
${guaData.xiangCi}

${guaData.explanation}

${additionalContent}`;
};

// 获取爻辞
export const getYaoCi = (guaName: string, yaoIndex: number): string => {
  // 从完整数据中查找
  const guaData = findGuaData(guaName);

  // 转换为0-based索引
  const index = yaoIndex - 1;
  if (!guaData || !guaData.yaoCi[index]) {
    return `第${yaoIndex}爻辞请参考《易经》原文。\n\n象曰：爻变之象，观其动以察其变。`;
  }

  const yao = guaData.yaoCi[index];

  let result = `${yao.ci}\n${yao.xiang}`;

  if (yao.explanation) {
    result += `\n\n【白话文解释】\n${yao.explanation}`;
  }

  if (yao.shaoYong) {
    result += `\n\n【北宋易学家邵雍解】\n${yao.shaoYong}`;
  }

  return result;
};

// 获取邵雍解
export const getShaoYong = (name: string): string => {
  // 从完整数据中查找
  const guaData = findGuaData(name);

  if (!guaData) {
    return `${name}卦邵雍解：此卦象征天地变化之理，君子观此卦象，当顺应天时，修身养德。`;
  }

  // 提取shaoYong字段中第一段内容(在"台湾国学大儒傅佩荣解"之前的部分)
  const fullText = guaData.shaoYong;
  const splitIndex = fullText.indexOf('台湾国学大儒傅佩荣解');

  if (splitIndex !== -1) {
    // 只返回第一段(邵雍解部分)
    return fullText.substring(0, splitIndex).trim();
  }

  // 如果没有找到分隔标记,返回完整内容
  return fullText;
};

// 获取傅佩荣解
export const getFuPeirong = (name: string, aspect: string = 'shiyun'): string => {
  // 从完整数据中查找
  const guaData = findGuaData(name);

  if (!guaData) {
    switch (aspect) {
      case 'shiyun': return `${name}卦时运：当前运势平稳，宜静待时机，不宜妄动。`;
      case 'caiyun': return `${name}卦财运：财运尚可，但需谨慎理财，不可贪得无厌。`;
      case 'jiazhai': return `${name}卦家宅：家庭和睦，但需注意沟通，避免误会。`;
      case 'shenti': return `${name}卦身体：身体健康，但需注意饮食起居，保持规律。`;
      default: return `${name}卦傅佩荣解：此卦象征天地变化之理，君子观此卦象，当顺应天时。`;
    }
  }

  if (!guaData.fuPeirong) {
    switch (aspect) {
      case 'shiyun': return '暂无详细时运解读。';
      case 'caiyun': return '暂无详细财运解读。';
      case 'jiazhai': return '暂无详细家宅解读。';
      case 'shenti': return '暂无详细身体解读。';
      default: return '暂无详细解读。';
    }
  }

  return guaData.fuPeirong[aspect as keyof typeof guaData.fuPeirong] || '';
};

// 获取爻的邵雍解
export const getYaoShaoYong = (guaName: string, yaoIndex: number): string => {
  // 从完整数据中查找
  const guaData = findGuaData(guaName);

  // 转换为0-based索引
  const index = yaoIndex - 1;
  if (!guaData || !guaData.yaoCi[index]) {
    return `第${yaoIndex}爻邵雍解：此爻象征变化之机，君子观此爻象，当顺应变化，把握时机。`;
  }

  return guaData.yaoCi[index].shaoYong;
};

// 获取爻的傅佩荣解
export const getYaoFuPeirong = (guaName: string, yaoIndex: number, aspect: string = 'shiyun'): string => {
  // 从完整数据中查找
  const guaData = findGuaData(guaName);

  // 转换为0-based索引
  const index = yaoIndex - 1;
  if (!guaData || !guaData.yaoCi[index]) {
    switch (aspect) {
      case 'shiyun': return `第${yaoIndex}爻时运：运势处于变化之中，需保持谨慎，把握机会。`;
      case 'caiyun': return `第${yaoIndex}爻财运：财运有所波动，需谨慎投资，不可冒险。`;
      case 'jiazhai': return `第${yaoIndex}爻家宅：家庭关系有所变化，需加强沟通，保持和谐。`;
      case 'shenti': return `第${yaoIndex}爻身体：身体有所不适，需注意调养，避免劳累。`;
      default: return `第${yaoIndex}爻傅佩荣解：此爻象征变化之机，君子观此爻象，当顺应变化。`;
    }
  }

  return (guaData.yaoCi[index].fuPeirong as any)[aspect] || '';
};
