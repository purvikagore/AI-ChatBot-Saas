import { Box, Avatar, Typography } from "@mui/material";
import react from "react";
import { useAsyncValue } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
  }) => {
  const auth = useAuth()
  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004b5612", my: 2, gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" alt="openai" width={"30px"} />
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}> {content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004b56", gap: 2 }}>
      <Avatar sx={{ ml: "0" , bgcolor:'white',color:'black'}}>
          {auth?.user?.name[0]}
          {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}> {content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
