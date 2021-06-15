import React from 'react'
import ChatList from '../ChatList/ChatList.component'
import ChatSideBarNav from '../ChatSideBarNav/ChatSideBarNav.component'
export interface ChatSideBarProps {
    
}
 
const ChatSideBar: React.SFC<ChatSideBarProps> = () => {
    return (
        <div className="">
            <ChatSideBarNav />
            <ChatList />
        </div>
     );
}
export default ChatSideBar;