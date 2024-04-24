export interface Post {
  title: string;
  author: string;
  field: string;
  year: number;
  content: string;
}

export interface UpdatePost extends Post {
  id: string;
}
