const vett = [];
const vettUtente = []; 
const vettConfronto = [];
let numIndovinati = 0;


for(let i=0; i<5; i++ ){
    vett[i]=randomMinToMax(1,100);
}


alert(vett);


setTimeout(() => { game(); }, 3000);



function game(){
    inserimentoUtente();
    confrontoVettori();
    alert(`Hai indovinato ${numIndovinati} numeri.
    I numeri indovinati sono ${vettConfronto}`)
}

function randomMinToMax(min , max){
    return Math.floor( Math.random()*max + min);
}

function inserimentoUtente(){
    for(let i=0; i<5; i++){
        vettUtente[i]=prompt('inserisci numero');
    }
}

function confrontoVettori(){
    for(let i=0; i<5; i++){
        if(vettUtente[i]==vett[i]){
            vettConfronto[i]=vett[i];
            numIndovinati++;
        }
    }
}


console.log(vett)