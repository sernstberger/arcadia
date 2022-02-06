import { formatDistanceToNow, parseISO } from "date-fns";

export const timeAgo = (date: string | Date) => {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return `${formatDistanceToNow(dateObj)} ago`;
};

export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};
