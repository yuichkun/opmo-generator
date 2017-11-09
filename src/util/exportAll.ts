import * as fs from 'fs';
import { Logger } from "./Logger";

export const exportAll = (files: OpmoFile[]) => {
    return {
        to: (exportPath: string) => {
            files.forEach(
                (file) => {
                    const { content, name } = file;
                    const path = exportPath + "/" + name + ".opmo";
                    fs.writeFile(path, content, () => { });
                    Logger.showOpmo(content, name);
                }
            );
        }
    };
};