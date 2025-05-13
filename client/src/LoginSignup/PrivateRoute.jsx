import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const [user, loading] = useAuthState(getAuth());

    if (loading) {
        return <Loading />; // You can show a loading spinner or message here
    }
    return user ? (
        children
    ) : (
        <Navigate to="/login" />
    );
}
export default PrivateRoute;