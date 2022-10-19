import "reflect-metadata";
import { container } from "tsyringe";

import { LocalStorageTechEventRepository } from "./features/Events/infrastructure/LocalStorageTechEventRepository";

export class DepsRegister {
  public registryRepositories(): void {
    container.register("TechEventRepository", {
      useClass: LocalStorageTechEventRepository,
    });
  }
}
