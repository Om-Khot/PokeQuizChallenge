import axios from "axios";
import RandomIdGen from "../../Helpers/RandomIdGen";
import { useEffect } from "react";
import Pokemon from "../../Components/Pokemon/Pokemon";
import IdListContext from "../../Context/IdListContext";
function WhoAmIPlay(){

    const arr = new Array(10);
    for(let i = 0; i < 10; i++){
        const randNo = RandomIdGen();
        arr[i] = randNo;
    }
    console.log(arr);


    return(
        <IdListContext.Provider value={{arr}}>
            <div>
                <Pokemon/>           
            </div>
        </IdListContext.Provider>
        
    );
}

export default WhoAmIPlay;