const no_clean_display = false;

export default class CalculatorModel {
  #value: string;
  #accumulator: number;
  #cleanDisplay: boolean;
  #actionCalc: string;
  constructor(
    value: string = null,
    accumulator: number = null,
    actionCalc: string = null,
    cleanDisplay: false
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#cleanDisplay = cleanDisplay;
    this.#actionCalc = actionCalc;
  }

  get value() {
    return this.#value?.replace(".", "," || "0");
  }

  numbertyped(newValue: string) {
    return new CalculatorModel(
      this.#cleanDisplay || !this.#value ? newValue : this.#value + newValue,
      this.#accumulator,
      this.#actionCalc,
      no_clean_display
    );
  }

  dotNotationTyped(newValue: string) {
    return new CalculatorModel(
      this.#value?.includes(".") ? this.#value : this.#value + ".",
      this.#accumulator,
      this.#actionCalc,
      no_clean_display
    );
  }
}
