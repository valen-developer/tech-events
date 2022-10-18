import { Exception } from "./Exception.interface";

export abstract class NotFoundException extends Exception {
  constructor(name: string, message: string) {
    super(name, message);
  }
}
