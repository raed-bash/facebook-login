import { Box } from "@mui/material";
import HeaderAlert from "./components/header-alert-get-moblie-app";
import Logo from "./components/logo";
import Form from "./components/form";
import Details from "./components/details";
function App() {
  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <HeaderAlert />
        <Logo />
        <Form />
      </Box>
      <Details />
    </Box>
  );
}

export default App;
