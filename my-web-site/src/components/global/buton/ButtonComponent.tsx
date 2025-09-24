import React from 'react';

import "./button-component.style.sass"
import type {IButton} from "../../../interfaces/IButton.ts";

function ButtonComponent({onClick , className, children} : { children: React.ReactNode }  & IButton) {

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonComponent;