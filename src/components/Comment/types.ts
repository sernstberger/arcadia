export interface CommentProps {
  comment: string;
  user: { id: string; name: string; avatar: string };
  createDate: string;
  rating?: any;
  replies?: CommentProps[];
}
