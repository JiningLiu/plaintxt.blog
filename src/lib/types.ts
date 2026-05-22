export interface Manifest {
  version: number;
  author: string;
  directories: Directory[];
}

export interface Directory {
  path: string;
  articles: ArticleEntry[];
}

export interface ArticleEntry {
  path: string;
  title: string;
  subtitle: string;
  date: string;
}