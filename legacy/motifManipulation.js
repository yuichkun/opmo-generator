function evalArgs(args){
  var ret = [];
  args.forEach((arg)=>{
    if(arg.match('this')){
      ret.push(eval(arg));
    }
    else {
      ret.push(arg);
    }
  });
  return ret;
}

module.exports = {
  genVelocity: function (dynamic){
    if(dynamic == undefined){
      return 'nil';
    }　else {
      var dynamics = dynamic.split("-");
      if(dynamics.length > 1){
        return `(gen-dynamic (list (length (length-rest-remove (flatten length)))) \'(${dynamics[0]}) \'${dynamics[1]})`;
      }
    }
    return `\'(${dynamic})`;
  },
  evalMotif: function (snippet, _this){
    var ret = "";

    //Direct return
    if(snippet.hasOwnProperty('return')){
      return snippet.return;
    }
    //Evaluate and return
    else if(snippet.hasOwnProperty('returnEvaled')){
      if(snippet.hasOwnProperty('args')){
        var args = evalArgs.call(_this, snippet.args);
        var func = snippet.returnEvaled + '(' + args + ')';
        ret += eval(func);
      } else {
        if(snippet.listed){
          ret += "\'(";
        }
        ret += eval(snippet.returnEvaled);
        if(snippet.listed){
          ret += ")";
        }
      }
    }

    //Calls a globally predefined opmo function
    else if (snippet.hasOwnProperty('func')){
      ret += `(${snippet.func} `;

      var args = [];
      args = evalArgs.call(_this, snippet.args);

      args.forEach((arg)=>{
        if(arg != undefined){
          ret += `${arg} `;
        }
      });

      ret += `)`;
    }
    return ret;

  }
};
