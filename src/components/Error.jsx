import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return (
        <>
        error page 
        {useRouteError}
        </>
    )
}
export default Error;