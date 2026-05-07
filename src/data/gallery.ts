import type { GalleryItem } from '@/types'

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/love1/800/600',
    title: '第一次旅行',
    description: '我们的第一次海边之旅，阳光正好，微风不燥。',
    date: new Date('2023-07-20'),
    category: '旅行',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/love2/800/600',
    title: '一起做饭',
    description: '第一次一起下厨，虽然把厨房弄得一团糟，但很开心。',
    date: new Date('2023-08-15'),
    category: '日常',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/love3/800/600',
    title: '生日惊喜',
    description: '为你准备的生日惊喜，看到你开心的笑容一切都值得。',
    date: new Date('2023-09-10'),
    category: '庆祝',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/love4/800/600',
    title: '秋日散步',
    description: '落叶纷飞的季节，牵着你的手走过每一条街道。',
    date: new Date('2023-10-05'),
    category: '日常',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/love5/800/600',
    title: '跨年夜',
    description: '一起迎接新的一年，烟火下的吻是最美的回忆。',
    date: new Date('2024-01-01'),
    category: '庆祝',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/love6/800/600',
    title: '春日野餐',
    description: '春暖花开，带上你做的三明治去公园野餐。',
    date: new Date('2024-03-20'),
    category: '旅行',
  },
]
