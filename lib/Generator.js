var fs = require('fs');
var Logger = require('./Logger.js');
var GlobalFile = require('./GlobalFile.js');
var MainFile = require('./MainFile.js');
var Snippet = require('./Snippet.js');
const opmoPath = '../Opusmodus';

class Generator{
  constructor(data){
    Logger.start();
    this.data = data;
    this.insts = Object.keys(this.data.insts);
  }

  genGlobalFile(){
    var data = {};
    data.name = "global";
    data.content = this.data;
    var globalFile = new GlobalFile(data);
    globalFile.generate();
  }

  genSnippetFiles(){
    var props = this.data.insts;
    var keys = this.insts;
    for(var i = 0; i < keys.length; i++){
      var data = {};
      data.name = keys[i];
      data.content = props[keys[i]];
      var snippet = new Snippet(data);
      snippet.setTimeSignature(this.data.time);
      snippet.generate();
    }
  }

  genMainFile(){
    var data = {};
    data.name = "main";
    data.content = this.insts;
    var mainfile = new MainFile(data);
    mainfile.generate();
  }

  exit(){
    //EXIT
    Logger.exit();
  }
}

module.exports = Generator;
