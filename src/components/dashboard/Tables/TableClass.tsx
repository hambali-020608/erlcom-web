'use client'
import { useState } from "react";

const TableTwo = ({ classes }: any) => {
  // State untuk modal & form input
  const [isOpen, setIsOpen] = useState(false);
  const [newClass, setNewClass] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  // State untuk menyimpan daftar kelas
  const [classList, setClassList] = useState(classes);

  // Fungsi untuk membuka/menutup modal
  const toggleModal = () => setIsOpen(!isOpen);

  // Fungsi untuk menangani input form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani perubahan gambar (jika dibutuhkan)
  

  // Fungsi untuk menambahkan kelas baru
  const  addClass = async () => {
    // Validasi jika nama kelas dan harga kosong
    if (!newClass.title || newClass.price <= 0) {
      alert("Nama kelas dan harga harus diisi.");
      return;
    }

    // Menambahkan kelas baru ke dalam daftar kelas
    setClassList([...classList, { ...newClass }]);
    toggleModal(); // Tutup modal setelah menambah kelas
    setNewClass({ title: "", description: "", price: 0, image: "" }); // Reset form
    const response = await fetch ('/api/store-class', {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClass)
      
    })
    const data = await response.json()
    console.log(data)
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default p-6 dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">Semua Kelas</h4>
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          + Tambah Kelas
        </button>
      </div>

      {/* Header Table */}
      <div className="grid grid-cols-6 border-b border-stroke pb-2 dark:border-strokedark text-sm font-medium">
        <div className="col-span-3">Kelas</div>
        <div className="col-span-2">Total Siswa</div>
        <div className="col-span-1">Harga Bulanan</div>
      </div>

      {/* Data Kelas */}
      {classList.map((kelas: any, index: number) => (
        <div key={index} className="grid grid-cols-6 py-3 border-b border-gray-200 text-sm">
          <div className="col-span-3">{kelas.title}</div>
          <div className="col-span-2">{kelas._count?.enrollments || 0}</div>
          <div className="col-span-1">{kelas.price}</div>
        </div>
      ))}

      {/* Modal Tambah Kelas */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4">Tambah Kelas Baru</h3>
            <div className="mb-2">
              <label className="block text-sm font-medium">Nama Kelas</label>
              <input
                type="text"
                name="title"
                value={newClass.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Detail Kelas</label>
              <input
                type="text"
                name="description"
                value={newClass.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Gambar Kelas</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              {newClass.image && <img src={newClass.image} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-md" />}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Harga Bulanan</label>
              <input
                type="number"
                name="price"
                value={newClass.price}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
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
  );
};

export default TableTwo;
