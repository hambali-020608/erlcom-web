import TableTwo from "../../../../components/dashboard/Tables/TableClass"
import AuthUser from "../../../../lib/authUser"
import {getAllClass} from '../../../../lib/getClass' 
export default async function ClassPage() {
    const authUser = await AuthUser()
    const classes = await getAllClass()



    return(
        <div>
            {console.log(classes)}
            <TableTwo classes={classes}/>
        </div>
    )
}