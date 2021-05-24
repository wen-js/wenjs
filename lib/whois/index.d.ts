interface Qunyou {
    name: string | string[];
    desc: string;
}
export declare function getQuyouData(): Promise<Qunyou[]>;
declare const _default: (who?: string) => Promise<string>;
export default _default;
