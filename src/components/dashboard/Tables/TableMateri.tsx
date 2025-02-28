'use client'
import { Package } from "@/types/package";
import { useState } from "react";

const packageData: Package[] = [
  {
    name: "Free package",

    invoiceDate: `Jan 13,2023`,
    status: "Finish",
  },
  {
    name: "Standard Package",
    invoiceDate: `Jan 13,2023`,
    status: "Unfinished",
  },
  {
    name: "Business Package",
    invoiceDate: `Jan 13,2023`,
    status: "Finish",
  },
  {
    name: "Standard Package",
    invoiceDate: `Jan 13,2023`,
    status: "Finish",
  },
];



const TableThree = ({data}:any) => {
  const [NewMateri, setNewMateri] = useState({
    title: "",
    course_id: 0,
    description: "",
   
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const [MateriList, setMateriList] = useState(data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewMateri({ ...NewMateri, [e.target.name]: e.target.value });
  };
  const  addClass = async () => {
    // Validasi jika nama kelas dan harga kosong
    if (!NewMateri.title) {
      alert("Nama Materi harus diisi.");
      return;
    }

    // Menambahkan kelas baru ke dalam daftar kelas
    setMateriList([...MateriList, { ...NewMateri }]);
    toggleModal(); // Tutup modal setelah menambah kelas
    setNewMateri({ title: "", description: "", course_id:0}); // Reset form
    const response = await fetch ('/api/store-materi', {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NewMateri)
      
    })
    const data = await response.json()
    console.log(NewMateri)
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
     <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">Semua Materi</h4>
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          + Tambah Materi/Tugas
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-center dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Judul Materi
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Deskripsi
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Program Kursus
              </th>
              {/* <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody >
            {data.map((submission:any, key:any) => (
              <tr key={key} className="">
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {submission.title}
                  </h5>
                    </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {submission.description}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium `}
                  >
                    {submission.courses.title}
                  </p>
                </td>
             
              </tr>
            ))}
          </tbody>
        </table>

        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4">Tambah Materi Baru</h3>
            <div className="mb-2">
              <label className="block text-sm font-medium">Judul Materi</label>
              <input
                type="text"
                name="title"
                value={NewMateri.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Detail Materi</label>
              <input
                type="text"
                name="description"
                value={NewMateri.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
        
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Program Kursus</label>
              <select name="courses" id="" onChange={handleChange}>
              <option value="1">Microsoft Office</option>
              <option value="2">Design Grafis</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 mr-2 border rounded-md"
              >
                Batal
              </button>
              <button
                onClick={addClass}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default TableThree;
