import { Box, IconProps, Typography } from "@mui/material";

// TODO: May want to improve this interface
interface LabeledIconProps {
  icon: IconProps;
  label: React.ReactNode;
}

const LabeledIcon = ({ icon, label }: LabeledIconProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default LabeledIcon;
