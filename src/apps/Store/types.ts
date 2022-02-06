import { CommentProps } from "../../components/Comment/types";

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  description: string;
  createDate: string;
  price: number;
  rating: number;
}
