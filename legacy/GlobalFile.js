var Opmo = require('./Opmo');
var util = require('./util');

class GlobalFile extends Opmo {
  constructor(data){
    super(data);
  }
  generate(){
    var content = "";
    content += this.genTimeSignature();
    content += this.genUtility();
    content += this.genTonality();
    super.exportFile(content);
  }
  genTimeSignature(){
    var temp = "";
    for(var i = 0; i < this.content.time.length; i++){
      temp += this.content.time[i] + " ";
    }
    var timeSig = `(setf t-sig (get-time-signature (mclist \'(${temp}))))`;
    return timeSig;
  }
  genUtility(){
    return util;
  }
  genTonality(){
    var tonality ="";
// `
// (setf tonalities (pitch-expansion-series ${this.content.time.length} \'(1) \'(1) \'(c4 d4 e4 f4 g4)))
// `;
//
//     for(var i = 0; i < this.content.time.length; i++){
//       var name = 'tonality' + i;
//       tonality += `(create-tonality ${name} (list (nth ${i} tonalities)))\n`;
//     }

    // var insts = this.content.insts;
    // //loop through every measure
    // for(var i = 0; i < this.content.time.length; i++){
    //   // console.log("measure ", i);
    //   //loop through every instrument
    //   for(var j = 0; j < Object.keys(insts).length; j++){
    //     // console.log("inst ",j);
    //     var instName = Object.keys(insts)[j];
    //     var content = insts[instName][i];
    //     chord += this.handleContent(content);
    //   }
    // }
    return tonality;
  }
  // handleContent(content){
  //   var returnContent = "";
  //   if(content.match("chord")){
  //     var chordIndex = content.split("-")[1];
  //     var chordHasExisted = this.chords.hasOwnProperty(chordIndex);
  //     if( !chordHasExisted ){
  //       var chord = `(chordize (integer-to-pitch (rnd-sample 3 (rnd-row))))`;
  //       returnContent = `(setf chord${chordIndex} ${chord})\n`;
  //       this.chords[chordIndex] = chord;
  //     }
  //   }
  //   return returnContent;
  // }
}

module.exports = GlobalFile;
