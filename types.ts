export enum ElementType {
  METAL = '金',
  WOOD = '木',
  WATER = '水',
  FIRE = '火',
  EARTH = '土',
}

export interface BaGua {
  id: number;
  name: string;
  symbol: string; // e.g., ☰
  element: ElementType;
  nature: string; // e.g., 天, 泽
  lines: number[]; // 1 for Yang, 0 for Yin. Bottom to top.
  description: string;
}

export interface DivinationResult {
  methodName: string;
  benGua: {
    upper: BaGua;
    lower: BaGua;
    name: string; // Composite name e.g. 天风姤
  };
  huGua: {
    upper: BaGua;
    lower: BaGua;
    name: string;
  };
  bianGua: {
    upper: BaGua;
    lower: BaGua;
    name: string;
  };
  movingYao: number; // 1-6
  analysis: {
    tiGua: BaGua;
    yongGua: BaGua;
    relation: string; // e.g., "体克用"
    verdict: string; // e.g., "吉", "凶"
    description: string;
  };
  timestamp: string;
}

export interface TimeZone {
  name: string;
  number: number; // 1-12
  zodiac: string;
}

export interface YaoData {
  ci: string;
  xiang: string;
  explanation: string;
  shaoYong: string;
  fuPeirong: {
    shiyun: string;
    caiyun: string;
    jiazhai: string;
    shenti: string;
  };
}

export interface GuaData {
  index: number;
  name: string;
  nameFull?: string;
  originalText: string;
  xiangCi: string;
  explanation: string;
  duanYi?: string;
  shaoYong: string;
  fuPeirong?: {
    shiyun: string;
    caiyun: string;
    jiazhai: string;
    shenti: string;
  };
  yaoCi: YaoData[];
}

export enum InputMethodId {
  TIME = 1,
  NUMBERS = 2,
  WORDS = 3,
  OBJECTS = 4,
  DIRECTION = 5,
  CUSTOM = 6,
}