export default class Who {
    readonly name: string | string[];
    readonly dec: string;
    constructor(name: string | string[], dec: string);
    pattern(input: string): boolean;
}
