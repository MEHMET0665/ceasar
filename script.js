
const alp=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']




function caesarCipler(word,num){
var key=[]
for(i in word){

 if ((alp.indexOf(word.toLowerCase()[i])+num)<0){
   key.push(alp[alp.indexOf(word.toLowerCase()[i])+num+26])
  //console.log(alp.indexOf(word.toLowerCase()[i])+num+26)

 }else if  ((alp.indexOf(word.toLowerCase[i])+num)>26){
   key.push(alp[alp.indexOf(word.toLowerCase()[i])+num-26])
   //console.log(alp.indexOf(word[i])+num-26)

 }else {key.push(alp[alp.indexOf(word.toLowerCase()[i])+num])
 }
}return key.join('');
}
console.log(caesarCipler(('EAT'),-3))

  
  

  





//DECRIPTION
  function deCripto (data, num) {
  
    
  }
