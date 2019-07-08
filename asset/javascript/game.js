var WordsArray = ["Maddona","Jhon","Rocky","Wapper","James","Oswal","Sheggi","Horton","Emanual"];
    var wins = document.getElementById("wins");
    var word= document.getElementById("Word");
    var guess= document.getElementById("NumberofGuesses");
    var guessleft = document.getElementById("guessleft");
    var guessletter = document.getElementById("guessedLetters");
    var div=[];
    var wincnt=0;
    var loscnt=0;
    var gsleft= WordsArray.length;
    let temparray1=[];
    let temparray2=[];
    var wordguess;
    var tempword;
    wins.innerText =wincnt;
    word.innerText =" ";
    guessleft.innerHTML=gsleft;
    var temp3="";
   
    wordguess = WordsArray[Math.floor(Math.random() * WordsArray.length)];
      

   /* function guessleft(){

    }*/
    
   function setpage()
   {
    for(var i=0;i<=wordguess.length;i++)
    {
       // debugger;
       temparray1[i] = wordguess.charAt(i);
       
       div[i] = document.createElement("div"+i);
       div[i].innerText="__"+" ";
       word.append(div[i]);

     
    } 
   }

   function checkword()
   {
     
   }
 
   setpage();
   // console.log("guess letter randomly"+letterguess);
  // var wordGenerate = WordGenerator();
   console.log("guess letter randomly :"+wordguess);
  
   // setpage();
    document.onkeyup = function(event) {
           var userguess = event.key;

               
         debugger;               
           
          var j=0;
          while(userguess!==temparray1[j])
            {
                
                
                
                guessletter.append(userguess);
                j++;
                
                
            }
            div[j].innerText=userguess;
            temparray2[j]=userguess;

            temp3 = temp3+temparray2[j]; 

           // temparray2 = 


     
     
      
             
           
           
          
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
    

    



