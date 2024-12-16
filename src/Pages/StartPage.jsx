import { Link } from "react-router-dom";
import Button from "../Components/Buttons/Buttons";


function StartPage(){    
    return(
        <div className="sm: px-4 py-10">
            <div className="sm: text-2xl mb-[105px]">
                <h1>Select Your Challenge</h1>
            </div>
            <div className="sm: mb-10">
                <div className="sm: mb-[50px]">
                    <Link to={'/start/play'}>
                        <Button
                            text={"Who Am I?"}
                            styleType={"warning"}                        
                        />
                    </Link>
                    
                </div>
                <div className="sm: mb-[50px]">
                    <Button text={"What Is My Type?"} styleType={"warning"}/>
                </div>
                <div className="sm: mb-[50px]">
                    <Button text={"Who is Parant and Child"} styleType={"warning"}/>
                </div>               
            </div>
        </div>
    );
}

export default StartPage;