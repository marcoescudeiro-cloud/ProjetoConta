import { ContaBancaria } from "./ContaBancaria";
export class Contas {
private contas: ContaBancaria[];
constructor() { 
this.contas = [];
}
public cadastrarConta(conta: ContaBancaria): boolean {
let resultado: boolean = false;
let numeroConta: string;
let posicao: number;
let quantidade: number;
numeroConta = conta.getNumeroConta();
posicao = this.localizarConta(numeroConta);
if (posicao === -1) {
quantidade = this.contas.push(conta);
resultado = true;
}
return resultado;
}
public localizarConta(numeroConta: string): number {
let posicao: number = -1;
let i: number = 0;
let numero: string;
while (i < this.contas.length) {
numero = this.contas[i].getNumeroConta();
if (numero === numeroConta) {
posicao = i;
}
i++;
}
return posicao;
}
public depositar(posicao: number, valor: number): void {
this.contas[posicao].depositar(valor);
}
public sacar(posicao: number, valor: number): boolean {
let resultado: boolean;
resultado = this.contas[posicao].sacar(valor);
return resultado;
}
public getSaldo(posicao: number): number {
let saldo: number;
saldo = this.contas[posicao].getSaldo();
return saldo;
}
public alterarTitular(posicao: number, novoNome: string): void {
this.contas[posicao].setTitular(novoNome);
}
public apresentarConta(posicao: number): void {
this.contas[posicao].apresentarDados();
}
public apresentarContas(): void {
let i: number = 0;
while (i < this.contas.length) {
this.contas[i].apresentarDados();
i++;
}
}
public apresentarContasSaldoMaiorQue(valor: number): void {
let i: number = 0;
let saldo: number;
while (i < this.contas.length) {
saldo = this.contas[i].getSaldo();
if (saldo > valor) {
this.contas[i].apresentarDados();
}
i++;
}
}
public apresentarContasSaldoMenorQue(valor: number): void {
let i: number = 0;
let saldo: number;
while (i < this.contas.length) {
saldo = this.contas[i].getSaldo();
if (saldo < valor) {
this.contas[i].apresentarDados();
}
i++;
}
}
public getQuantidadeContas(): number {
let quantidade: number;
quantidade = this.contas.length;
return quantidade;
}
public apagarConta(numeroConta: string): boolean {
let resultado: boolean = false;
let posicao: number;
let removidas: ContaBancaria[];
posicao = this.localizarConta(numeroConta);
if (posicao !== -1) {
removidas = this.contas.splice(posicao, 1);
resultado = true;
}
return resultado;
}
}