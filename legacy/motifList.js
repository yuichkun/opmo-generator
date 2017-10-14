module.exports = {
  renda : {
    //num-pitch - & note-begin - note-end
    pitch : {
      func : 'gen-repeat',
      args: ['this.args[0]', 'this.args[1]']
    },
    length : {
      func: `stretch`,
      args: ['this.timeSig', 'pitch', 'this.args[2]', 'this.args[3]']
    },
    articulation:{
      return : '\'(stacc)'
    }
  },
  rendaRnd : {
    //num-pitch-lowBegin-highBegin-lowEnd-highEnd
    pitch : {
      func : 'gen-repeat',
      args: ['this.args[0]', 'this.args[1]']
    },
    length : {
      func: `rnd-rhythm`,
      args: ['this.timeSig', 'pitch', 'this.args[2]', 'this.args[3]','this.args[4]','this.args[5]']
    },
    articulation: {
      return : '\'(stacc)'
    }
  },
  rendaSkip: {
    //num-pitch-noteFreq-restFreq
    pitch :{
      func: 'gen-repeat',
      args: ['this.args[0]','this.args[1]']
    },
    length:{
      func: 'skip-notes',
      args:['this.timeSig', 'pitch', 'this.args[2]', 'this.args[3]']

    },
    articulation: {
      return: '\'(stacc)'
    }
  },
  line : {
    //num-low-high-&tilt
    pitch : {
      func: 'line',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]', 'this.args[3]']
    },
    length : {
      func: `stretch`,
      args: ['this.timeSig', 'pitch']
    }
  },
  lineEnd: {
    //num-low-high-tilt-restpos
    pitch: {
      func: 'line',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]', 'this.args[3]']
    },
    length: {
      func: `stretch`,
      args: ['this.timeSig', 'pitch', '0', 'this.args[4]']
    },
    swallow: true
  },
  lineEndN: {
    //num-low-high-tilt-restpos
    pitch: {
      func: 'line',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]', 'this.args[3]']
    },
    length: {
      func: `stretch`,
      args: ['this.timeSig', 'pitch', '0', 'this.args[4]']
    },
    swallow: false
  },
  linePos: {
    //num-low-high-tilt-notebegin-noteend
    pitch: {
      func: 'line',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]', 'this.args[3]']
    },
    length: {
      func: `stretch`,
      args: ['this.timeSig', 'pitch', 'this.args[4]', 'this.args[5]']
    },
    swallow: true
  },
  linePosN: {
    //num-low-high-tilt-notebegin-noteend
    pitch: {
      func: 'line',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]', 'this.args[3]']
    },
    length: {
      func: `stretch`,
      args: ['this.timeSig', 'pitch', 'this.args[4]', 'this.args[5]']
    },
    swallow: false
  },
  lineRnd: {
    //num-lowNote-highNote-lowNum-highNum
    pitch: {
      func: 'line-rnd',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]']
    },
    length: {
      func: `rnd-rhythm2`,
      args: ['this.timeSig', 'pitch', 'this.args[3]', 'this.args[4]']
    },
    swallow: true
  },
  random : {
    //lowNum-highNum-lowNote-highNote
    pitch: {
      // return : '(rnd-sample (random 10) (randomize-octaves \'(g3 c6) (tonality-map \'(minor-pentatonic) (integer-to-pitch (rnd-row)))))'
      func: 'rnd-pitch',
      args: ['this.args[0]', 'this.args[1]', 'this.args[2]','this.args[3]', 'this.tonality']
    },
    length: {
      func: `stretch`,
      args: ['this.timeSig', 'pitch']
    }
  }
};
