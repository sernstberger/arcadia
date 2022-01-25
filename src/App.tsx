import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" gutterBottom>
          Arcadia
        </Typography>
        <Button variant="contained">Cool</Button>
        <Button variant="contained" color="secondary">
          Cool
        </Button>
      </Box>
    </Container>
  );
};

export default App;
