import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const SingleChat = () => {
  const { user, selectedChat, setSelectedChat } = ChatState();

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <></>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                {/*<UpdateGroupChatModal
                  fetchAgain={fetchagain}
                  setFetchAgain={setFetchAgain}
            />*/}
              </>
            )}
          </Text>
        </>
      ) : (
        <>
          <Box display="flex" alignItems="center" h="100%">
            <Text fontSize={"3xl"} pb={3} fontFamily="Work sans">
              Click on a user to start chatting.
            </Text>
          </Box>
        </>
      )}
    </>
  );
};

export default SingleChat;
