import { NotNullValueObject } from "../../../Shared/domain/valueObjects/NotNull.valueObject";

export class TechEventLocation extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
