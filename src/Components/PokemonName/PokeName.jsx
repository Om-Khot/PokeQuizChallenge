import axios from "axios";
import { useContext, useEffect, useState } from "react";
import IndexContext from "../../Context/IndexContext";
import OptArrayContext from "../../Context/ScoreChange";
import optionsBuilder from "../../Helpers/optionsBuilder";
import IdListContext from "../../Context/IdListContext";
import ScoreChange from "../../Context/ScoreChange";
import { useNavigate } from "react-router-dom";
function PokeName({id,ans}){

    const [pokemonName,setPokemonName] = useState('');
    const {idx} = useContext(IndexContext);
    const {setidx} = useContext(IndexContext);
    const {score} = useContext(ScoreChange);
    const {setScore} = useContext(ScoreChange);
    
    async function getPokeName(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const responseData = response.data;
        const name = responseData.name;
        setPokemonName(name);
        console.log(pokemonName);
    }

    useEffect(()=>{
        getPokeName();
    },[]);

    
    const navigate = useNavigate();
    function onSumbitHandler(e){
        
        const res = window.confirm("Are you sure to submit " + e);
        if(res){
            if(e == ans){
                alert("Wow! You have chosen right answer");                
                setScore(score +  10);
            }
            else{
                alert("Opps! You have chosen wrong answer");                
            }

            if(idx == 9) {                
                navigate(`/start/play/result/${score + 10}`);
            }
            else setidx(idx+1);
        }
    }
    return(
        <div className="sm: w-[125px] bg-blue-500 text-center rounded-md">
            <button className="bg-blue-500 text-white p-4 text-center rounded"
                onClick={(e)=>{
                    onSumbitHandler(pokemonName);
                }}
            >{pokemonName}</button>
        </div>
    )
}

export default PokeName;