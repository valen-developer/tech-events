import { NotNullValueObject } from "./NotNull.valueObject";

export class DomainDate extends NotNullValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }

  public toDDMMYYYY(): string {
    return this.value.toLocaleDateString("es-ES");
  }

  public toHHMM(): string {
    const hours = this.value.getHours();
    const minutes = this.value.getMinutes();

    const fixedHours = hours < 10 ? `0${hours}` : hours;
    const fixedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${fixedHours}:${fixedMinutes}`;
  }

  public toDDMMYYYYHHMM(): string {
    return `${this.toDDMMYYYY()} ${this.toHHMM()}`;
  }
}
