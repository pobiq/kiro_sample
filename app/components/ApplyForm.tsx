"use client";

import { useState } from "react";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    school: "",
    email: "",
    idea: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/apply", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("신청 완료!");
  };

  return (
    <section className="bg-gray-50 py-20" id="apply">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          참가 신청
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4"
        >
          <input
            placeholder="이름"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="학교"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, school: e.target.value })}
          />

          <input
            placeholder="이메일"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="아이디어 간단 설명"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, idea: e.target.value })}
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">
            제출하기
          </button>
        </form>
      </div>
    </section>
  );
}