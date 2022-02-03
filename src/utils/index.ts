import { formatDistanceToNow, parseISO } from "date-fns";

export const timeAgo = (date: string | Date) => {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return `${formatDistanceToNow(dateObj)} ago`;
};
