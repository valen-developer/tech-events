import { Paginated } from "../../../../core/types/Paginated.type";
import { TechEvent } from "../TechEvent.model";

export abstract class TechEventRepository {
  public abstract findNextEvents(
    page: number
  ): Promise<Paginated<TechEvent[], "events">>;
  public abstract findOutDatedEvents(
    page: number
  ): Promise<Paginated<TechEvent[], "events">>;
}
