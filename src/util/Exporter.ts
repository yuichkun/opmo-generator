import * as fs from 'fs';
import { Logger } from "./Logger";

export const Exporter = (rootPath: string, files: OpmoFile[]) => {
    files.forEach((file) => {
        const { content, name } = file;
        const path = rootPath + "/" + name + ".opmo";
        fs.writeFile(path, content, ()=>{});
        Logger.showOpmo(content, name);
    });
};