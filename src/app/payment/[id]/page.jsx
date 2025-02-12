"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import AuthUser from '../../../lib/authUser'


// Data kursus sementara
const programs = [
  { id: "1", title: "MS Office", price: 200000 },
  { id: "2", title: "Desain Grafis", price: 300000 },
];

export default function PaymentPage() {

  const { id } = useParams(); // Ambil ID dari URL
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const [program,setProgram]= useState([])
  const [user,setUser]= useState([])

  useEffect(()=>{
    async function fetchPrograms() {
     const user = await AuthUser()
     setUser(user)
     const programs = await fetch(`/api/programs/${id}`)
     const dataPrograms = await programs.json()
     setProgram(dataPrograms)
 
    }
    fetchPrograms()
  },[])

  if (!program) {
    return <p className="text-center mt-10">Kursus tidak ditemukan!</p>;
  }
  if (!user) {
    router.push('/login')
  }

  const  handlePayment = async() => {
    alert(`Pembayaran untuk ${program.title} berhasil!`);
    const response  = fetch('/api/enrollments/create-enrollments')
    router.push("/success"); // Redirect ke halaman sukses
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Form Pembayaran</h2>
      <p className="mb-2"><strong>Kursus:</strong> {program.title}</p>
      <p className="mb-4"><strong>Harga:</strong>Rp {program.price} </p>
{console.log(user)}
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
