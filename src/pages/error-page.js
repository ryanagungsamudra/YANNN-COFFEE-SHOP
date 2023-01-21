import { Link, useRouteError } from "react-router-dom";
import errorLoading from "../assets/loading-coffee.gif"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  flexDirection: 'column' }} >
            <img src={errorLoading} alt="CoffeeLoading" style={{width: '250px', height:'250px'}}/>
            <h1>Oops!</h1>
            <p>
                <i>404 {error.statusText || error.message}</i>
            </p>
            <p>Sorry, We can't find the page you're looking for.</p>
            <Link to="/">
                <button className="btn btn-warning px-5 py-3" style={{ fontWeight: '500', borderRadius: '20px' }}>Go to Home</button>
            </Link>
        </div>
    );
}