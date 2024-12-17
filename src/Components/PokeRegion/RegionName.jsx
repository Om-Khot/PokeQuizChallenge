import { useContext, useEffect, useState } from "react";
import RegionArrContext from "../../Context/RegionGame/RegionScoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegionScoreContext from "../../Context/RegionGame/RegionScoreContext";
import RegionIdxContext from "../../Context/RegionGame/RegionIdxContext";

function RegionName({place,ans}){

    const {idx} = useContext(RegionIdxContext);
    const {setIdx} = useContext(RegionIdxContext);
    const {RegionScore} = useContext(RegionScoreContext);
    const {SetRegionScore} = useContext(RegionScoreContext);

    useEffect(()=>{
        
    },[]);

    const navigate = useNavigate();

    function onSumbitHandler(e){
        
        const res = window.confirm("Are you sure to submit " + e);
        if(res){
            if(e == ans){
                alert("Wow! You have chosen right answer");                
                SetRegionScore(RegionScore +  10);
            }
            else{
                alert("Opps! You have chosen wrong answer");                
            }

            if(idx == 9) {
                if(e == ans) navigate(`/start/play/result/${RegionScore+10}`);                 
                else navigate(`/start/play/result/${RegionScore}`);
            }
            else setIdx(idx+1);
        }
    }

    return(
        <div className="sm: w-[125px] bg-blue-500 text-center rounded-md">
            <button className="bg-blue-500 text-white p-4 text-center rounded"
                onClick={(e)=>{
                    ans = ans.charAt(0).toUpperCase() + ans.slice(1);
                    onSumbitHandler(place);                    
                }}
            >
                {place}
            </button>
        </div>
    )
};

export default RegionName;