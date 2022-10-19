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
  public static fromSeriariable(seriariable: {
    initDate: string;
    endDate: string;
  }): TechEventDates {
    return new TechEventDates({
      initDate: new DomainDate(new Date(seriariable.initDate)),
      endDate: new DomainDate(new Date(seriariable.endDate)),
    });
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

  public toJson() {
    return {
      initDate: this.initDate(),
      endDate: this.endDate(),
    };
  }

  public toSeriarizable(): { initDate: string; endDate: string } {
    return {
      initDate: this.initDate().value.toISOString(),
      endDate: this.endDate().value.toISOString(),
    };
  }
}
