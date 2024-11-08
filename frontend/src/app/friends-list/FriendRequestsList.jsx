// import React, { useState } from "react";
// import FriendRequest from "./FriendRequest";

// const FriendRequestsList = () => {
//     // Initial list of friend requests
//     const [friendRequests, setFriendRequests] = useState([
//         { id: 1, username: "John Doe", profilePicture: null },
//         { id: 2, username: "Jane Smith", profilePicture: null },
//     ]);

//     // Function to handle actions for friend requests
//     const handleAction = (friendId, action) => {
//         if (action === "add") {
//             console.log(`Friend request from ID ${friendId} accepted.`);
//             // Here you could add logic to move the friend to a "friends" list or update server data.
//         } else if (action === "delete") {
//             console.log(`Friend request from ID ${friendId} deleted.`);
//             // Remove the friend request from the list
//             setFriendRequests((prevRequests) =>
//                 prevRequests.filter((friend) => friend.id !== friendId)
//             );
//         }
//     };

//     return (
//         <div>
//             {friendRequests.length > 0 ? (
//                 friendRequests.map((friend) => (
//                     <FriendRequest
//                         key={friend.id}
//                         friend={friend}
//                         handleAction={handleAction}
//                     />
//                 ))
//             ) : (
//                 <p className="text-center text-gray-500 mt-4">
//                     No pending friend requests.
//                 </p>
//             )}
//         </div>
//     );
// };

// export default FriendRequestsList;
