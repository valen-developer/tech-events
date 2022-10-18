import { NegativePageNumberException } from "../exception/NegativePageNumber.exception";

export class PageNumber extends Number {
  constructor(value: number | string) {
    super(value);

    this.checkValue();
  }

  private checkValue() {
    const isNegative = this.valueOf() < 1;

    if (isNegative) {
      throw new NegativePageNumberException();
    }
  }
}
