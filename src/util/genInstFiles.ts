import { isValidInst } from '../validator';
import { InstFile } from '../InstFile';

export function genInstFiles(score: IScore): OpmoFile[]{
    const instFiles:OpmoFile[] = [];
    const { time } = score;
    score.insts.forEach((inst)=>{
        if(isValidInst(inst, time)){
            instFiles.push(new InstFile(inst, time));
        }
    }); 
    return instFiles;
}