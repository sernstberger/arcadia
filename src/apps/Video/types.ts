import { CommentProps } from "../../components/Comment/types";

export interface VideoProps {
  id: string | number;
  title: string;
  image: string;
  description: string;
  comments?: CommentProps[];
  details?: React.ReactNode;
  user: { id: string; name: string; avatar: string };
  views: number;
  createDate: string;
  subscribed: boolean;
}
