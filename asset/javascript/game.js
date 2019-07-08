var WordsArray = ["maddona","jhon","rocky","wapper","james","oswal","sheggi","horton","emanual"];
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
    var updatediv
    wins.innerText =wincnt;
    word.innerText =" ";
    guessleft.innerHTML=gsleft;
    var temp3="";
   
    wordguess = WordsArray[Math.floor(Math.random() * WordsArray.length)];
      

   /* function guessleft(){

    }*/
    
   function setpage()
   {
    for(var i=0;i<=wordguess.length-1;i++)
    {
       // debugger;
       temparray1[i] = wordguess.charAt(i);
       
       div[i] = document.createElement("div");
       div[i].innerText="__"+" ";
       div[i].setAttribute("id","div"+i);
       word.appendChild(div[i]);

     
    } 
   }
   function resetpage()
   {
    wordguess = WordsArray[Math.floor(Math.random() * WordsArray.length)];

    for(var i=0;i<=wordguess.length-1;i++)
    {
       // debugger;
       temparray1[i] = wordguess.charAt(i);
       
       div[i] = document.getElementById("div"+[i]);
       div[i].innerText="__"+" ";
      // div[i].setAttribute("id","div"+i);
       word.appendChild(div[i]);

     
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
         
         temparray1.forEach (function(element){
           if(element==userguess)
           {
             var index=temparray1.indexOf(element);
             console.log(index);
             var tempdiv="div"+index;
             console.log(tempdiv);
              updatediv = document.getElementById(tempdiv);


             console.log(updatediv);
             updatediv.innerText=userguess;
             temparray2[index] = userguess;
             temp3 =true;
             //div.innerText=userguess;
             //wincnt++;
             // wins.innerText=wincnt;
             //letterguess = guessletter();
           }
          
         });
         if(temp3)
         {
          gsleft--;
          guessleft.innerText=gsleft;
          var tempar2 = temparray2.join("");
          if(tempar2==wordguess)
          {
            setpage();
          }
          

         }
         else{
         if(gsleft==0)
         {
           gsleft=WordsArray.length;
           guessleft.innerText=gsleft;  
         }
        else{         
         gsleft--;
         guessleft.innerText=gsleft; 
         guessletter.append(userguess+",");
         
        }
           
      }
         


     
     
      
             
           
           
          
    
          }
    

    



