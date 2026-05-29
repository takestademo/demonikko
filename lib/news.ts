export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "2025-004",
    date: "2025年5月",
    category: "お知らせ",
    title: "Webサイトをリニューアルしました",
  },
  {
    id: "2025-003",
    date: "2025年3月",
    category: "お知らせ",
    title: "春季一般公開のご案内",
  },
  {
    id: "2024-002",
    date: "2024年12月",
    category: "お知らせ",
    title: "年末年始休業のお知らせ（12月28日〜1月5日）",
  },
  {
    id: "2024-001",
    date: "2024年4月",
    category: "お知らせ",
    title: "新年度の取り組みについてのご案内",
  },
];
