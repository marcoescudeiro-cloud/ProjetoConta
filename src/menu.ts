import { ContaBancaria } from "./ContaBancaria";
import { Contas } from "./Contas";
const contas: Contas = new Contas();
let opcao: number = 0;
let numeroConta: string = "";
let titular: string = "";
let novoNome: string = "";
let valor: number = 0;
let posicao: number = -1;
let quantidade: number = 0;
let resultado: boolean = false;
do {
console.log("\n========== MENU ==========");
console.log("1. Cadastrar conta.");
console.log("2. Depositar.");
console.log("3. Sacar.");
console.log("4. Exibir saldo.");
console.log("5. Alterar titular.");
console.log("6. Exibir dados da conta.");
console.log("7. Apresentar todas as contas.");
console.log("8. Apresentar contas com saldo maior que um valor.");
console.log("9. Apresentar contas com saldo menor que um valor.");
console.log("10. Apagar conta.");
console.log("11. Finalizar.");
console.log("==========================");
opcao = Number(prompt("Escolha uma opcao:"));
switch (opcao) {
case 1:
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao !== -1) {
console.log("Nao e possivel realizar o cadastro.");
console.log("Ja existe uma conta com esse numero.");
} else {
titular = prompt("Digite o nome do titular:")!;
const novaConta: ContaBancaria = new ContaBancaria(numeroConta, titular);
resultado = contas.cadastrarConta(novaConta);
if (resultado) {
console.log("Conta cadastrada!");
}
}
break;
case 2:
quantidade = contas.getQuantidadeContas();
if (quantidade === 0) {
console.log("Nao existem contas cadastradas.");
} else {
console.log("\nContas disponiveis:");
contas.apresentarContas();
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
valor = Number(prompt("Digite o valor do deposito:"));
if (valor <= 0) {
console.log("O valor do deposito deve ser maior que zero.");
} else {
contas.depositar(posicao, valor);
console.log("Deposito realizado!");
}
}
}
break;
case 3:
quantidade = contas.getQuantidadeContas();
if (quantidade === 0) {
console.log("Nao existem contas cadastradas.");
} else {
console.log("\nContas disponiveis:");
contas.apresentarContas();
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
valor = Number(prompt("Digite o valor do saque:"));
if (valor <= 0) {
console.log("O valor do saque deve ser maior que zero.");
} else {
resultado = contas.sacar(posicao, valor);
if (resultado) {
console.log("Saque realizado!");
} else {
console.log("Saldo insuficiente.");
}
}
}
}
break;
case 4:
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
valor = contas.getSaldo(posicao);
console.log("Saldo: R$ " + valor.toFixed(2));
}
break;
case 5:
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
novoNome = prompt("Digite o novo nome do titular:")!;
contas.alterarTitular(posicao, novoNome);
console.log("Titular alterado!");
}
break;
case 6:
numeroConta = prompt("Digite o numero da conta:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
contas.apresentarConta(posicao);
}
break;
case 7:
quantidade = contas.getQuantidadeContas();
if (quantidade === 0) {
console.log("Nao existem contas cadastradas.");
} else {
contas.apresentarContas();
}
break;
case 8:
valor = Number(prompt("Digite o valor de referencia:"));
contas.apresentarContasSaldoMaiorQue(valor);
break;
case 9:
valor = Number(prompt("Digite o valor de referencia:"));
contas.apresentarContasSaldoMenorQue(valor);
break;
case 10:
numeroConta = prompt("Digite o numero da conta que deseja apagar:")!;
posicao = contas.localizarConta(numeroConta);
if (posicao === -1) {
console.log("Conta nao encontrada.");
} else {
resultado = contas.apagarConta(numeroConta);
if (resultado) {
console.log("Conta apagada!");
}
}
break;
case 11:
console.log("\nPrograma finalizado.");
break;
default:
console.log("\nOpcao invalida.");
break;
}
} while (opcao !== 11);