export interface VideoProps {
  id: string | number;
  title: string;
  image: string;
  comments?: CommentsProps[];
  details?: React.ReactNode;
  user: { id: string; name: string; avatar: string };
  views: number;
  createDate: string;
  subscribed: boolean;
}

export interface CommentsProps {
  comment: string;
  user: { id: string; name: string; avatar: string };
  createDate: string;
}
