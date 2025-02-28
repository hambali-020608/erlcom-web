import Breadcumb from '../../../../components/dashboard/Breadcrumbs/Breadcrumb'
import TableMateri from "../../../../components/dashboard/Tables/TableMateri";
import {getMateri} from '../../../../lib/getMateri'
import AuthUser from '../../../../lib/authUser'
export default async function MateriPage() {
  const user = await AuthUser()
  const materi = await getMateri()
    return(
        <>
        <Breadcumb pageName="Materi" />
      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableMateri data={materi} />
      {console.log(materi)}
      </div>
      </>
    )
    
}