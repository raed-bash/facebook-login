import { Box, Typography, styled } from "@mui/material";

export default function LoginOrCreate() {
  const StyledBorder = styled(Box)(() => ({
    height: 1,
    width: "50%",
    background: "#ccd0d5",
  }));
  return (
    <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
      <StyledBorder></StyledBorder>
      <Box sx={{ mx: 2 }}>
        <Typography sx={{ fontSize: 12 }}>أو</Typography>
      </Box>
      <StyledBorder></StyledBorder>
    </Box>
  );
}
