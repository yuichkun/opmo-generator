export interface IConfig {
    csvPath: string;
    opmoUtilPath: string;
    outDir: string;
}
export interface IInst {
  name: string;
  content: string[];
}
export interface IScore{
  time: string[];
  scale: string[];
  insts: IInst[];
}
export interface OpmoFile {
    content: string;
    name: string;
}