"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AuthUser from "../../../../../lib/authUser";

export default function ChatPage() {
  const { id } = useParams(); // ID user yang sedang di-chat
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    if (!id) return; // Jangan fetch kalau id tidak ada

    const fetchChats = async () => {
      try {
        const response = await fetch(`/api/get-chat/user?sender_id=${id}`); // Fetch chat dari API
        const user = await AuthUser()
        if (!response.ok) throw new Error("Gagal mengambil chat");

        const data = await response.json();
        setChats(data.chatHistory);
        setUserId(user.id)
      } catch (error) {
        console.error("💥 ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [id]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await fetch("/api/send-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender_id: userId, receiver_id: id, message }),
      });

      if (!response.ok) throw new Error("Gagal mengirim pesan");

      const newChat = await response.json();
      console.log(newChat)
    } catch (error) {
      console.error("💥 ERROR:", error);
    }
  };


  if (loading) return <p>Loading chats...</p>;

  return (
    <div className="p-4 relative ">
      {console.log(chats)}
      {chats.length === 0 ? (
        <p className="text-gray-500">Belum ada chat</p>
      ) : (
        chats.map((chat,i) => (
          <div
            key={i}
            className={`chat ${
              chat.sender_id === parseInt(id) ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-bubble">{chat.message}</div>
          </div>
        ))
      )}

<div className="fixed bottom-0 right-0 w-[calc(100%-17rem)] p-4 bg-gray-200 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-md"
            placeholder="Ketik pesan..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md"   onClick={sendMessage}>
            Kirim
          </button>
        </div>


    </div>
  );
}
