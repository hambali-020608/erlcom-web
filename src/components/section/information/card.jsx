export default function Card({title,textButton}) {
    return(
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-2">{title}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">{textButton}</button>
          </div>
        </div>
      </div>
    )
    
}