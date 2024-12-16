import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Buttons";
import optionsBuilder from "../../Helpers/optionsBuilder";
import PokeName from "../PokemonName/PokeName";
import IndexContext from "../../Context/IndexContext";
import IdListContext from "../../Context/IdListContext";
import ScoreChange from "../../Context/ScoreChange";

function Pokemon(){
 
    const {arr} = useContext(IdListContext);
    
    const [idx,setidx] = useState(0);
    const [imgSrc,setImgSrc] = useState('');
    const [pokName,setPokName] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [optArray,setOptArr] = useState([]);
    const [score,setScore] = useState(0);

    async function fetchPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arr[idx]}`);
        const responseData = response.data;
        console.log(responseData);
        const img = response.data.sprites.other.dream_world.front_default;
        setImgSrc(img);
        setPokName(responseData.name);
        const brr = optionsBuilder(arr[idx])
        setOptArr(brr);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchPokemon();       
    },[idx]);

    
    return(
        <IndexContext.Provider value={{idx,setidx}}>
            <ScoreChange.Provider value={{score,setScore}}>
                <div key={optArray} className="sm: w-full h-[100vh] px-4 py-2">
                    <div className="sm: w-full flex justify-between">
                        <div>Pokemon No. {idx+1} </div>
                        <div>Score: {score}</div>
                    </div>

                    <div className="sm: text-3xl font-semibold text-slate-600 text-center mb-[50px] mt-[45px]">
                        <h1>Who Am I?</h1>
                    </div>

                    <div className="w-full h-[50vh] flex justify-center">
                        {isLoading ? "Loading...." : <img src={imgSrc} className="sm: w-[85%] h-full ml-[25px]" />}
                        
                    </div>
                        
                    <div className=" mt-2 sm: grid grid-cols-2 gap-1 ml-3 md:flex justify-center md: mt-[50px] gap-4">
                        {optArray && optArray.length > 0 && optArray.map((opt,index)=><PokeName key={index} id={opt} ans={pokName}/>)}
                    </div>
                
                </div>
            </ScoreChange.Provider>
            
        </IndexContext.Provider>
        
    )
}

export default Pokemon;