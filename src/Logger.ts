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
  readCSV : function(csvPath:any,data:any[]){
    console.log('READING: CSV file from ' + csvPath + "\n");
    console.log(util.inspect(data, {maxArrayLength: 4, showHidden: true, depth: 1}));
    this.line();
  },
  convertToJSON : function(obj:any){
    console.log('CONVERTING: CSV file into JSON\n');
    console.log(util.inspect(obj, {colors: true, maxArrayLength: 4, showHidden: true, depth: 1}));
    this.line();
  },
  genSnippet : function(fileName:any){
    console.log('GENERATING: an opmo file for ' + fileNameCl + fileName + reset);
    this.line();
  },
  showOpmo : function(opmo:any,name:any){
    console.log("GENERATED: " + fileNameCl + name + reset + "\n");
    console.log(cyan + opmo + reset);
    this.line();
  },
  export : function(content:any,path:any){
    console.log("EXPORTED: " + "a " + fileNameCl + content + reset + " file to " + path);
    this.line();
  },
  exit : function(){
    console.log(startEndCl + "EXIT: musicXMLConverter" + reset);
    console.timeEnd("TIME")
    this.line();
  }
}
