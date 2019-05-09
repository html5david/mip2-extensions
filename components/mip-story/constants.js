const { viewport } = MIP

// 小故事标识
export const MIP_I_STORY_STANDALONE = 'mip-i-story-standalone'

// 小故事页面类型
export const PAGE_ROLE = {
  contentPage: 'contentPage',
  sharePage: 'sharePage'
}

// 进度条状态class
export const PROGRESS_STATE = {
  active: 'mip-story-page-progress-bar-active',
  visited: 'mip-story-page-progress-bar-visited'
}

// 背景音乐配置属性
export const BACKGROUND_AUDIO = 'background-audio'

// 翻页阈值
export const SWITCHPAGE_THRESHOLD = {
  horizontal: viewport.getWidth() * 0.15, // 水平翻页阈值
  vertical: viewport.getHeight() * 0.1 // 垂直翻页阈值
}

// 翻页走向
export const DIRECTIONMAP = {
  back: 'back',
  goto: 'goto'
}

// 当前页状态
export const PAGE_STATE = {
  current: 'current',
  active: 'active'
}

/**
 * 页面切换方式
 */
export const SWITCHTYPES = {
  click: 'click',
  slideX: 'slideX',
  slideY: 'slideY',
  autoPlay: 'autoPlay'
}

// 熊掌号api
export const MSITEAPI = 'https://msite.baidu.com/home/bar?office_id='

// 预加载页数
export const PRELOAD_PAGES = 2

// 浏览状态
export const STORY_PREFIX = 'MIP_STORY_'

// 默认最小推荐数
export const MIN_RECOMMEND_NUMS = 4

// 默认推荐
export const BOOKEND_DEFAULT_RECOMMEND = [
  {
    'cover': 'https://mipstatic.baidu.com/static/mip-static/mip-story/static/img/rec1.jpg',
    'url': 'https://m.baidu.com/paw/c/m.news18a.com/special/mobile/special_1031.shtml?story=1&word=%E8%BF%88%E5%B7%B4%E8%B5%AB%E6%A6%82%E5%BF%B5%E8%BD%A6&title=%E8%BF%88%E5%B7%B4%E8%B5%AB%E6%A6%82%E5%BF%B5%E8%BD%A6&lid=8305767886715286272&referlid=8305767886715286272&ms=1&frsrcid=37224&frorder=2',
    'title': '未来汽车新概念：我真的心动了',
    'from': '网通社汽车',
    'fromUrl': ''
  },
  {
    'cover': 'https://mipstatic.baidu.com/static/mip-static/mip-story/static/img/rec2.jpg',
    'url': 'http://story.soogif.com/story/access/41',
    'title': '梅西丢球：盘点世界杯十大罚球时刻',
    'from': 'SOOGIF',
    'fromUrl': ''
  },
  {
    'cover': 'https://mipstatic.baidu.com/static/mip-static/mip-story/static/img/rec3.jpg',
    'url': 'https://mipstatic.baidu.com/static/mip-static/mip-story/story-heritage/heritage.html',
    'title': '你所不知道的中国非物质文化遗产',
    'from': '百度公益',
    'fromUrl': ''
  },
  {
    'cover': 'https://mipstatic.baidu.com/static/mip-static/mip-story/static/img/rec4.jpg',
    'url': 'https://zqmfcdn.huanhuba.com/app_static/baiduStory/index.html',
    'title': '梅西VSC罗：原来差距在这里',
    'from': '足球魔方',
    'fromUrl': ''
  }
]
