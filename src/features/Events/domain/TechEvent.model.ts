import { DomainDate } from "../../Shared/domain/valueObjects/DomainDate";
import { Uuid } from "../../Shared/domain/valueObjects/Uuid.valueObject";
import { TechEventDto } from "./dtos/TechEvent.dto";
import { TechEventDates } from "./valueObject/TechEventDates.valueObject";
import { TechEventDescription } from "./valueObject/TechEventDescription.valueObject";
import { TechEventLocation } from "./valueObject/TechEventLocation.valueObject";
import { TechEventShortDescription } from "./valueObject/TechEventShortDescription.valueObject";
import { TechEventTitle } from "./valueObject/TechEventTitle.valueObject";

export class TechEvent {
  public readonly uuid: Uuid;
  public readonly title: TechEventTitle;
  public readonly shortDescription: TechEventShortDescription;
  public readonly description: TechEventDescription;
  public readonly location: TechEventLocation;
  public readonly dates: TechEventDates;

  constructor(dto: TechEventDto) {
    this.uuid = new Uuid(dto.uuid);
    this.title = new TechEventTitle(dto.title);
    this.shortDescription = new TechEventShortDescription(dto.shortDescription);
    this.description = new TechEventDescription(dto.description);
    this.dates = new TechEventDates(dto.date);
    this.location = new TechEventLocation(dto.location);
  }

  public getInitDate(): DomainDate {
    return this.dates.initDate();
  }
}
