import { NotNullValueObject } from "../../../Shared/domain/valueObjects/NotNull.valueObject";

export class TechEventShortDescription extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
