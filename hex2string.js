module.exports = function(hexArr) {
  var str = 0;
  str = str.toString().substr(0, 0);
  
  for(var key in hexArr){
    var chain = hexArr[key].toString(16);
    for(var i = 0; i < chain.length; i += 2){
      str += String.fromCharCode(parseInt(chain.substr(i, 2), 16));
    }
  }

  return str; 
};