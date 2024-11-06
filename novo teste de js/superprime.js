let name = 'joão';
let age = 17;

console.log(`My name is ${name} and my age is ${age}`);

//#2 desafio

let string1 = 'strawberry cake';
let string2 = 'chocolate cake';
console.log( string1 == string2)

//#3 

let number = 4.5;

console.log(`the number ${number} is a biggest that the 10`);
console.log(number > 10);

//#4

let peopleage = 16;

if(peopleage >= 18){
  console.log('congratulations you are a adult')
} else {
  console.log('get out! You dont have age for stay in this place')
}

//#5

let vote = 16;

if(vote >= 16){
  console.log('you can vote')
} else{
  console.log('Sorry you cant vote maybe next time')
}

//#6

let c = 55;

if( c > 50 ){
  console.log(`o numero ${c} está entre 50 e 100`);
} else if(choice < 100) {
  console.log(`o numero ${c} está entre 50 e 100`);
} else {
 console.log('seu numero não está entre 50 e 100');
}

//#7

let nome = 'jhon';
let idade = 22;


  if(idade >= 18){
    console.log(`${nome} tome cuidade você já pode ser preso`);
  }
  else{
    console.log(`${nome} você ainda é muito jovem`);
  
}

//#8

let n1 = 11;
let n2 = 22;

if(n1 > n2){
  console.log(`o numero ${n1} é maior`)
} else{
  console.log(`o numero ${n2} é maior`)

}

//#9

let myword = 'minecraft';

if(myword.length > 5){
  console.log(`a palavra ${myword} é maior que 5 letras`)
}else{
  console.log(`a palavra ${myword} não é maior que 5 letras`)
}

//#10

let elemento1 = 2;
let elemento2 = 3;

if(elemento1 % 2 === 0 & elemento2 % 2 === 0){
  console.log(`o elemento 1 ${elemento1} e o elemento 2 ${elemento2} são pares`)
}else{
  console.log(`o 1°elemento ${elemento1} e o 2°elemento ${elemento2} não são pares`)
}

//#11

let simpleword = 'speed';
if(simpleword.includes('javascript')){
  console.log('a frase contem o requisito')
}else{
  console.log(' a frase não contem o requisito' )
}

//#12

let salario = 2000;
if(salario > 2000){
  console.log('seu salario é acima de R$2000')
}else if(salario = 2000){
  console.log('seu salario é R$2000')
}else{
  console.log('seu salario é menor que R$2000')
}

//#13

let senha = 'sesisp891';
if(senha.length >= 8 && /\d/.test(senha)){
  console.log('sua senha tem numeros')
}else{
  console.log('sua senha não tem numeros')
}

//#14

let nota1 = 10;
let nota2 = 5;
let nota3 = 7;

if(((nota1 + nota2 + nota3)/3) > 7){
  console.log('tirou acima de 7')
}else{
  console.log('infelizmente tirou menos de 7')
}

//#15

let ano = 2100;

if(ano % 4 === 0 && ano % 100 !== 0 && ano % 400 === 0){
  console.log('bissexto');
}else{
  console.log('não bissexto');
  
}


//#16

let a1 = 10;
let b1 = 12;
let c1 = 13;

if(a1 > b1 && a1 > c1){
  console.log(`o numero ${a1} é maior que ${b1} e o ${c1}`)
}else if(b1 > a1 && b1 > c1){
  console.log(`o numero ${b1} é maior que ${a1} e o ${c1}`)
}else{
  console.log(`o numero ${c1} é maior que ${b1} e o ${a1}`)
}

//#17

let usuario = 'brpiros12'
let senhauser = 'mytime60'
if( usuario == 'brpiros12' && senhauser == 'mytime60' ){
  console.log('seu login esta correto');
  
}else{
  console.log('verifique se seu login está correto');
  
}

//#18

let f = 3;
let s = 4;
let t = 8;

if(f + s == t){
  console.log(`a soma ${f} com ${s} é igual a o valor do terceiro numero que é ${t}`);
  
}else{
  console.log(`a soma ${f} com ${s} não é igual a o valor do terceiro numero que é ${t}`);
  
}

//explicação professor

const documentoidentidade = {
  nomedoc: 'breno',
  sobrenome: 'piros',
  cpf: '111.111.111.11',
  empresa: 'doccomp',
  idadedoc: 17,
} 
  console.log(documentoidentidade.nomedoc);
  console.log(documentoidentidade.idadedoc);
  console.log(documentoidentidade['cpf']);


  const investimento = [100, 120, 300, 125, 100, 435];

  console.log(`O valor investimento no mes 1 é: ${investimento[0]}`);
  console.log(`O valor investimento no mes 2 é: ${investimento[1]}`);
  console.log(`O valor investimento no mes 3 é: ${investimento[2]}`);
  console.log(`O valor investimento no mes 4 é: ${investimento[3]}`);
  console.log(`O valor investimento no mes 5 é: ${investimento[4]}`);
  console.log(`O valor investimento no mes 6 é: ${investimento[5]}`);


  let musica = {
    nm: "alone",
    artista: 'marshemelow',
    
  }
  
  