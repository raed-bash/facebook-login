import { ButtonBase } from "@mui/material";

export default function CreateButton(props) {
  return (
    <ButtonBase
      sx={{
        width: "80%",
        height: 35.6,
        cursor: "auto",
        borderRadius: "4px",
        fontSize: 15,
        border: "1px solid #bec3c9",
      }}
      disableTouchRipple
      {...props}
    >
      إنشاء حساب جديد
    </ButtonBase>
  );
}
