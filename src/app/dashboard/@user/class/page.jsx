import TableTwo from "../../../../components/dashboard/Tables/TableTwo"
import AuthUser from "../../../../lib/authUser"
import {getClassByUser} from '../../../../lib/getClass' 
export default async function ClassPage() {
    const authUser = await AuthUser()
    const classes = await getClassByUser(authUser.id)



    return(
        <div>
            {console.log(classes)}
            <TableTwo classes={classes.enrollments}/>
        </div>
    )
}