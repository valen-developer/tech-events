import "reflect-metadata";

/**
 * [v] Should instance OutDatedEventsFinder with TechEventRepository
 * [v] Should call OutDatedEventsFinder.findOutDatedEvents with page 1
 * [v] Should return OutDatedEventsFinder.findOutDatedEvents result type: { events: TechEvent[], pages: number }
 * [v] Should throw error if OutDatedEventsFinder.findOutDatedEvents is called with page < 1
 * [v] Should return same events than repository
 */

import { instance, mock, when } from "ts-mockito";
import { OutDatedEventsFinder } from "../../../../src/features/Events/application/OutDatedEventsFinder";
import { TechEventRepository } from "../../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { NegativePageNumberException } from "../../../../src/features/Shared/domain/exception/NegativePageNumber.exception";
import { TechEventMother } from "../../../helpers/TechEventMother";

const events = TechEventMother.collection(3);

describe("outdated events finder", () => {
  let techEventRepository: TechEventRepository;

  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    techEventRepository = TechEventRepository;
  });

  const buildOutdatedEventsFinder = () =>
    new OutDatedEventsFinder(techEventRepository);

  it("Should call find outdated events with page 1", () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    outdatedEventsFinder.findOutDatedEvents({ page: 1 });
  });

  it("Should return events paginated", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    const result = await outdatedEventsFinder.findOutDatedEvents({ page: 1 });

    expect(result.events).toBeInstanceOf(Array);
    expect(result.pages).not.toBeNaN();
  });

  it("Should throw error if page is less than 1", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    try {
      await outdatedEventsFinder.findOutDatedEvents({ page: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(NegativePageNumberException);
    }
  });

  it("Should return same events than repository", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    const result = await outdatedEventsFinder.findOutDatedEvents({ page: 1 });

    expect(result.events).toEqual(events);
  });
});

const TestBed = () => {
  const mockerTechEventRepository = mock<TechEventRepository>();
  when(mockerTechEventRepository.findOutDatedEvents(1)).thenResolve({
    events,
    pages: 1,
  });

  const TechEventRepository = instance(mockerTechEventRepository);

  return {
    TechEventRepository,
  };
};
