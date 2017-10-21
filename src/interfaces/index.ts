export interface IConfig {
    csvPath: string;
    opmoUtilPath: string;
    outDir: string;
}
export interface IScore{
  time: string[];
  insts: IInst[];
}
export interface IInst {
  name: string;
  content: string[];
}
export interface OpmoFile {
    content: string;
    name: string;
}