import { Box, Typography } from "@mui/material";

export default function CopyrightMeta() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography sx={{ fontSize: 12, color: "#808080" }}>
        حقوق النشر محفوظة Meta © ‏2023‏
      </Typography>
    </Box>
  );
}
