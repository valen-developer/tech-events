import { DomainDate } from "../../src/features/Shared/domain/valueObjects/DomainDate";
import { TechEventMother } from "../../test/helpers/TechEventMother";

const mockedNextEvents = new Array(30).fill(0).map((_, i) => {
  return TechEventMother.create({
    title: "A title " + i,
    shortDescription: "A short description " + i,
    location: "A location" + i,
    description: "A description " + i,
    date: {
      initDate: new DomainDate(new Date("2022/11/02")),
      endDate: new DomainDate(new Date("2022/11/03")),
    },
  });
});

export const mockedEvents = [...mockedNextEvents];
