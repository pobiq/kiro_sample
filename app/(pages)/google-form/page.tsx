export default function GoogleForm() {
  return (
    <div className="p-10">
      <form
        action="https://docs.google.com/forms/d/1Hxr6T-oskIKm5LRfuETSlmi7oZuZpqx_pBn_EdYuYR0/formResponse"
        method="POST"
        target="_blank"
        className="flex flex-col gap-4 max-w-md"
      >
        <input name="entry.2005620554" placeholder="이름" required />
        <input name="entry.1045781291" placeholder="이메일" required />
        <input name="entry.1065046570" placeholder="대학" required />
        <input name="entry.1166974658" placeholder="연락처" required />
        <input name="entry.839337160" placeholder="의견" required />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}