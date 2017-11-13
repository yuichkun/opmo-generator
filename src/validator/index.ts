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
    const { name, actions } = inst;
    if(!name){
        throw new Error(`Instrument name is invalid in ${name}`);
    }
    if(!actions || actions.length === 0){
        throw new Error(`Content of ${name} does not have anything. ${actions}`)
    }
    if(actions.length !== time.length){
        throw new RangeError(`Length of ${name}(${actions.length}) does not match the length of music(${time.length})`);
    }
    return true;
}

export function notUndefined(data:any):boolean{
    if (data === undefined) {
        console.log("could not read csv");
        return false;
    }
    return true;
}