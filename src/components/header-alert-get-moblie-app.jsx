import { Box } from "@mui/material";
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
        <Box sx={{ width: 19, ml: 1 }}>
          <img
            src={mobile}
            alt="mobile icon"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          component="span"
          sx={{ fontSize: 12, color: "#3b5998", fontWeight: "600" }}
        >
          احصل على فيسبوك لنظام Android وتصفح بسرعة أكبر.
        </Box>
      </Box>
    </Box>
  );
}
