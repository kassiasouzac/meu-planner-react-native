import React, { useContext } from "react";
import { Container, LoadingIcon } from "./styles";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext} from "../contexts/AuthContext";



function Routes(){
    const { isAuthenticated } = useContext(AuthContext);
    const loading = false;

    if(loading){
        return(
            <Container>
                <LoadingIcon size={large} color="#FFFFFF"/>
            </Container>
        )
    }
    
    return(
        isAuthenticated? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;