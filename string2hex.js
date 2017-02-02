module.exports = function(str) {
  const hexArr = [];

  for(let i = 0; i < str.length; i+=4){
    let cInt = '';
    for(var ci = 0; ci < 4; ci++){
      if(i+ci > str.length){
        cInt += '00';
      }
      else{
	    cInt += str.charCodeAt(i+ci).toString(16);
      }
    }
    hexArr.push(parseInt(cInt, 16));
  }

  return hexArr;
};