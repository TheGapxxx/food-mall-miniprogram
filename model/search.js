import { getGoodsList } from './goods';

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
  return {
    historyWords: [
      '鸡',
      '牛奶',
      '猪肉',
      '徐熙龙',
      '周宇婷',
      '徐婧',
      '周新',
      '李鑫',
      '新鲜水果',
      '牛肉',
      '蔬菜',
      '西瓜',
    ],
  };
}

export function getSearchPopular() {
  return {
    popularWords: [
      '鸡',
      '牛奶',
      '猪肉',
      '徐熙龙',
      '周宇婷',
      '徐婧',
      '周新',
      '李鑫',
      '新鲜水果',
      '牛肉',
      '蔬菜',
      '西瓜',
    ],
  };
}

export function getSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getGoodsList(7),
    algId: 0,
  };
}
