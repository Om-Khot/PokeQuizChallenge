import shuffleOptions from "./shuffleOptions";

function optionsBuilder(id){
    const opt = new Array(4);
    for(let i = 0; i < 3; i++){
        opt[i] = Math.floor((Math.random() * 10) + (id+1));
    }
    opt[3] = id;

    let newOpt = shuffleOptions(opt);
    return newOpt;
}

export default optionsBuilder;