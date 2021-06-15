import React from 'react'
export interface ChatSideBarNavProps {
    
}
 
const ChatSideBarNav: React.SFC<ChatSideBarNavProps> = () => {
    return (
        <div className="">
             <div className="">
            <h1>Messages</h1>
            <button>Messages <span>6</span></button>
            <button>Create Group</button>
            </div>
            <div className="searchbar">
                <button>Search</button>
                <input type="text" placeholder="Search"/>
            </div>
    
        </div>
     );
}
 
export default ChatSideBarNav;