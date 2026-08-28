export class ContaBancaria {
 private numeroConta: string;
 private titular: string;
 private saldo: number;

 constructor(numeroConta: string, titular: string) {
 this.numeroConta = numeroConta;
 this.titular = titular;
 this.saldo = 0;
 }

 public getNumeroConta(): string {
 return this.numeroConta;
 }

 public getTitular(): string {
 return this.titular;
 }

 public setTitular(novoNome: string): void {
 this.titular = novoNome;
 }

 public getSaldo(): number {
 return this.saldo;
 }

 public depositar(valor: number): void {
 this.saldo += valor;
 }

 public sacar(valor: number): boolean {
 let ok: boolean = false;
 if (this.saldo >= valor) {
 this.saldo -= valor;
  ok = true;
 }
 return ok;
 }

 public apresentarDados(): void {
 console.log( this.numeroConta + " " + this.titular + " " + this.saldo.toFixed(2) );
 }

}
