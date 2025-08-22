import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MyEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Split text by triple backticks
  const parts = text.split(/```/);
  console.log({ parts });

  return (
    <Box
      border={"2px solid red"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={3}
      p={2}
    >
      {/* Input Area */}
      <Box width={"51%"} borderRadius={2} boxShadow={4} p={1}>
        <TextField
          placeholder="Enter content"
          multiline
          rows={20}
          fullWidth
          value={text}
          onChange={handleChange}
        />
      </Box>

      {/* Preview Area */}
      <Box
        width={"50%"}
        minHeight={"10vh"}
        borderRadius={2}
        boxShadow={4}
        p={2}
        sx={{ whiteSpace: "pre-line" }}
      >
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <Box
              key={i}
              component="pre"
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                p: 2,
                borderRadius: 2,
                overflowX: "auto",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              <code>{part}</code>
            </Box>
          ) : (
            // Even indexes = normal text
            <Typography key={i} sx={{ mb: 2, whiteSpace: "pre-line" }}>
              {part}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default MyEditor;
