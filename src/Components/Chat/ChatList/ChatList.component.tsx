import React,{useState} from "react";
export interface ChatListProps {
  chats: Array<{
    image: string;
    userid: string;
    username: string;
    lastChat: string;
    type: string;
    isMute: boolean;
    isPin: boolean;
    lastMessage: {
      isSeen: boolean;
      value: string;
      type: string;
    };
    onMute: (userid: string) => {};
    onReport: (userid: string) => {};
    onDelete: (userid: string) => {};
    onPin: (userid: string) => {};
    onBlock: (userid: string) => {};
  }>;
}

const ChatList: React.SFC<ChatListProps> = ({ chats }) => {
    const [currentSelected, setCurrentSelected] = useState("");
  return (
    <div className="">
      {chats.map((chat) => {
        return (
          <div className="">
            <div className="">
              <img src={chat.image} alt="DP" />
              <span>
                <span>{chat.username}</span>
                <span className={chat.lastMessage.isSeen ? "seen" : "unseen"}>
                  {chat.lastMessage.value}
                </span>
                <span>{chat.lastChat}</span>
              </span>
              <button onClick={() => chat.onPin(chat.userid)}>Pin</button>

              {currentSelected === chat.userid ? (
                <div className="">
                  <button onClick={() => chat.onBlock(chat.userid)}>
                    {chat.type === "personal" ? "Block" : "Leave "}
                  </button>
                  <button onClick={() => chat.onReport(chat.userid)}>
                    Report
                  </button>
                  <button
                    onClick={() => {
                      chat.onMute(chat.userid);
                    }}
                  >
                    Mute
                  </button>
                  <button onClick={() => chat.onDelete(chat.userid)}></button>
                </div>
              ) : (
                <button>Menu</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
