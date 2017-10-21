import { IConfig, IInst } from '../interfaces';

enum PrimitiveType{
    String = "string",
    Number = "number",
    Boolean = "boolean"
}

export function isValidConfig(obj:any): obj is IConfig{
    const hasValidCSVPath = typeof obj.csvPath === PrimitiveType.String;
    if(!hasValidCSVPath){
        throw new Error("Config must have a path of type STRING to the CSV file");
    }
    const hasValidOutDir = typeof obj.outDir === PrimitiveType.String;
    if(!hasValidOutDir){
        throw new Error("Config must have a path of type STRING to the output directory")
    }
    const validated = hasValidCSVPath && hasValidOutDir;
    return validated;
} 

export function isValidInst(inst: IInst, time: string[]): boolean{
    const { name, content } = inst;
    if(!name){
        throw new Error(`Instrument name is invalid in ${name}`);
    }
    if(!content || content.length === 0){
        throw new Error(`Content of ${name} does not have anything. ${content}`)
    }
    if(content.length !== time.length){
        throw new RangeError(`Length of ${name}(${content.length}) does not match the length of music(${time.length})`);
    }
    return true;
}