var WordsArray = ["madon","jhon","rocky","waper","james","oswal","shegi","hortin","emnual"];
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
    let temparray3=[];
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
    debugger;
    console.log("guess letter randomly :"+wordguess);
  
   
/*
  
    for(var i=0; i<temparray1.length;i++)
    {
      for(var j=0; j<temparray1.length;j++)
      {
          if(temparray1[j]=== temparray1[i])
          {
            temparray3.push(i);
          }
      }
    }
     console.log(temparray3); 
*/
   }

   function resetpage()
   {
   
    
     

    for(var i=0;i<=wordguess.length-1;i++)
    {

         // debugger;
       document.getElementById("div"+i).remove();
        
     
    }
    wordguess = WordsArray[Math.floor(Math.random() * WordsArray.length)];
    setpage();

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
            //setpage();
            resetpage();
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
    

    



