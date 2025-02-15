import Breadcumb from '../../../components/dashboard/Breadcrumbs/Breadcrumb'
import TableOne from "../../../components/dashboard/Tables/TableOne";
import TableThree from "../../../components/dashboard/Tables/TableThree";
import {getMateriByUser} from '../../../lib/getMateri'
import AuthUser from '../../../lib/authUser'
export default async function MateriPage() {
  const user = await AuthUser()
  const materi = await getMateriByUser(user.id)
    return(
        <>
        <Breadcumb pageName="Materi" />

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableThree data={materi.submissions} />
      {console.log(materi)}
      </div>
      </>
    )
    
}