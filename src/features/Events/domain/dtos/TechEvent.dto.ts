import { TechEventDateDto } from "../valueObject/TechEventDates.valueObject";

export interface TechEventDto {
  uuid: string;
  title: string;
  shortDescription: string;
  description: string;
  date: TechEventDateDto;
  location: string;
}

export interface TechEventSeriariable {
  uuid: string;
  title: string;
  shortDescription: string;
  description: string;
  date: {
    initDate: string;
    endDate: string;
  };
  location: string;
}
