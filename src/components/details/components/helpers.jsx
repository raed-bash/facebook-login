import { Box, Typography } from "@mui/material";

export default function Helpers() {
  return (
    <Box sx={{ m: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0 4px",
        }}
      >
        <Typography sx={{ fontSize: 10, color: "#8a8d91" }}>حول</Typography>
        <Box sx={{ display: "table-cell", verticalAlign: "middle" }}>
          <Typography>·</Typography>
        </Box>
        <Typography sx={{ fontSize: 10, color: "#8a8d91" }}>مساعدة</Typography>
        <Box sx={{ display: "table-cell", verticalAlign: "middle" }}>
          <Typography>·</Typography>
        </Box>
        <Typography sx={{ fontSize: 10, color: "#8a8d91" }}>المزيد</Typography>
      </Box>
    </Box>
  );
}
