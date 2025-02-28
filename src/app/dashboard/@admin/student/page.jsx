import Breadcumb from '../../../../components/dashboard/Breadcrumbs/Breadcrumb'
import TableSiswa from "../../../../components/dashboard/Tables/tableSiswa";
import {getMateri} from '../../../../lib/getMateri'

import {getAllUsers} from '../../../../lib/getUser'
export default async function StudentPage() {
  const students = await getAllUsers()
  const materi = await getMateri()
    return(
        <>
        <Breadcumb pageName="Siswa" />

      <div className="flex flex-col
       gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableSiswa students={students} materi={materi}/>
      {console.log(students)}
      </div>
      </>
    )
    
}