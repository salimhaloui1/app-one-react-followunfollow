// src/components/UserCard.jsx
import { useState } from "react";

export default function UserCard({ name, avatarUrl }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 rounded-2xl w-72 text-center">
      <img
        src={avatarUrl}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <button
        className={`mt-4 px-4 py-2 rounded-full text-white ${
          isFollowing ? "bg-red-500" : "bg-blue-500"
        }`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}