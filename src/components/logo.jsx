import { Box } from "@mui/material";
import logo from "../assets/logo/facebook logo.svg";
export default function Logo() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
      <Box>
        <img src={logo} alt="logo" style={{ width: 112, height: 40 }} />
      </Box>
    </Box>
  );
}
