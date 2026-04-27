import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ApplyForm from "@/app/components/ApplyForm";

export const metadata = {
  title: "참가 신청 | KIROTHON",
  description: "KIROTHON 참가 신청 페이지",
};

export default function ApplyPage() {
  return (
    <main className="font-sans">
      <Header />
      <ApplyForm />
      <Footer />
    </main>
  );
}