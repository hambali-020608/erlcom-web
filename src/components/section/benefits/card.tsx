interface cardProps{
title: string
}

export default function Card({title}:cardProps) {
    return (
        <div className=" card bg-base-100 w-96 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    )
}