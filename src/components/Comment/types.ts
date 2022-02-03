export interface CommentProps {
  comment: string;
  user: { id: string; name: string; avatar: string };
  createDate: string;
  vote?: boolean | null;
  replies?: CommentProps[];
}
