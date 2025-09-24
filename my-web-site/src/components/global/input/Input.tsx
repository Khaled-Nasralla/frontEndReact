import type {IInput} from "../../../interfaces/IInput.ts";

function InputSignInUp({value,onChange,children,placeholder,type} : IInput) {

    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">  {children} </span>
            <input type={type} className="form-control" placeholder={placeholder} aria-label={placeholder}
                   aria-describedby="basic-addon1" value={value} onChange={onChange}/>
        </div>
    )
}

export default InputSignInUp;