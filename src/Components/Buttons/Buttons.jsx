import ButtonsStyle from "./ButtonsStyle";

function Button({text,styleType,type="submit",onclickHnadler}){
    return (
        <button 
            type={type}
            className={`text-gray ${ButtonsStyle(styleType)}  px-4 py-2 ml-5`}
            onClick={onclickHnadler}
        >
            {text}
        </button>
    )
}

export default Button;