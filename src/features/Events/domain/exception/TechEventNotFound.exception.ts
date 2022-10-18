import { NotFoundException } from "../../../Shared/domain/exception/NotFound.exception";

export class TechEventNotFound extends NotFoundException {
  constructor() {
    super("TechEventNotFound", "Tech event not found");
  }
}
