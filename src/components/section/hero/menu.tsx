interface MenuProps{
    title: string
}
export default function Menu({title}:MenuProps) {
    return(
        <div className=" text-center bg-white bg-opacity-50 -mt-32  h-24 w-52 ">
            
                                    <i className="fas fa-award text-3xl"></i>
                                    <p>{title}</p>
                                </div>
    )
}