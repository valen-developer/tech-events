/**
 * [] Should instace ByUuidEventFinder with TechEventRepository
 * [] Should call ByUuidEventFinder.findEventByUuid with uuid
 * [] Should return event
 * [] Should throw error if event not found
 * [] Should return same event than repository
 * [] Should call to TechEventsRepository.findEventByUuid(uuid)
 *
 *
 */

import { anyString, instance, mock, when } from "ts-mockito";
import { ByUuidEventFinder } from "../../../src/features/Events/application/ByUuidEventFinder";
import { TechEventNotFound } from "../../../src/features/Events/domain/exception/TechEventNotFound.exception";
import { TechEventRepository } from "../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../../../src/features/Events/domain/TechEvent.model";
import { TechEventMother } from "../../helpers/TechEventMother";

const notExistEvent = TechEventMother.create();

describe("ByUuid event finder", () => {
  let techEventRepository: TechEventRepository;

  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    techEventRepository = TechEventRepository;
  });

  it("Should return event", async () => {
    const byUuidEventFinder = new ByUuidEventFinder(techEventRepository);
    const result = await byUuidEventFinder.findEventByUuid("existUuid");

    expect(result).toBeInstanceOf(TechEvent);
  });

  it("Should throw error if event not found", async () => {
    const byUuidEventFinder = new ByUuidEventFinder(techEventRepository);
    try {
      await byUuidEventFinder.findEventByUuid(notExistEvent.uuid.value);
    } catch (error) {
      expect(error).toBeInstanceOf(TechEventNotFound);
    }
  });

  it("Should return same event than repository", async () => {
    const byUuidEventFinder = new ByUuidEventFinder(techEventRepository);
    const expected = TechEventMother.create();
    const result = await byUuidEventFinder.findEventByUuid(expected.uuid.value);

    expect(result.uuid.value).toEqual(expected.uuid.value);
  });
});

const TestBed = () => {
  const mockerTechEventRepository = mock<TechEventRepository>();

  when(mockerTechEventRepository.findEventByUuid(anyString())).thenCall(
    (uuid: string) => {
      const hasEvent = uuid !== notExistEvent.uuid.value;
      if (!hasEvent) {
        throw new Error("some error");
      }

      return TechEventMother.create({ uuid });
    }
  );

  return {
    TechEventRepository: instance(mockerTechEventRepository),
  };
};
