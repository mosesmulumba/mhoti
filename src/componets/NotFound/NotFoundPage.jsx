import { Link } from "react-router-dom";
import './NotFound.css';

function NotFoundPage() {
    return ( 
        <div className="return">
            <div className="notFound">
                Page Not Found
            </div>
            <Link to="/" className="return-page">
                Return to Home Page
            </Link>
        </div>
     );
}

export default NotFoundPage;