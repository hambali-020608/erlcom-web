'use client'
import { BRAND } from "@/types/brand";
import Image from "next/image";
import { useState } from "react";


const TableSiswa = ({students,materi}:any) => {
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);

  const [NewSubmissions, setNewSubmissions] = useState({
    user_id:[],
    task_id:[],
   
  });


  const handleCheckboxChange = (id:any) => {
    setSelectedStudents((prev:any) =>
      prev.includes(id) ? prev.filter((s:any) => s !== id) : [...prev, id]
    );

  
  };
  const handleCheckboxChangeTask = (id:any) => {
    setSelectedTask((prev:any) =>
      prev.includes(id) ? prev.filter((s:any) => s !== id) : [...prev, id]
    );

  
  };


  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const handleSubmit = async () => {


    
    setNewSubmissions({user_id:selectedStudents,task_id:selectedTask})
    try {
      if(!NewSubmissions.user_id){
        alert('Please select student')
      }

      const response = await fetch("/api/give-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id:selectedStudents,assigments_id:selectedTask}),
      });
        const data = await response.json()
      if (response.ok) {
        console.log(data)
        alert("Tugas berhasil diberikan!");
      } else {
        alert("Gagal memberikan tugas.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Semua Siswa
     
      </h4>
      <button className="btn btn-primary mb-10" onClick={() => setShowCheckbox(true)}>Beri Tugas</button>

    {showCheckbox && (
 <button
 onClick={toggleModal}
 className="btn btn-primary ms-5"
>
 Pilih Tugas
</button>
    )}
     
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nama
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Kursus
            </h5>
          </div>
          
        </div>

        {students.map((student:any, key:any) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === student.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">

              <div className="flex-shrink-0">
              <p className="text-black dark:text-white">
                
              {showCheckbox && (
            <input
              type="checkbox"
              className="me-5"
              id={`student-${student.users.id}`}
              value={student.users.id}
              checked={selectedStudents.includes(student.users.id)}
              onChange={() => handleCheckboxChange(student.users.id)}
            />
          )}
                {student.users.name}
                
                
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{student.users.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{ student.courses.title} </p>
            </div>

          </div>
        ))}

{showCheckbox && <button onClick={handleSubmit}>Kirim Tugas</button>}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4">Pilih Tugas</h3>

            <ul>
        {materi.map((task)=>{
          return(
            <>
              <li>

              <input
              type="checkbox"
              className="me-5"
              id={`student-${task.id}`}
              value={task.id}
              checked={selectedTask.includes(task.id)}
              onChange={() => handleCheckboxChangeTask(task.id)}
            />
              {task.title}
              </li>
            
            </>
          )
        })}

</ul>
      
            
            <div className="flex justify-end mt-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 mr-2 border rounded-md"
              >
                Batal
              </button>
              <button
                onClick={toggleModal}
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

export default TableSiswa;
