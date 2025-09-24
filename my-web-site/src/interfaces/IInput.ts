import React from "react";


export interface IInput {
    onChange? :(event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    value?: string | number | readonly string[] | undefined;
    placeholder?: string;
    type?: string;
    children?: React.ReactNode;
}
