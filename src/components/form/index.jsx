import { Box, Typography } from "@mui/material";
import Input from "./components/input";
import LoginButton from "./components/login-button";
import LoginOrCreate from "./components/login-or-create";
import CreateButton from "./components/create-button";

export default function Form() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
      <Box sx={{ pt: 1 }}>
        <Input placeholder="رقم الهاتف المحمول أو البريد الإلكتروني" />
      </Box>
      <Box sx={{ pt: 1 }}>
        <Input placeholder="كلمة السر" />
      </Box>
      <Box sx={{ pt: 1.3 }}>
        <LoginButton>تسجيل الدخول</LoginButton>
      </Box>
      <Box sx={{ pt: 1.3 }}>
        <Typography
          sx={{
            color: "#216fdb",
            textAlign: "center",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          هل نسيت كلمة السر ؟
        </Typography>
      </Box>
      <Box sx={{ pt: 1.3 }}>
        <LoginOrCreate />
      </Box>
      <Box sx={{ py: 1.3, display: "flex", justifyContent: "center" }}>
        <CreateButton />
      </Box>
      <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}></Box>
    </Box>
  );
}
