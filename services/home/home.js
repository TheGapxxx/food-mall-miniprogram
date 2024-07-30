import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '猜你喜欢',
          key: 0,
        },
        {
          text: '特价促销',
          key: 1,
        },
        {
          text: '精致晚餐',
          key: 2,
        },
        {
          text: '火锅到家',
          key: 3,
        },
        {
          text: '时令新品',
          key: 4,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
