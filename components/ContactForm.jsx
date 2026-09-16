
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Họ và tên */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Họ và tên
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nguyễn Văn A"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>
      </div>

      {/* Tin nhắn */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-gray-900">
          Tin nhắn
        </label>

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Nhập nội dung tin nhắn..."
          rows={6}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </div>

      {/* Nút gửi */}
      <button
        type="submit"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Gửi tin nhắn
      </button>

      {/* Thông báo sau khi gửi */}
      {submitted && (
        <div className="mt-5 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700">
          ✓ Cảm ơn bạn! Tin nhắn đã được gửi thành công.
        </div>
      )}
    </form>
  );
}
