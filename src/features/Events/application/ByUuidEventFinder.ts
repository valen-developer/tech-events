import { TechEventNotFound } from "../domain/exception/TechEventNotFound.exception";
import { TechEventRepository } from "../domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../domain/TechEvent.model";

export class ByUuidEventFinder {
  constructor(private eventRepository: TechEventRepository) {}

  public async findEventByUuid(uuid: string): Promise<TechEvent> {
    try {
      return this.eventRepository.findEventByUuid(uuid);
    } catch (error) {
      throw new TechEventNotFound();
    }
  }
}
