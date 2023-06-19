import { Box } from "@mui/material";
import Language from "./components/language";
import Helpers from "./components/helpers";
import CopyrightMeta from "./components/copyright-meta";

export default function Details() {
  return (
    <Box>
      <Box>
        <Language />
      </Box>
      <Box>
        <Helpers />
      </Box>
      <Box>
        <CopyrightMeta />
      </Box>
    </Box>
  );
}
