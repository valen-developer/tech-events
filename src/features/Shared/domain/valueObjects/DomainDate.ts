import { NotNullValueObject } from "./NotNull.valueObject";

export class DomainDate extends NotNullValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }

  public toYYMMDD(): string {
    const numberYear = this.value.getFullYear();
    const numberMonth = this.value.getMonth() + 1;
    const numberDay = this.value.getDate();

    const stringYear = numberYear.toString();
    const stringMonth =
      numberMonth < 10 ? `0${numberMonth}` : numberMonth.toString();
    const stringDay = numberDay < 10 ? `0${numberDay}` : numberDay.toString();

    return `${stringYear}/${stringMonth}/${stringDay}`;
  }
}
