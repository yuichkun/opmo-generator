import { IConfig } from '../interfaces';

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