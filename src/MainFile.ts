import { SHOWMIDI, SHOWMUSICXML, genLoader, genCompiler } from './constants';

export class MainFile implements OpmoFile {
    public name: string = "main";
    public content: string;
    constructor(score: IScore){
        const instNames = this.extractNames(score);
        const fileNames = instNames.string;
        const symbolNames = instNames.symbol;
        this.content = this.genContent([
            genLoader(fileNames), 
            genCompiler(symbolNames),
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
    private extractNames(score: IScore){
        const { insts } = score;
        return {
            string:(
                ()=>{
                    return insts.reduce(
                        (accum, inst)=>{
                            return `${accum} "${inst.name}"`;
                        }, ""
                    )
                }
            )(),
            symbol:(
                ()=>{
                    return insts.reduce(
                        (accum, inst)=>{
                            return `${accum} ${inst.name}`
                        },""
                    );
                }
            )(),
        };
    }
}