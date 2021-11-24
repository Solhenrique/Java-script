/*Faça um algoritmo que leia três notas 
de um aluno, calcule e escreva a média final 
deste aluno. Considerar que a média é ponderada 
e que o peso das notas é 2, 3 e 5. Fórmula para o 
cálculo da média final é:*/

var prova1 = prompt('informações da sua nota do 1 trimestre') * 2;

var prova2 = prompt('informações da sua nota do 2 trimestre') * 3;

var prova3 = prompt('informações da sua nota do 3 trimestre') * 5;

total = (((prova1) + (prova2) + (prova3)) /10);

alert(total)