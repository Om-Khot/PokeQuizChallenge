import shuffleOptions from "../shuffleOptions";

function regOptBuilder(place){

    const Region = ['Kanto','Johto','Hoenn','Sinnoh','Unova','Kalos','Alola','Galar','Paldea','Hisui'];

    let rightPlace = place;
    rightPlace = place.charAt(0).toUpperCase() + rightPlace.slice(1);

    const opt = new Array(4);

    const exceptIndex = Region.indexOf(rightPlace);
    console.log(exceptIndex)
    for(let i = 0; i < 3; i++){
        let idx = Math.floor((Math.random() * 9));
        opt[i] = (idx != exceptIndex) ? Region[idx] : Region[Math.floor((Math.random() * 9))]
    }
    opt[3] = rightPlace;

    let newOpt = shuffleOptions(opt);
    console.log(rightPlace);
    console.log(newOpt);
    return newOpt;
}

export default regOptBuilder;