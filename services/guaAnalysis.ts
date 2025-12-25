import { BaGua, ElementType } from '../types';
import { Solar } from 'lunar-typescript';

/**
 * 判断五行生克关系
 */
export const analyzeTiYongRelation = (ti: BaGua, yong: BaGua): {
  relation: string;
  verdict: string;
  description: string;
} => {
  const t = ti.element;
  const y = yong.element;

  // 相同五行 - 比和
  if (t === y) {
    return {
      relation: '体用比和',
      verdict: '大吉',
      description: '顺遂'
    };
  }

  // 判断生克关系
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

  if (generates(y, t)) {
    return { relation: '用生体', verdict: '吉', description: '增益' };
  } else if (generates(t, y)) {
    return { relation: '体生用', verdict: '小凶', description: '主损耗' };
  } else if (restricts(t, y)) {
    return { relation: '体克用', verdict: '小吉', description: '事缓成' };
  } else if (restricts(y, t)) {
    return { relation: '用克体', verdict: '大凶', description: '凶险' };
  }

  return { relation: '未知', verdict: '待定', description: '' };
};

/**
 * 获取卦气旺衰(根据地支月份)
 * @param element 五行属性
 * @param monthBranch 地支月份(子丑寅卯辰巳午未申酉戌亥)
 * @returns '旺' | '相' | '休' | '囚' | '死'
 */
export const getGuaQiStatus = (element: ElementType, monthBranch: string): '旺' | '相' | '休' | '囚' | '死' => {
  // 地支对应关系:
  // 春季: 寅月(正月)、卯月(二月)、辰月(三月-四季月)
  // 夏季: 巳月(四月)、午月(五月)、未月(六月-四季月)
  // 秋季: 申月(七月)、酉月(八月)、戌月(九月-四季月)
  // 冬季: 亥月(十月)、子月(十一月)、丑月(十二月-四季月)

  // 木(震、巽)
  if (element === ElementType.WOOD) {
    if (['寅', '卯'].includes(monthBranch)) return '旺'; // 春季当令
    if (['巳', '午'].includes(monthBranch)) return '囚'; // 夏季生火,大量消耗自身
    if (['申', '酉'].includes(monthBranch)) return '死'; // 秋季被金克
    if (['亥', '子'].includes(monthBranch)) return '相'; // 冬季被水生
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '休'; // 四季月克土,消耗能量
  }

  // 火(离)
  if (element === ElementType.FIRE) {
    if (['巳', '午'].includes(monthBranch)) return '旺'; // 夏季当令
    if (['申', '酉'].includes(monthBranch)) return '休'; // 秋季克金,消耗能量
    if (['亥', '子'].includes(monthBranch)) return '死'; // 冬季被水克
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '囚'; // 四季月生土,大量消耗自身
    if (['寅', '卯'].includes(monthBranch)) return '相'; // 春季被木生
  }

  // 土(坤、艮)
  if (element === ElementType.EARTH) {
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '旺'; // 四季月当令
    if (['巳', '午'].includes(monthBranch)) return '相'; // 夏季被火生
    if (['申', '酉'].includes(monthBranch)) return '囚'; // 秋季生金,大量消耗自身
    if (['寅', '卯'].includes(monthBranch)) return '死'; // 春季被木克
    if (['亥', '子'].includes(monthBranch)) return '休'; // 冬季克水,消耗能量
  }

  // 金(乾、兑)
  if (element === ElementType.METAL) {
    if (['申', '酉'].includes(monthBranch)) return '旺'; // 秋季当令
    if (['亥', '子'].includes(monthBranch)) return '囚'; // 冬季生水,大量消耗自身
    if (['寅', '卯'].includes(monthBranch)) return '死'; // 春季被火克(注:实际是火克金)
    if (['巳', '午'].includes(monthBranch)) return '死'; // 夏季被火克
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '相'; // 四季月被土生
  }

  // 水(坎)
  if (element === ElementType.WATER) {
    if (['亥', '子'].includes(monthBranch)) return '旺'; // 冬季当令
    if (['寅', '卯'].includes(monthBranch)) return '囚'; // 春季生木,大量消耗自身
    if (['巳', '午'].includes(monthBranch)) return '死'; // 夏季被火克
    if (['辰', '戌', '丑', '未'].includes(monthBranch)) return '死'; // 四季月被土克
    if (['申', '酉'].includes(monthBranch)) return '相'; // 秋季被金生
  }

  return '休'; // 默认
};

