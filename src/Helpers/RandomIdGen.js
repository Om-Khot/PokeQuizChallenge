function RandomIdGen(){
    const id = Math.floor((Math.random() * 500) + 1);
    console.log(id);
    return id;
}

export default RandomIdGen;