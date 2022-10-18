import { TechEventDateDto } from "../valueObject/TechEventDates.valueObject";

export interface TechEventDto {
  uuid: string;
  title: string;
  shortDescription: string;
  date: TechEventDateDto;
  location: string;
}
