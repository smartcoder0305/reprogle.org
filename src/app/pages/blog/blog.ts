export interface Blog {
  id: string;
  title: string;
  author: string;
  timestamp: { seconds: number; nanoseconds: number };
  postUrl: string;
  blurb: string;
  body?: string;
  headerImage?: string;
}
