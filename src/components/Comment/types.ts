export interface CommentProps {
  // id: string | number;
  id: number;
  comment: string;
  user: { id: string; name: string; avatar: string };
  createDate: string;
  rating?: any;
  upvoteCount?: number;
  replies?: CommentProps[];
}
