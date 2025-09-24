import * as React from "react";
import '../container/container.sass'


export function Container({children} : {children : React.ReactNode}){
    return (
        <div className="container-center-connection d-flex flex-column align-items-center justify-content-center">
            {children}
        </div>
    )
}