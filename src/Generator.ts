import { MainFile } from './MainFile';
import { genInstFiles } from './util';

export const Generator = (score: IScore): OpmoFile[] => {
    const mainFile:OpmoFile = new MainFile(score);
    const instFiles:OpmoFile[] = genInstFiles(score);
    return Array(mainFile).concat(instFiles);
};
