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
    let numero: string;
    numero = this.numeroConta;
    return numero;
  }
  public getTitular(): string {
    let nome: string;
    nome = this.titular;
    return nome;
  }
  public setTitular(novoNome: string): void {
    this.titular = novoNome;
  }
  public getSaldo(): number {
    let saldoAtual: number;
    saldoAtual = this.saldo;
    return saldoAtual;
  }
  public depositar(valor: number): void {
    this.saldo += valor;
  }
  public sacar(valor: number): boolean {
    let resultado: boolean = false;
    if (this.saldo >= valor) {
      this.saldo -= valor;
      resultado = true;
    }
    return resultado;
  }
  public apresentarDados(): void {
    let dados: string;
    dados = this.numeroConta + " " + this.titular + " " + this.saldo.toFixed(2); // format the account data as a string
    console.log(dados);
  }
}
