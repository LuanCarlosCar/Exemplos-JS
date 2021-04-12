/* crie um objeto que possuira 2 propriedades, ambas do tipo array:
* receitas: []
*despesas: []

agora, crie uma função que irá calcular o total de
 receitas e despesas e irá mostrar uma mensagem se a familia esta 
 com saldo positivo ou negativo, seguido do valor do saldo

*/

const receita = [10,20]
const despesas = [10,5]



const total = receita.reduce((total, i) => total + i)
const dinheiro = despesas.reduce((total, x) => total- x)


console.log(dinheiro);

