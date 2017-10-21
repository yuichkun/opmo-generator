import { IScore, OpmoFile } from './interfaces';
import { SHOWMIDI, SHOWMUSICXML, genLoader, genCompiler } from './constants';

export class MainFile implements OpmoFile {
    public name: string = "main";
    public content: string;
    constructor(score: IScore){
        const fileNames = this.getFileNames(score); 
        this.content = this.genContent([
            genLoader(fileNames), 
            genCompiler(fileNames),
            SHOWMIDI,
            SHOWMUSICXML
        ]);
    }
    private genContent(snippets: string[]): string{
        return snippets.reduce(
            (accum, snippet) => {
                return accum.concat(snippet);
            }, ""
        );
    }
    private getFileNames(score: IScore){
        const { insts } = score;
        const fileNames: string = insts.reduce(
            (accum, inst) => {
                return accum + inst.name + " ";
            }, ""
        );
        return fileNames;
    }
}