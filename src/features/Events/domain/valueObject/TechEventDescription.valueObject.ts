import { NotNullValueObject } from "../../../Shared/domain/valueObjects/NotNull.valueObject";

export class TechEventDescription extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
