import { ContaBancaria } from "./src/ContaBancaria";
import { Contas } from "./src/Contas";

const contas: Contas = new Contas();

let opcao: number = 0;

let numeroConta: string = "";
let titular: string = "";
let novoNome: string = "";
let valor: number = 0;

let conta: ContaBancaria | null = null;

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
            console.log("\n--- CADASTRAR CONTA ---");

            numeroConta = prompt("Digite o numero da conta:")!;
            titular = prompt("Digite o nome do titular:")!;

            const novaConta: ContaBancaria =
                new ContaBancaria(numeroConta, titular);

            if (contas.cadastrarConta(novaConta)) {
                console.log("Conta cadastrada !");
            } else {
                console.log("Nao e possivel realizar o cadastro.");
                console.log("Ja existe uma conta com esse numero.");
            }

            break;

        case 2:
            console.log("\n--- DEPOSITAR ---");

            if (contas.getQuantidadeContas() === 0) {
                console.log("Nao existem contas cadastradas.");
            } else {

                console.log("\nContas disponiveis:");
                contas.apresentarContas();

                numeroConta = prompt("Digite o numero da conta:")!;

                let posicaoDeposito: number =
                    contas.localizarConta(numeroConta);

                if (posicaoDeposito === -1) {
                    console.log("Conta nao encontrada.");
                } else {

                    conta = null;

                    valor = Number(
                        prompt("Digite o valor do deposito:")
                    );

                    if (valor <= 0) {
                        console.log(
                            "O valor do deposito deve ser maior que zero."
                        );
                    } else {

                        conta = contas["contas"][posicaoDeposito];

                        conta.depositar(valor);

                        console.log("Deposito realizado!");
                    }
                }
            }

            break;

        case 3:
            console.log("\n--- SACAR ---");

            if (contas.getQuantidadeContas() === 0) {
                console.log("Nao existem contas cadastradas.");
            } else {

                console.log("\nContas disponiveis:");
                contas.apresentarContas();

                numeroConta = prompt(
                    "Digite o numero da conta:"
                )!;

                let posicaoSaque: number =
                    contas.localizarConta(numeroConta);

                if (posicaoSaque === -1) {
                    console.log("Conta nao encontrada.");
                } else {

                    conta = null;

                    valor = Number(
                        prompt("Digite o valor do saque:")
                    );

                    if (valor <= 0) {
                        console.log(
                            "O valor do saque deve ser maior que zero."
                        );

                    } else {

                        conta = contas["contas"][posicaoSaque];

                        if (conta.sacar(valor)) {
                            console.log(
                                "Saque realizado com sucesso!"
                            );
                        } else {
                            console.log("Saldo insuficiente.");
                        }
                    }
                }
            }

            break;

        case 4:
            console.log("\n--- EXIBIR SALDO ---");

            numeroConta = prompt(
                "Digite o numero da conta:"
            )!;

            let posicaoSaldo: number =
                contas.localizarConta(numeroConta);

            if (posicaoSaldo === -1) {
                console.log("Conta nao encontrada.");
            } else {

                conta = contas["contas"][posicaoSaldo];

                console.log(
                    "Saldo: R$ " +
                    conta.getSaldo().toFixed(2)
                );
            }

            break;

        case 5:
            console.log("\n--- ALTERAR TITULAR ---");

            numeroConta = prompt(
                "Digite o numero da conta:"
            )!;

            let posicaoTitular: number =
                contas.localizarConta(numeroConta);

            if (posicaoTitular === -1) {
                console.log("Conta nao encontrada.");
            } else {

                conta = contas["contas"][posicaoTitular];

                novoNome = prompt(
                    "Digite o novo nome do titular:"
                )!;

                conta.setTitular(novoNome);

                console.log(
                    "Titular alterado com sucesso!"
                );
            }

            break;

        case 6:
            console.log(
                "\n--- EXIBIR DADOS DA CONTA ---"
            );

            numeroConta = prompt(
                "Digite o numero da conta:"
            )!;

            let posicaoDados: number =
                contas.localizarConta(numeroConta);

            if (posicaoDados === -1) {
                console.log("Conta nao encontrada.");
            } else {

                conta = contas["contas"][posicaoDados];

                conta.apresentarDados();
            }

            break;

        case 7:
            console.log(
                "\n--- TODAS AS CONTAS ---"
            );

            if (contas.getQuantidadeContas() === 0) {
                console.log(
                    "Nao existem contas cadastradas."
                );
            } else {
                contas.apresentarContas();
            }

            break;

        case 8:
            console.log(
                "\n--- CONTAS COM SALDO MAIOR ---"
            );

            valor = Number(
                prompt(
                    "Digite o valor de referencia:"
                )
            );

            contas.apresentarContasSaldoMaiorQue(valor);

            break;

        case 9:
            console.log(
                "\n--- CONTAS COM SALDO MENOR ---"
            );

            valor = Number(
                prompt(
                    "Digite o valor de referencia:"
                )
            );

            contas.apresentarContasSaldoMenorQue(valor);

            break;

        case 10:
            console.log("\n--- APAGAR CONTA ---");

            numeroConta = prompt(
                "Digite o numero da conta que deseja apagar:"
            )!;

            if (contas.apagarConta(numeroConta)) {
                console.log("Conta apagada !");
            } else {
                console.log("Conta nao encontrada.");
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

