"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthUser from "../../../lib/authUser";

export default function PaymentPage() {
  const { id } = useParams();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const [program, setProgram] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await AuthUser();
        if (!user) return router.push("/login");
        setUser(user);

        const res = await fetch(`/api/programs/${id}`);
        const data = await res.json();
        setProgram(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!program) return <p className="text-center mt-10">Kursus tidak ditemukan!</p>;

  const handlePayment = async () => {
    try {
      // Simpan pembayaran
      const paymentRes = await fetch("/api/payment/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          course_id: program.id,
          payment_method: paymentMethod,
          amount: program.price,
        }),
      });

      const paymentData = await paymentRes.json();
      console.log(paymentData)
      if (!paymentData.success) throw new Error("Pembayaran gagal");

      // Enroll user ke kursus
      const enrollRes = await fetch("/api/enrollments/create-enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          course_id: program.id,
        }),
      });



      const enrollData = await enrollRes.json();
      console.log(enrollData)
      if (!enrollData.success) throw new Error("Gagal enroll kursus");

      // Redirect ke halaman sukses
      router.push("/success");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat pembayaran");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Form Pembayaran</h2>
      <p className="mb-2"><strong>Kursus:</strong> {program.title}</p>
      <p className="mb-4"><strong>Harga:</strong> Rp{program.price.toLocaleString()}</p>

      <label className="block mb-2 font-semibold">Metode Pembayaran</label>
      <select
        className="w-full border p-2 rounded-lg"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="bank_transfer">Transfer Bank</option>
        <option value="credit_card">Kartu Kredit</option>
        <option value="ewallet">E-Wallet</option>
      </select>

      <button
        onClick={handlePayment}
        className="bg-green-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-green-600"
      >
        Bayar
      </button>
    </div>
  );
}
