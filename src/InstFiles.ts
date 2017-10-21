import { IInst } from  "./interfaces";
import { OpmoFile } from "./interfaces";

export class InstFiles implements OpmoFile {
    public content:string;
    public path:string;
    constructor(insts:IInst[]){
    }
}