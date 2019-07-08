var WordsArray = ["Maddona","Jhon","Rocky","Wapper","James","Oswal","Sheggi","Horton","Emanual"];
    var wins = document.getElementById("wins");
    var word= document.getElementById("Word");
    var guess= document.getElementById("NumberofGuesses");
    var guessleft = document.getElementById("guessleft");
    var guessletter = document.getElementById("guessedLetters");
    var div;
    var wincnt=0;
    var loscnt=0;
    var gsleft= WordsArray.length;
    let temparray=[];
    var wordguess;
    var tempword;
    wins.innerText =wincnt;
    word.innerText =" ";
    guessleft.innerHTML=gsleft;
    
   
    wordguess = WordsArray[Math.floor(Math.random() * WordsArray.length)];
      

   /* function guessleft(){

    }*/
    
   
          
   // console.log("guess letter randomly"+letterguess);
  // var wordGenerate = WordGenerator();
   console.log("guess letter randomly :"+wordguess);
    
    document.onkeyup = function(event) {
           var userguess = event.key;

           for(var i=0;i<=wordguess.length;i++)
           {
               debugger;
              temparray[i] = wordguess.charAt(i);
              
              word.append("__"+" ");
              
           } 
         
         
         
          var j=0;
          while(userguess!==temparray[j])
            {
                j++;
                


            }
     
     
      
             
           
           
          
           if(letterguess==userguess){
              wincnt++;
              wins.innerText=wincnt;
             letterguess = guessletter();
             // guess.append(userguess+",");
              // var letterguess=letters.indexOf[Math.floor(Math.random() * letters.length)];
               //console.log(letterguess); 
           }
           else{
                 
                 gsleft--;
                 guess.append(userguess+",");
                 guessleft.innerText=gsleft; 
                  if(gsleft<=0)
                  {
                    loscnt++;
                    losses.innerText=loscnt;
                    gsleft= letters.length;
                  }
           }
          }
    

    



