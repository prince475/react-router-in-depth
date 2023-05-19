import { useParams } from "react-router-dom"


export const CareerDetails = () => {

    const { id } = useParams
  return (
    <div className="career-details">
            <h2>{ id }</h2>
    </div>
  )
}

// loader function

