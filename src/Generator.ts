import { IScore, OpmoFile } from "./interfaces";
import { MainFile } from './MainFile';

export const Generator = (score: IScore): OpmoFile[] => {
    const mainFile = new MainFile(score);
    return [mainFile];    
};
