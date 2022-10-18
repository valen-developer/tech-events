import { TechEvent } from "../TechEvent.model";

export abstract class TechEventRepository {
  public abstract findNextEvents(page: number): Promise<TechEvent[]>;
}