/**
 * 计算体党、用党数量
 */
export const calculateTiYongParty = (
  tiGua: BaGua,
  benYongGua: BaGua,
  bianYongGua: BaGua,
  benYong: BaGua,
  huTi: BaGua,
  huYong: BaGua,
  bianYong: BaGua
): {
  tiParty: number;
  benYongParty: number;
  bianYongParty: number;
} => {
  const tiElement = tiGua.element;
  const benYongElement = benYongGua.element;
  const bianYongElement = bianYongGua.element;

  let tiParty = 0;
  let benYongParty = 0;
  let bianYongParty = 0;

  const guaList = [benYong, huTi, huYong, bianYong];

  guaList.forEach((gua, index) => {
    if (index === 0 || index === 3) {
      return;
    }

    if (gua.element === tiElement) {
      tiParty++;
    }
    if (gua.element === benYongElement) {
      benYongParty++;
    }
    if (gua.element === bianYongElement) {
      bianYongParty++;
    }
  });

  return {
    tiParty,
    benYongParty,
    bianYongParty
  };
};

/**
 * 获取当前月份的地支(按节气划分)
 * 使用公历月份和日期直接判断,不依赖农历年
 * @param date 可选,指定日期。如果不传则使用当前时间
 * @returns 地支月份字符串(子丑寅卯辰巳午未申酉戌亥)
 */
export const getCurrentLunarMonth = (date?: Date | string): string => {
  try {
    let now: Date;

    // 1. 解析传入的日期
    if (date) {
      if (typeof date === 'string') {
        // 处理中文日期格式 "2026年1月5日" -> "2026/1/5"
        let dateStr = date.replace(/年/g, '/').replace(/月/g, '/').replace(/日/g, '');
        now = new Date(dateStr);
      } else {
        now = new Date(date);
      }
    } else {
      now = new Date();
    }

    if (isNaN(now.getTime())) {
      console.error('日期解析失败，使用当前时间作为后备');
      now = new Date();
    }

    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();

    // 2. 【关键修改】强制使用当天的最后时刻 (23:59:59) 进行计算
    // 目的：满足"精确到日"的需求。只要当天是节气日（无论早上还是晚上交节），
    // 我们都视为已经进入了新月份。
    const endOfDay = new Date(year, month - 1, day, 23, 59, 59);

    console.log('--- 月柱计算调试 ---');
    console.log('用户输入/当前时间:', now.toLocaleString());
    console.log('计算使用时间(强制日末):', endOfDay.toLocaleString());

    // 3. 使用调整后的时间获取八字
    const solar = Solar.fromDate(endOfDay);
    const lunar = solar.getLunar();
    const baZi = lunar.getEightChar();

    // 4. 获取月柱干支并提取地支
    const monthGanZhi = baZi.getMonth();
    const monthBranch = monthGanZhi.substring(1);

    // 计算结果已获取，调试信息已清理

    return monthBranch;

  } catch (e) {
    console.error('获取地支月份失败:', e);
    // 失败时的后备逻辑（粗略估算）
    const now = new Date();
    const month = now.getMonth() + 1;
    const branchMap: { [key: number]: string } = {
      1: '寅', 2: '卯', 3: '辰', 4: '巳', 5: '午', 6: '未',
      7: '申', 8: '酉', 9: '戌', 10: '亥', 11: '子', 12: '丑'
    };
    return branchMap[month] || '子';
  }
};
