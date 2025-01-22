import Breadcumb from '../../../components/dashboard/Breadcrumbs/Breadcrumb'
import TableOne from "../../../components/dashboard/Tables/TableOne";
import TableThree from "../../../components/dashboard/Tables/TableThree";

export default function MateriPage() {
    return(
        <>
        <Breadcumb pageName="Materi" />

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableThree />
      </div>
      </>
    )
    
}