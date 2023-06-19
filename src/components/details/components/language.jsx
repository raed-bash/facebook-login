import { Box, Grid, Typography } from "@mui/material";
import addLang from "../../../assets/icons/add lang.png";
const languages = [
  { lang: "العربية", selected: true },
  { lang: "English(US)" },
  { lang: "Nederlands" },
  { lang: "Frysk" },
  { lang: "Polski" },
  { lang: "Turkce" },
  { lang: "Espanol" },
  { icon: addLang },
];
export default function Language() {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "0 70px",
          flexFlow: "wrap",
          justifyContent: "space-between",
        }}
      ></Box>
      <Grid container rowSpacing={0}>
        {languages.map(({ lang, icon }, index) => (
          <Grid item xs={6} key={index}>
            <Typography
              sx={{ fontSize: 12, textAlign: "center", color: "#576b95" }}
            >
              {lang ? (
                lang
              ) : (
                <img src={icon} alt="add lang" style={{ width: 18 }} />
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
