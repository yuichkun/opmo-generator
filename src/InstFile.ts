import { IInst } from  "./interfaces";
import { OpmoFile } from "./interfaces";

export class InstFile implements OpmoFile {
    public name:string;
    public content:string;
    constructor(inst:IInst){
        this.name = inst.name;
        this.content = "test";
        console.log(inst.content);
    }
}