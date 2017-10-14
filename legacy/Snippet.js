var Opmo = require('./Opmo');
var Logger = require('./Logger');
var Motif = require('./Motif');
var math = require('mathjs');

class Snippet extends Opmo {
  constructor(data){
    super(data);
  }

  setTimeSignature(time){
    this.time = time;
  }

  generate(){
    var opmo = this.genBody() + this.genFooter();
    super.exportFile(opmo);
  }

  genBody(){
    var fileName = this.name;
    Logger.genSnippet(fileName);
    var body = "";
    var omnList = "";

    var actionPoint = this.createActionPoint();
    for(var i = 0; i < actionPoint.length; i++){
      var measureLength = actionPoint[i];
      if(measureLength > 0){
        var content = this.content[i].split("~");
        var timeSig = calcTime(i, this.time, measureLength);
        body += this.genMotif(content, timeSig, i);
        omnList += `omn${i} `;
      }
    }

    body += `(setf omn (assemble-seq '(${omnList})))\n`;
    return body;
  }



  createActionPoint(){
    var actionPoint = [];
    for(var i = 0; i < this.time.length; i++){
      var nextIndex = i + 1;

      if(nextIndex < this.time.length){
        while(true){

          if(this.content[nextIndex] == '=>'){
            nextIndex++;
          } else {
            break;
          }
        }
      }
      var value = nextIndex - i;
      if(this.content[i] == '=>'){
        value = 0;
      }
      actionPoint.push(value);
    }
    return actionPoint;
  }



  genMotif(content, timeSig, omnIndex){
    var pitchAndLength = content[0].split("-");
    var args = [];
    for(var i = 0; i < pitchAndLength.length; i++){
      if(i != 0){
        args.push(pitchAndLength[i]);
      }
    }
    var funcName = pitchAndLength[0];
    var velocity = content[1];
    var motif = new Motif(omnIndex, timeSig, funcName, args, velocity);
    return motif.generateOMN();
  }

  genFooter(){
    var name = this.name;
    var footer =
`(def-score ${name}
         (:key-signature 'atonal
          :time-signature t-sig
          :tempo 112)
(${name} :omn omn)
)`;
    return footer;
  }

}

function calcTime(i, time, measureLength){
  var sum = 0;

  // math.add(timeSig, math.fraction('1/3'));
  var offset = 0;
  while(true){
    var tempTimeSig = math.fraction(time[i + offset]);
    sum = math.add(sum, tempTimeSig);
    offset++;

    if(offset >= measureLength){
      break;
    };
  }

  var timeSig = String(sum.n) + '/' + String(sum.d);



  return timeSig;
}


module.exports = Snippet;
