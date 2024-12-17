import PokeRegion from "../../Components/PokeRegion/PokeRegion";
import MyRegionContext from "../../Context/MyRegionContext";
import RandomIdGen from "../../Helpers/RandomIdGen";

function MyRegion(){    
    
    const arr = new Array(10);
    for(let i = 0; i < 10; i++){
        const randNo = RandomIdGen();
        arr[i] = randNo;
    }   

    return(
        <div>
            <MyRegionContext.Provider value={{arr}}>
                <PokeRegion/>            
            </MyRegionContext.Provider>            
        </div>
    );
}

export default MyRegion;