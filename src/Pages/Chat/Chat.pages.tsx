import React from 'react'
import ChatArea from '../../Components/Chat/ChatArea/ChatArea.component'
import ChatSideBar from '../../Components/Chat/ChatSideBar/ChatSideBar.component'
export interface ChatProps {
    
}
 
const Chat: React.FC<ChatProps> = () => {
    return (
        <div className="">
            <ChatSideBar />
            <ChatArea/>
        </div>
     );
}
 
export default Chat;