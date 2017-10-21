import * as fs from 'fs';
import { Logger } from "./Logger";
import { OpmoFile } from "../interfaces";

export const Exporter = (path: string, files: OpmoFile[]) => {
    files.forEach((file) => {
        const { content, name } = file;
        fs.writeFile(path+"/"+name+".opmo", content, null);
        Logger.showOpmo(content, name);
    });
};