import {NotNullValueObject} from "./NotNull.valueObject";


export class Uuid extends NotNullValueObject<string>{
    constructor(value: string) {
        super(value);

    }

}