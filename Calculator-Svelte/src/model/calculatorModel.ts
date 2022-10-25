const nao_limpar_tela = false;

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
    return this.#valor?.replace(".", ",") || "0";
  }

  numeroDigitado(novoValor: string) {
    return new CalculatorModel(
      this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      nao_limpar_tela
    );
  }
}
