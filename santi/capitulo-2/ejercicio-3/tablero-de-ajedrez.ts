let size = 8;
let tablero = "";

for(let f = 0; f < size; f++){
    for(let c = 0; c < size; c++){

        if((f + c) % 2 === 0){
            tablero += " ";
        }else{
            tablero += "#";
        }

    }
    tablero += "\n";
}
console.log(tablero);
