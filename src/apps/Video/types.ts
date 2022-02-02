export interface VideoProps {
  id: string | number;
  title: string;
  image: string;
  details?: React.ReactNode;
  user: { id: string; name: string; avatar: string };
  views: number;
  createDate: string;
  subscribed: boolean;
}
