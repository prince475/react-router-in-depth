import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi, nihil natus quas ab in illo nam recusandae aspernatur dolore, necessitatibus quis qui fugiat iusto cupiditate magni voluptas, perferendis eos.</p>

        <p>Go to the<Link to="/">Homepage</Link></p>

    </div>
  )
}
