import { TechEventMother } from "../../test/helpers/TechEventMother";

const shortDescription = "A short description";

const mockedNextEvents = new Array(30).fill(0).map((_, i) => {
  return TechEventMother.nextEventCollection(1, {
    title: "A title " + i,
    shortDescription: shortDescription + i,
    location: "A location" + i,
    description: "A description " + i,
  });
});

const mockedPastEvents = new Array(30).fill(0).map((_, i) => {
  return TechEventMother.outdatedEventCollection(1, {
    title: "A outdated title " + i,
    shortDescription: `outdated ${shortDescription} ${i}`,
    location: "A outdated location" + i,
    description: "A outdated description " + i,
  });
});

export const mockedEvents = [
  ...mockedNextEvents.flat(),
  ...mockedPastEvents.flat(),
];
