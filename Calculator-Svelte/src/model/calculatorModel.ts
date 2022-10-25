const nao_limpar_tela = false;
const limpar_tela = true;

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

  pontoDigitado() {
    return new CalculatorModel(
      this.#valor?.includes(".") ? this.#valor : this.#valor + ".",
      this.#acumulador,
      this.#operacao,
      nao_limpar_tela
    );
  }
  clean() {
    return new CalculatorModel();
  }
  operacaoDigitada(proximaOperacao: string) {
    return this.calcular(proximaOperacao);
  }

  calcular(proximaOperacao: string = null) {
    const acumulador = !this.#operacao
      ? parseFloat(this.#valor)
      : eval(`${this.#acumulador} 
    ${this.#operacao} 
    ${this.#valor}`);
    const valor = !this.#operacao ? this.#valor : `${acumulador}`;

    return new CalculatorModel(
      valor,
      acumulador,
      proximaOperacao,
      proximaOperacao ? limpar_tela : nao_limpar_tela
    );
  }
}
