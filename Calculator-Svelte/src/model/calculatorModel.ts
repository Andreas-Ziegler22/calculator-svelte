export default class CalculatorModel {
  #valor: string;
  #acumulador: number;
  #limparTela: boolean;
  #operacao: string;

  constructor(
    valor: string = null,
    acumulador: number = null,
    operacao: string = null,
    limparTela = false
  ) {
    this.#valor = valor;
    this.#acumulador = acumulador;
    this.#limparTela = limparTela;
    this.#operacao = operacao;
  }
  get valor() {
    return this.#valor.replace(".", ",") || "0";
  }
}
const calc = new CalculatorModel();
calc.valor;
