import {
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Button,
  Stack,
  Typography,
  Fab,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface ListingCardProps {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  image: string;
  emphasis?: React.ReactNode;
  details?: React.ReactNode;
  href: string;
  leftAction?: any;
  rightAction?: any;
}

const ListingCard = ({
  title,
  details,
  image,
  emphasis,
  children,
  subtitle = undefined,
  leftAction = undefined,
  rightAction = undefined,
  href,
}: ListingCardProps) => {
  console.log("!!!", title, subtitle, typeof subtitle);
  return (
    <Card sx={{ position: "relative" }}>
      <CardActionArea
        component={Link}
        to={href}
        sx={{ height: "100%", width: "100%", position: "absolute" }}
      />
      <CardMedia {...{ image }} component="img" height="140" alt={title} />
      <CardContent sx={{ paddingX: 0 }}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {leftAction && (
              <Fab
                size="small"
                sx={{ position: "relative", zIndex: 1, flexShrink: 0 }}
                color="primary"
                aria-label="add"
              >
                {leftAction}
              </Fab>
            )}

            <div>
              {emphasis && <Typography>{emphasis}</Typography>}
              <Typography fontWeight={700}>{title}</Typography>
              {subtitle && <Typography variant="body2">{subtitle}</Typography>}
              {details && <div>{details}</div>}
              {children}
            </div>
          </Stack>
          {rightAction && (
            <Fab
              size="small"
              sx={{ position: "relative", zIndex: 1, flexShrink: 0 }}
              color="primary"
              aria-label="add"
            >
              {rightAction}
            </Fab>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default ListingCard;
