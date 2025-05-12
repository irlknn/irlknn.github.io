import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const [user, loading] = useAuthState(getAuth());

    if (loading) {
        return <div>Loading...</div>; // You can show a loading spinner or message here
    }
    return user ? (
        children
    ) : (
        <Navigate to="/login" />
    );
}
export default PrivateRoute;