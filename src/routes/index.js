import React, { useContext } from "react";
import { Container, LoadingIcon } from "./styles";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext} from "../contexts/AuthContext";



function Routes(){
    const { isAuthenticated, loading } = useContext(AuthContext);


    if(loading){
        return(
            <Container>
                <LoadingIcon size={35} color="#FFFFFF"/>
            </Container>
        )
    }
    
    return(
        isAuthenticated? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;