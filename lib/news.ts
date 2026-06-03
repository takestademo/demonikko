export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  isNew?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: "2025-004",
    date: "2025.05.15",
    category: "お知らせ",
    title: "Webサイトをリニューアルしました",
    isNew: true,
  },
  {
    id: "2025-003",
    date: "2025.03.01",
    category: "お知らせ",
    title: "春季一般公開のご案内",
  },
  {
    id: "2024-002",
    date: "2024.12.28",
    category: "お知らせ",
    title: "年末年始休業のお知らせ（12月28日〜1月5日）",
  },
  {
    id: "2024-001",
    date: "2024.04.01",
    category: "お知らせ",
    title: "新年度の取り組みについてのご案内",
  },
];
