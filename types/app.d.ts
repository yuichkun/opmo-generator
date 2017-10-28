interface IConfig {
    csvPath: string;
    opmoUtilPath: string;
    outDir: string;
}
interface IScore{
  time: string[];
  insts: IInst[];
}
interface IInst {
  name: string;
  actions: string[];
}
interface OpmoFile {
    content: string;
    name: string;
}