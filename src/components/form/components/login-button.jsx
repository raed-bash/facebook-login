import { ButtonBase } from "@mui/material";

export default function LoginButton(props) {
  const { children } = props;
  return (
    <ButtonBase
      sx={{
        width: "100%",
        height: 40,
        cursor: "auto",
        background: "#1877f2",
        color: "#fff",
        borderRadius: "4px",
        textShadow: "0 -1px rgba(0, 0, 0, .25)",
        fontWeight: "600",
        fontSize: 17,
      }}
      disableTouchRipple
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
