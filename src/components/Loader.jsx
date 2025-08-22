import { Dialog, DialogContent } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = ({ open }) => {
  return (
    <Dialog
      open={open}
      fullScreen
      PaperProps={{
        sx: {
          background: "transparent",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={"3rem"} sx={{ color: "yellow" }} />
      </DialogContent>
    </Dialog>
  );
};

export default Loader;
