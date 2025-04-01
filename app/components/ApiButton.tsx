"use client";

import { useState } from "react";

export default function ApiButton() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button
        onClick={fetchMessage}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Call API
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
