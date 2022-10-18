import { DomainDate } from "../../../Shared/domain/valueObjects/DomainDate";
import { NotNullValueObject } from "../../../Shared/domain/valueObjects/NotNull.valueObject";

export interface TechEventDateDto {
  initDate: DomainDate;
  endDate: DomainDate;
}

export class TechEventDates extends NotNullValueObject<TechEventDateDto> {
  constructor(dto: TechEventDateDto) {
    super(dto);
  }

  public initDate(): DomainDate {
    return this.value.initDate;
  }

  public endDate(): DomainDate {
    return this.value.endDate;
  }

  public intervalString(): string {
    return `${this.initDate().toDDMMYYYYHHMM()} · ${this.endDate().toDDMMYYYYHHMM()}`;
  }
}
