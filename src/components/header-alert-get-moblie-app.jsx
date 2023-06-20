import { Box, Typography } from "@mui/material";
import mobile from "../assets/icons/moblie.png";
export default function HeaderAlert() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          padding: 1,
          alignItems: "center",
          justifyContent: "start",
          background: "#FFFBE2",
        }}
      >
        <Box sx={{ width: 18, mx: 1, height: 32 }}>
          <img
            src={mobile}
            alt="mobile icon"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              color: "#3b5998",
              fontFamily: 'Roboto","Helvetica","Arial",sans-serif',
            }}
          >
            احصل على فيسبوك لنظام Android وتصفح بسرعة أكبر.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
