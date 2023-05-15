import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
            <h2>Our Careers</h2>
            <p>Your path to an awesome career journey</p>

        <Outlet />
    </div>
  )
}
