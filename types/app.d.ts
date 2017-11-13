interface IConfig {
    csvPath: string;
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