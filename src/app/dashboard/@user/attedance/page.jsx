import Breadcumb from '../../../../components/dashboard/Breadcrumbs/Breadcrumb'
import TableOne from "../../../../components/dashboard/Tables/TableOne";

import {getAttedanceByUser} from '../../../../lib/getAttedance'
import AuthUser from '../../../../lib/authUser'
export default async function AttedancePage() {
  const user = await AuthUser()
  const attedance = await getAttedanceByUser(user.id)
    return(
        <>
        <Breadcumb pageName="Absensi" />

      <div className="flex flex-col
       gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableOne attedances={attedance.attendance}/>
      {console.log(attedance)}
      </div>
      </>
    )
    
}