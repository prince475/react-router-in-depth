import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

  return (
    <div className="careers">
        {careers.map(career => (
          <Link to="/" key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
    </div>
  )
}


// loader function
export const careersLoader = async () => {
   const response = await fetch ('http://localhost:3500/careers')

   return response.json()
}
