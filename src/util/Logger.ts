import * as util from 'util';
const black   = '\u001b[30m';
const red     = '\u001b[31m';
const green   = '\u001b[32m';
const yellow  = '\u001b[33m';
const blue    = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';
const reset   = '\u001b[0m';
const startEndCl = magenta;
const lineCl = green;
const fileNameCl = blue;

export const Logger = {
  line : function(){
    console.log(lineCl + "-------------------------------------------------------------" + reset);
  },
  start : function(){
    console.log(startEndCl + "STARTED: musicXMLConverter" + reset);
    console.time("TIME");
    this.line();
  },
  readCSV : function(csvPath:string, csv:any[]){
    log('READING', `CSV file from ${csvPath}`);
    console.log(util.inspect(csv, {colors: true, maxArrayLength: 4, showHidden: true, depth: 1}));
    this.line();
  },
  convertToJSON : function(obj:any){
    log('CONVERTING', "CSV file into JSON");
    console.log(util.inspect(obj, {colors: true, maxArrayLength: 4, showHidden: true, depth: 2}));
    this.line();
  },
  genSnippet : function(fileName:any){
    console.log('GENERATING: an opmo file for ' + fileNameCl + fileName + reset);
    this.line();
  },
  showOpmo : function(content:string, name:string){
    log('GENERATED: ', `${fileNameCl}${name}${reset}`);
    console.log(cyan + content + reset);
    this.line();
  },
  export : function(name:string, path:string){
    log("EXPORTED", fileNameCl + name + reset + " file to " + path);
    this.line();
  },
  exit : function(){
    console.log(startEndCl + "EXIT: musicXMLConverter" + reset);
    console.timeEnd("TIME")
    this.line();
  }
}

function log(systemType:string, content:string){
  console.log(`${magenta}${systemType} ${reset}${content}`);
}
