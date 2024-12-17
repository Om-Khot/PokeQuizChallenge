import { useContext, useEffect, useState } from "react";
import MyRegionContext from "../../Context/MyRegionContext";
import axios from "axios";
import RegionName from "./RegionName";
import RegionScoreContext from "../../Context/RegionGame/RegionScoreContext";
import RegionIdxContext from "../../Context/RegionGame/RegionIdxContext";
import regOptBuilder from "../../Helpers/RegionGame/regOptBuilder";

function PokeRegion(){

    const {arr} = useContext(MyRegionContext);

    const [idx,setIdx] = useState(0);
    const [imgLink,SetImgLink] = useState('');
    const [rg,setRg] = useState('');
    console.log(arr);    
    const [optArray,setOptArr] = useState([]);
    const [RegionScore,SetRegionScore] = useState(0);

    const [isLoading,setIsLoading] = useState(true);
    async function getPokemon(){
        const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arr[idx]}`);
        const img = response1.data.sprites.other.dream_world.front_default;
        SetImgLink(img);

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${arr[idx]}/`);
        const responseData = response.data;
        const version = responseData.version_group.url;
        const responsePromise = await axios.get(version);
        const RegionArray = responsePromise.data.regions;
        const place = RegionArray[0].name;
        setRg(place);
        console.log("place",place);
        console.log("Answer is",rg);
        const brr = regOptBuilder(place);
        setOptArr(brr);
        setIsLoading(false);
    }

    useEffect(()=>{
        getPokemon();
    },[idx,rg]);

    return(
        <RegionScoreContext.Provider value={{RegionScore,SetRegionScore}}>
            <RegionIdxContext.Provider value={{idx,setIdx}}>

                <div key={optArray} className="sm: w-full h-[100vh] px-4 py-2">

                    <div className="sm: w-full flex justify-between">
                                <div>Pokemon No. {idx+1} </div>
                                <div>Score: {RegionScore}</div>
                    </div>

                    <div className="sm: text-3xl font-semibold text-slate-600 text-center mb-[50px] mt-[45px]">
                        <h1>What Is My Region?</h1>
                    </div>

                    <div className="w-full h-[50vh] flex justify-center">
                        {isLoading ? "Loading...." : <img src={imgLink} className="sm: w-[85%] h-[90%]"/>}
                    </div>

                    <div className="mt-2 sm: grid grid-cols-2 gap-1 ml-3 md:flex justify-center">
                        {optArray && optArray.length > 0 && optArray.map((r,index)=><RegionName key={index} place={r} ans={rg}/>)}
                    </div>

                </div>

            </RegionIdxContext.Provider>
        </RegionScoreContext.Provider>
        
    );
}

export default PokeRegion;