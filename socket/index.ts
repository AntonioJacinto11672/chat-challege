import { Server } from "socket.io";

const io = new Server(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let users: any = []


/* Add User a array F */
const addUser = (userId: string, socketId: string) => {
    !users.some((user: any) => user.userId === userId) &&
        users.push({ userId, socketId })
}

const removeUser = (socketId: string) => {
    users = users.filter((user: any) => user.socketId !== socketId)
}

const getUser = (userId:any) => {
    return users.find((user: any) => user.userId === userId);
  };

  

io.on("connect", (socket) => {
    console.log("a use connect")


    //Take userId and socket 
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users)
    })

    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text,
        });
    });

    socket.on("disconnect", () => {
        console.log("a user disconnect")
        removeUser(socket.id)
        io.emit("getUsers", users)
    })
})