
import React from "react";
import "./main-template.sass"

import {NavBarComponent} from "../Header/NavBarComponent.tsx";

function MainTemplate({children }: {children: React.ReactNode}  ) {

    return (
        <>
            <NavBarComponent />
            <div className="full-screen main-template">
                {children}
            </div>

        </>
    );
}

export default MainTemplate;