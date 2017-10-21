import { IScore, OpmoFile } from '../interfaces';
import { isValidInst } from '../validator';
import { InstFile } from '../InstFile';

export function genInstFiles(score: IScore): OpmoFile[]{
    const instFiles:OpmoFile[] = [];
    score.insts.forEach((inst)=>{
        if(isValidInst(inst, score.time)){
            instFiles.push(new InstFile(inst));
        }
    }); 
    return instFiles;
}