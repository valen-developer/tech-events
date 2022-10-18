import { NotNullValueObject } from "./NotNull.valueObject";

export class DomainDate extends NotNullValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }

  public toDDMMYYYY(): string {
    return this.value.toLocaleDateString("es-ES");
  }
}
