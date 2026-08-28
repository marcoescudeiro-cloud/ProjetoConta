import { ContaBancaria } from "./ContaBancaria";

export class Contas {
    private contas: ContaBancaria[];

    constructor() {
        this.contas = [];
    }

public cadastrarConta(conta: ContaBancaria): boolean {
        let ok: boolean = false;
        let posicao: number;
        let tamanho: number;
        posicao = this.localizarConta(conta.getNumeroConta());
        if (posicao === -1) {
            tamanho = this.contas.push(conta);
            ok = true;
        }
        return ok;
    }

public localizarConta(numeroConta: string): number {
        let i: number = 0;
        let encontrou: boolean = false;
        let posicao: number = -1;
        while (i < this.contas.length && encontrou == false) {
            if (this.contas[i].getNumeroConta() === numeroConta) {
                posicao = i;
                encontrou = true;
            }
            i++;
        }
        return posicao;
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

        while (i < this.contas.length) {
            if (this.contas[i].getSaldo() > valor) {
                this.contas[i].apresentarDados();
            }

            i++;
        }
    }

    public apresentarContasSaldoMenorQue(valor: number): void {
        let i: number = 0;

        while (i < this.contas.length) {
            if (this.contas[i].getSaldo() < valor) {
                this.contas[i].apresentarDados();
            }

            i++;
        }
    }

    public getQuantidadeContas(): number {
        return this.contas.length;
    }

    public apagarConta(numeroConta: string): boolean {
        let posicao: number;
        let tamanho: number;

        posicao = this.localizarConta(numeroConta);

        if (posicao === -1) {
            return false;
        }

        tamanho = this.contas.splice(posicao, 1).length;

        return true;
    }
}
