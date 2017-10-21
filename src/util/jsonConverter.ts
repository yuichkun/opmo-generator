import { Logger } from './Logger';
import { IScore } from '../interfaces';

export const convert = (csvPath:string, csv:any[]) => {
  Logger.readCSV(csvPath, csv);
  let score:IScore = <IScore>{};
  score.time = extractData(csv[0]);
  score.scale = extractData(csv[1]);
  const rowInsts = csv.slice(2, csv.length);
  score.insts = rowInsts.map( rowInst => {
    const name = rowInst[0];
    const content = rowInst.slice(1, rowInst.length)
    return {
      name,
      content
    };
  } );
  Logger.convertToJSON(score);
  return score;
}

function extractData(arr:string[]){
  return arr.slice(1, arr.length);
}