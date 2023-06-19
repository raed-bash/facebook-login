import { InputBase } from "@mui/material";
import { useState } from "react";

export default function Input(props) {
  const defaultBorder =
    "rgba(0, 0, 0, .07) rgba(0, 0, 0, .11) rgba(0, 0, 0, .18)";
  const afterFocusBorder = "#000";
  const [focus, setFocus] = useState(defaultBorder);

  return (
    <InputBase
      sx={{
        outline: "none",
        borderRadius: "5px",
        borderColor: focus,
        borderStyle: "solid",
        borderWidth: 1,
        width: "100%",
        background: "#F5F6F7",
        px: 2,
        py: 1,
        fontSize: 15,
        height: 42,
      }}
      onFocus={() => setFocus(afterFocusBorder)}
      onBlur={() => setFocus(defaultBorder)}
      {...props}
    ></InputBase>
  );
}
