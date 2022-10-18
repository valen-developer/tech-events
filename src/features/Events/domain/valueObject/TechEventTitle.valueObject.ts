import { NotNullValueObject } from "../../../Shared/domain/valueObjects/NotNull.valueObject";

export class TechEventTitle extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
