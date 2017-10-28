import { Logger } from './Logger';

export const convert = (csvPath:string, csv:any[]) => {
  Logger.readCSV(csvPath, csv);
  let score:IScore = <IScore>{};
  score.time = extractData(csv[0]);
  const rowInsts = csv.slice(1, csv.length);
  score.insts = rowInsts.map( rowInst => {
    const name = rowInst[0];
    const actions = rowInst.slice(1, rowInst.length)
    return {
      name,
      actions
    };
  } );
  Logger.convertToJSON(score);
  return score;
}

function extractData(arr:string[]){
  return arr.slice(1, arr.length);
}