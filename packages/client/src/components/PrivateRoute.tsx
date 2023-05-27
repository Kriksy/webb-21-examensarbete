import { useContext } from "react"
import { Navigate, RouteProps, Route } from 'react-router-dom'

import { AppContext } from "../context/appContext"

type Props = {
    children: React.ReactNode
}
export default function PrivateRoute({ children }: Props) {
    const { loggedIn } = useContext(AppContext)
    if (loggedIn) {
        return <>{children}</>
    }

    return <Navigate to={{ pathname: "/login" }} />;
}
interface PrivateRouteReturn {

}
export const PRoute = (props: RouteProps): React.ReactElement => {
    return <Route {...props} />
}

// https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4
export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
  };
  
  export function ProtectedRoute({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) {
    if(isAuthenticated) {
      return outlet;
    } else {
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
  };