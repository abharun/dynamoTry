export interface Post {
  title: string;
  author: string;
  field: string;
  content: string;
}

export interface UpdatePost extends Post {
  id: string;
}
