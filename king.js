let palvra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  

}

 function palavraAleatoria(){
     let palavras = ["Dangerous", "UwU", "ForU"]
  return random(palavras);
 }

function draw() {
  background("Black");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
  
  function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo , maximo, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
    return parcial;
  }
  
  
  
  // mouseX, 0, width ==> 0, palavra.length
  let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
  

}

function jogaresMelhoresQueEu(jogadres, times){
  
}