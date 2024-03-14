    //////////////////////////////////////////////////Fixed End Moment for span AB////////////////////////////////////////////////////

    function FixedmomentBC() {
      const w1 = document.getElementById("w1").value;
    
      // Check if input1 is 4 and input2 is 1
      if (w1 == 4 ) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("button1").style.visibility="hidden";
          document.getElementById("wrong1a").style.visibility="hidden";
        }, 1);
        setTimeout(function() {
          document.getElementById("mfbc").innerHTML = "12 kNm";
        }, 600);
        setTimeout(function() {
          document.getElementById("text4").style.visibility="visible";
          document.getElementById("text5").style.visibility="visible";
          document.getElementById("text6").style.visibility="visible";
          document.getElementById("L1").style.visibility="visible";
          document.getElementById("box2").style.visibility="visible";
          document.getElementById("button2").style.visibility="visible";
        
    
        }, 1200);
        
        
        document.getElementById("mfbc").style.display = "block"; 
        document.getElementById("text4").style.display = "block"; 
        document.getElementById("text5").style.display = "block"; 
        document.getElementById("text6").style.display = "block"; 
        document.getElementById("L1").style.display = "block"; 
        document.getElementById("box2").style.display = "block"; 
        document.getElementById("wrongbox1").style.display = "block"; 
        document.getElementById("button1").style.display = "block"; 
        document.getElementById("button2").style.display = "block";
        }
    
        if (w1 == "" ) { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("wrong1a").textContent = "Please Fill the Required Fields.";
    
            
          }, 1000);
          document.getElementById("wrong1a").style.display = "block";
    
      } else {
        // Display an error message
        setTimeout(function() {
       document.getElementById("wrong1a").innerHTML = "Wrong Input, Value for Load W = 4 kN/m";
      }, 1000);
       document.getElementById("wrong1a").style.display = "block";
      }
      }
 

//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function FixedmomentCB() {
  const L1 = document.getElementById("L1").value;
  // Check if input1 is 4 and input2 is 1
  if (L1 == 36) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button2").style.visibility="hidden";
   
      document.getElementById("wrong1b").style.visibility="hidden";
    }, 1);

    setTimeout(function() {
      document.getElementById("mfba").textContent = " -12 kNm" ;
    }, 600);
    setTimeout(function() {
      document.getElementById("nextButton1").style.visibility="visible";
      document.getElementById("addspecimen3").style.visibility="visible";
      document.getElementById("text7").style.visibility="visible";
      document.getElementById("text8").style.visibility="visible";
      document.getElementById("text9").style.visibility="visible";
      document.getElementById("L2a").style.visibility="visible";
      document.getElementById("box3").style.visibility="visible";
      document.getElementById("button3").style.visibility="visible";

    }, 1200);
    document.getElementById("mfba").style.display = "block"; 
    document.getElementById("addspecimen3").style.display = "block"; 
    document.getElementById("text7").style.visibility="block";
    document.getElementById("text8").style.visibility="block";
    document.getElementById("text9").style.visibility="block";
    document.getElementById("L2a").style.visibility="block";
    document.getElementById("box3").style.visibility="block";
    document.getElementById("button3").style.visibility="block";
    document.getElementById("nextButton1").style.visibility="block";

    }

    if (w1 == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1b").textContent = "Please Fill the Required Fields.";        
      }, 1000);
      document.getElementById("wrong1b").style.display = "block";

  } else  {


  setTimeout(function() {
    // Display an error message
   document.getElementById("wrong1b").innerHTML = "Wrong Input. The value of L<sup>2</sup> = 36 ";
  }, 1000);
   document.getElementById("wrong1b").style.display = "block";
  }
  }

    

//////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////Slope Deflection Equation////////////////////////////////////////////////////
function Mab() {
  const Mfab = document.getElementById("Mfab").value;
  const ColumnL = document.getElementById("ColumnL").value;

  // Check if input1 is 4 and input2 is 1
  if (Mfab == 0 && ColumnL == 4) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button3").style.visibility="hidden";
      document.getElementById("wrong2a").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("outputMab").innerHTML = "M<sub>AB</sub> = 2EIΘ<sub>B</sub>";
      document.getElementById("eq1").style.visibility="visible";

    }, 500);
    setTimeout(function() {
      document.getElementById("text16").style.visibility="visible";
      document.getElementById("text17").style.visibility="visible";
      document.getElementById("text17b").style.visibility="visible";
      document.getElementById("box6").style.visibility="visible";
      document.getElementById("output1b2").innerHTML = "M<sub>BA</sub> = 4EIΘ<sub>B</sub>" ;
      document.getElementById("eq2").style.visibility="visible";

    }, 800);
    setTimeout(function() {
      document.getElementById("output1c2").innerHTML = "M<sub>CD</sub> = 4EIΘ<sub>C</sub>";
      document.getElementById("eq3").style.visibility="visible";
      document.getElementById("box7").style.visibility="visible";
      document.getElementById("text18").style.visibility="visible";
      document.getElementById("text18b").style.visibility="visible";

    }, 1100);
    setTimeout(function() {
      document.getElementById("output1d2").innerHTML = "M<sub>DC</sub> = 2EIΘ<sub>C</sub>" ;
      document.getElementById("eq4").style.visibility="visible";
      document.getElementById("text19").style.visibility="visible";
      document.getElementById("box8").style.visibility="visible";
      document.getElementById("text19b").style.visibility="visible";

    }, 1400);
    setTimeout(function() {
      document.getElementById("nextButton2").style.visibility="visible";


    }, 1500);
    
    document.getElementById("outputMab").style.display = "block"; 
    document.getElementById("output1b2").style.display = "block"; 
    document.getElementById("output1c2").style.display = "block"; 
    document.getElementById("output1d2").style.display = "block"; 
    document.getElementById("nextButton2").style.display = "block"; 
    document.getElementById("button3").style.display = "block"; 
    document.getElementById("text16").style.display = "block"; 
    document.getElementById("text17").style.display = "block"; 
    document.getElementById("text17b").style.display = "block"; 
    document.getElementById("text18").style.display = "block"; 
    document.getElementById("text18b").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 
    document.getElementById("text19b").style.display = "block"; 
    document.getElementById("box6").style.display = "block"; 
    document.getElementById("box7").style.display = "block"; 
    document.getElementById("box8").style.display = "block"; 
    document.getElementById("eq1").style.display = "block"; 
    document.getElementById("eq2").style.display = "block"; 
    document.getElementById("eq3").style.display = "block"; 
    document.getElementById("eq4").style.display = "block"; 



    }

    if (Mfab == "" && ColumnL == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong2a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong2a").style.display = "block";

  } else {
    // Display an error message
   document.getElementById("wrong2a").innerHTML = "Wrong Input. The value of M<sup>F</sup><sub>AB</sub>= 0, L= 4";
  
   document.getElementById("wrong2a").style.display = "block";
  }
  }

//////////////////////////////////////////////////Mbc for beam BC////////////////////////////////////////////////////
function Mbc() {
  const Mfbc = document.getElementById("Mfbc").value;
  const BeamL = document.getElementById("BeamL").value;

  // Check if input1 is 4 and input2 is 1
  if (Mfbc == 12 && BeamL == 6) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button4").style.visibility="hidden";
      document.getElementById("wrong2b").style.visibility="hidden";

    }, 1);
      setTimeout(function() {
      document.getElementById("outputMbc").innerHTML = "M<sub>BC</sub> = 12 + EIΘ<sub>B</sub> + 0.5 EIΘ<sub>C</sub>";
      document.getElementById("text20").style.visibility="visible";
      document.getElementById("eq5").style.visibility="visible";

    }, 500);
    setTimeout(function() {
      document.getElementById("text20").style.visibility="visible";
      document.getElementById("text20a").style.visibility="visible";
      document.getElementById("outputMcb").innerHTML = "M<sub>CB</sub> = -12 + 0.5EIΘ<sub>B</sub> + EIΘ<sub>C</sub>" ;
      document.getElementById("eq6").style.visibility="visible";

    }, 800);


    setTimeout(function() {
      document.getElementById("text21").style.visibility="visible";
      document.getElementById("text22").style.visibility="visible";
      document.getElementById("text23").style.visibility="visible";
      document.getElementById("text24").style.visibility="visible";
      document.getElementById("text25").style.visibility="visible";
      document.getElementById("text26").style.visibility="visible";
      document.getElementById("text27").style.visibility="visible";
      document.getElementById("box9").style.visibility="visible";
      document.getElementById("box11").style.visibility="visible";
      document.getElementById("nextButton3").style.visibility="visible";
      document.getElementById("addspecimen2d").style.visibility="visible";


    }, 1500);
    
    document.getElementById("outputMbc").style.display = "block"; 
    document.getElementById("outputMcb").style.display = "block"; 
    document.getElementById("nextButton3").style.display = "block"; 
    document.getElementById("text20").style.display = "block"; 
    document.getElementById("text20a").style.display = "block"; 
    document.getElementById("box9").style.display = "block"; 
    document.getElementById("box11").style.display = "block"; 
    document.getElementById("button4").style.display = "block"; 
    document.getElementById("addspecimen2d").style.display = "block"; 
    document.getElementById("wrong2b").style.display = "block"; 
    document.getElementById("eq5").style.display = "block"; 
    document.getElementById("eq6").style.display = "block"; 



    }

    if (Mfbc == "" && BeamL == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong2b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong2b").style.display = "block";

  } else {
    // Display an error message
   document.getElementById("wrong2b").innerHTML = "Wrong Input. The value of M<sup>F</sup><sub>BC</sub>= 12, L= 6";
  
   document.getElementById("wrong2b").style.display = "block";
  }
  }
///////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////


//////////////////////////////////////////////////CALCULATION OF FINAL MOMENTS////////////////////////////////////////////////////

function MomentAB() {
  const EIQb1 = document.getElementById("EIQb1").value;


  // Check if input1 is 3 and input2 is 2
  if ( EIQb1 == -2.667  ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button5").style.visibility="hidden";
      document.getElementById("wrong3a").style.visibility="hidden";
    }, 1);
      setTimeout(function() {
      document.getElementById("outputMab2").innerHTML = "M<sub>AB</sub> = -5.334 kNm" ;

          }, 100);
          setTimeout(function() {
      document.getElementById("text28").style.visibility="visible";
      document.getElementById("text29").style.visibility="visible";
            document.getElementById("text29").style.visibility="visible";

      document.getElementById("outputMba2").innerHTML="M<sub>BA</sub> = -10.668 kNm";

    }, 800);
    setTimeout(function() {
      document.getElementById("text30").style.visibility="visible";
      document.getElementById("text31").style.visibility="visible";
      document.getElementById("b1").style.visibility="visible";
      document.getElementById("EIQc").style.visibility="visible";
      document.getElementById("outputMbc2").innerHTML="M<sub>BC</sub> = 10.668 kNm";
      document.getElementById("outputMcb2").innerHTML="M<sub>CB</sub> = -10.668 kNm";

    }, 1200);
    


    document.getElementById("outputMab2").style.display = "block";
    document.getElementById("wrong3a").style.display = "block";
    document.getElementById("text28").style.display = "block";
    document.getElementById("text29").style.display = "block";
    document.getElementById("outputMba2").style.display = "block";
    document.getElementById("text30").style.display = "block";
    document.getElementById("text31").style.display = "block";
    document.getElementById("b1").style.display = "block";
    document.getElementById("EIQc").style.display = "block";
    document.getElementById("outputMbc2").style.display = "block";
    document.getElementById("outputMcb2").style.display = "block";
    document.getElementById("button5").style.display = "block";

  }

  if (EIQb1 == "") { 
    setTimeout(function() {
      document.getElementById("wrong3a").textContent = "Please Fill the Required Fields.";

      
    }, 1000);
    document.getElementById("wrong3a").style.display = "block";
} 
else        {
  
  // Display an error message
 document.getElementById("wrong3a").innerHTML = "Wrong Input EIΘ<sub>B</sub> = -2.667"  ;

document.getElementById("wrong3a").style.display = "block";
}
}
///////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////CALCULATION OF FINAL MOMENTS////////////////////////////////////////////////////

function MomentCD() {
  const EIQc = document.getElementById("EIQc").value;



  // Check if input1 is 3 and input2 is 2
  if ( EIQc == 2.667  ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("b1").style.visibility="hidden";
      document.getElementById("wrong3b").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("outputMcd2").innerHTML = "M<sub>CD</sub> = 10.668 kNm " ;

          }, 100);
          setTimeout(function() {
            document.getElementById("nextButton4").style.visibility="visible";

      document.getElementById("text32").style.visibility="visible";
      document.getElementById("text33").style.visibility="visible";
      document.getElementById("outputMdc2").innerHTML="M<sub>DC</sub> = 5.334 kNm";

    }, 1000);
  

    document.getElementById("wrong3b").style.display = "block";
    document.getElementById("outputMcd2").style.display = "block";
    document.getElementById("outputMdc2").style.display = "block";
    document.getElementById("text32").style.display = "block";
    document.getElementById("text33").style.display = "block";
    document.getElementById("nextButton4").style.display = "block";
    document.getElementById("b1").style.display = "block";

  }

  if (EIQc == "" ) { 
    setTimeout(function() {
      document.getElementById("wrong3b").textContent = "Please Fill the Required Fields.";

      
    }, 1000);
    document.getElementById("wrong3b").style.display = "block";
} 
else        {
  
  // Display an error message
 document.getElementById("wrong3b").innerHTML = "Wrong Input EIΘ<sub>C</sub> = 2.667 "  ;

document.getElementById("wrong3b").style.display = "block";
}
}
///////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////CALCULATION FOR REACTIONS////////////////////////////////////////////////////
//////////////////////////////////////////////////REACTION- 1////////////////////////////////////////////////////

function reaction1H() {
  const inputMab = document.getElementById("inputMab").value;
  const inputMba = document.getElementById("inputMba").value;



  // Check if input1 is 3 and input2 is 2
  if (inputMab == -5.334 && inputMba == -10.668 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button6").style.visibility="hidden";
      document.getElementById("wrong4a").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("outputHa").innerHTML = "H<sub>A</sub> = -4 kN " ;
    }, 100);

    setTimeout(function() {
      document.getElementById("text34").style.visibility="visible";
      document.getElementById("text35").style.visibility="visible";
      document.getElementById("outputHa").style.visibility="visible";
      document.getElementById("b2").style.visibility="visible";
      document.getElementById("Ha").style.visibility="visible";

      

    }, 1700);
    
    document.getElementById("outputHa").style.display = "block";
    document.getElementById("wrong4a").style.display = "block";
    document.getElementById("Ha").style.display = "block";
    document.getElementById("text34").style.display = "block";
    document.getElementById("text35").style.display = "block";
    document.getElementById("b2").style.display = "block";
    document.getElementById("button6").style.display = "block";

    
  }

    if (inputMab == "" && inputMba == "" ) { 
      setTimeout(function() {
        document.getElementById("wrong4a").textContent = "Please Fill the Required Fields.";
  
        
      }, 1800);
      document.getElementById("wrong4a").style.display = "block";
  } 
  else        {
    
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong4a").innerHTML = "Wrong Input, M<sub>AB</sub>= -5.334 and M<sub>BA</sub>= -10.668"  ;
  }, 1);
  document.getElementById("wrong4a").style.display = "block";
  }
  }
//////////////////////////////////////////////////REACTION- 2////////////////////////////////////////////////////

function reaction2H() {
  const Ha = document.getElementById("Ha").value;



  // Check if input1 is 3 and input2 is 2
  if (Ha == -4 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("b2").style.visibility="hidden";
      document.getElementById("wrong4b").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("outputHb").innerHTML = "H<sub>B</sub> = 4 kN " ;

    }, 100);
    setTimeout(function() {
      document.getElementById("text36").style.visibility="visible";
      document.getElementById("text37").style.visibility="visible";
      document.getElementById("text38").style.visibility="visible";
      document.getElementById("text39").style.visibility="visible";
      document.getElementById("outputHc").innerHTML ="H<sub>D</sub> =  4 kN";
      document.getElementById("outputHd").innerHTML ="H<sub>D</sub> = -4 kN";
    }, 500);

    setTimeout(function() {
      document.getElementById("text40").style.visibility="visible";
      document.getElementById("text41").style.visibility="visible";
      document.getElementById("text42").style.visibility="visible";
      document.getElementById("text43").style.visibility="visible";
      document.getElementById("inputudl").style.visibility="visible";
      document.getElementById("inputMba2").style.visibility="visible";
      document.getElementById("b3").style.visibility="visible";
      document.getElementById("addspecimen2f").style.visibility="visible";

    }, 1700);
      setTimeout(function() {
        document.getElementById("addspecimen2g").style.visibility="visible";
      document.getElementById("transwhite1b").style.visibility="visible";

    }, 1900);
    document.getElementById("wrong4b").style.display = "block";
    document.getElementById("outputHc").style.display = "block";
    document.getElementById("outputHd").style.display = "block";
    document.getElementById("outputHb").style.display = "block";
  document.getElementById("text36").style.display = "block";
  document.getElementById("text37").style.display = "block";
  document.getElementById("text38").style.display = "block";
  document.getElementById("text39").style.display = "block";
  document.getElementById("text40").style.display = "block";
  document.getElementById("text41").style.display = "block";
  document.getElementById("text42").style.display = "block";
  document.getElementById("text43").style.display = "block";
  document.getElementById("inputudl").style.display = "block";
  document.getElementById("inputMba2").style.display = "block";
  document.getElementById("b3").style.display = "block";
  document.getElementById("b2").style.display = "block";
  document.getElementById("addspecimen2f").style.display = "block";
  document.getElementById("addspecimen2g").style.display = "block";
  document.getElementById("transwhite1a").style.display = "block";




  }

    if (Ha == ""  ) { 
      setTimeout(function() {
        document.getElementById("wrong4b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4b").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4b").innerHTML = "Wrong Input, H<sub>A</sub> = -4";

  document.getElementById("wrong4b").style.display = "block";
  }
}
//////////////////////////////////////////////////REACTION- 3////////////////////////////////////////////////////

function reactionV() {
  const inputudl = document.getElementById("inputudl").value;
  const inputMba2 = document.getElementById("inputMba2").value;

  // Check if input1 is 3 and input2 is 2
  if (inputudl == 4 && inputMba2 == 6  ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("wrong4c").style.visibility="hidden";
      document.getElementById("b3").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("outputVb").innerHTML = "V<sub>B</sub>= -12 kN " ;
    }, 200);

    setTimeout(function() {
      document.getElementById("text44").style.visibility="visible";
      document.getElementById("text45").style.visibility="visible";
      document.getElementById("outputVc").style.visibility="visible";

    }, 600);

    setTimeout(function() {
      document.getElementById("outputVc").innerHTML ="V<sub>C</sub>= 12 kN";
      document.getElementById("nextButton6").style.visibility="visible";

    }, 1700);

    document.getElementById("wrong4c").style.display = "block";
    document.getElementById("outputVb").style.display = "block";
    document.getElementById("outputVc").style.display = "block";
    document.getElementById("outputVc").style.display = "block";
    document.getElementById("text44").style.display = "block";
  document.getElementById("text45").style.display = "block";
  document.getElementById("reactionB2").style.display = "block";
  document.getElementById("nextButton6").style.display = "block";
  document.getElementById("b3").style.display = "block";
  }

    if (inputudl == "" && inputMba2 == "" ) { 
      setTimeout(function() {
        document.getElementById("wrong4c").textContent = "Please Fill the Required Fields.";

        
      }, 1700);
      document.getElementById("wrong4c").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4c").innerHTML = "Wrong Input, W (UDL) = 4 kN/m, l (span length) = 6 m";

  document.getElementById("wrong4c").style.display = "block";
  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////


    
    

    //////////////////////////////////////////////////////////////////////////////////////////////////////



function restart()

{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";

document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="visible";
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("text4").style.visibility="hidden";
document.getElementById("text5").style.visibility="hidden";
document.getElementById("text6").style.visibility="hidden";
document.getElementById("L1").style.visibility="hidden";
document.getElementById("box2").style.visibility="hidden";
document.getElementById("button2").style.visibility="hidden";

document.getElementById("text7").style.visibility="hidden";
document.getElementById("text8").style.visibility="hidden";
document.getElementById("text9").style.visibility="hidden";
document.getElementById("L2a").style.visibility="hidden";
document.getElementById("box3").style.visibility="hidden";
document.getElementById("button3").style.visibility="hidden";

document.getElementById("text10").style.visibility="hidden";
document.getElementById("text11").style.visibility="hidden";
document.getElementById("text12").style.visibility="hidden";
document.getElementById("w2").style.visibility="hidden";
document.getElementById("box4").style.visibility="hidden";
document.getElementById("button4").style.visibility="hidden";









}
function navNext0a()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";

document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";

document.getElementById('s1_1').style.visibility="hidden";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById("canvas1").style.visibility="visible";


}



function navNext1a()
{
document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
setTimeout(function() {
  document.getElementById('"arw1"').style.visibility="visible";
  document.getElementById('button50').style.visibility="visible";
  }, 1000);
document.getElementById('addspecimen1').style.visibility="visible";
document.getElementById('addspecimen1').style.animation="addspecimen1 2s forwards";

document.getElementById('addspecimen2').style.visibility="visible";
document.getElementById('addspecimen2').style.animation="addspecimen2 1s forwards";

document.getElementById('addspecimen3').style.visibility="visible";
document.getElementById('addspecimen3').style.animation="addspecimen3 1s forwards";
}


function navNext1b()
{
  document.getElementById('addspecimen1b').style.visibility="visible";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="visible";
document.getElementById("text4").style.visibility="hidden";
document.getElementById("text5").style.visibility="hidden";
document.getElementById("text6").style.visibility="hidden";
document.getElementById("box2").style.visibility="hidden";
document.getElementById("L1").style.visibility="hidden";
document.getElementById("button2").style.visibility="hidden";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("wrong1a").style.visibility="visible";
document.getElementById("wrong1b").style.visibility="visible";
document.getElementById("wrong1c").style.visibility="visible";
document.getElementById("wrong1d").style.visibility="visible";


}


function navNext1c()
{

document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById('addspecimen2b').style.visibility="visible";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById('text16').style.visibility="hidden";
document.getElementById('box6').style.visibility="hidden";
document.getElementById('text17').style.visibility="hidden";
document.getElementById('text17b').style.visibility="hidden";
document.getElementById('box7').style.visibility="hidden";
document.getElementById('text18').style.visibility="hidden";
document.getElementById('text18b').style.visibility="hidden";
document.getElementById('box8').style.visibility="hidden";
document.getElementById('text19').style.visibility="hidden";
document.getElementById('text19b').style.visibility="hidden";
document.getElementById('eq1').style.visibility="hidden";
document.getElementById('eq2').style.visibility="hidden";
document.getElementById('eq3').style.visibility="hidden";
document.getElementById('eq4').style.visibility="hidden";
}



function navNext1d()
{
  document.getElementById("box10").style.visibility="visible";

document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="visible";
document.getElementById('text20').style.visibility="hidden";
document.getElementById('text20a').style.visibility="hidden";
document.getElementById('text21').style.visibility="hidden";
document.getElementById('text22').style.visibility="hidden";
document.getElementById('text23').style.visibility="hidden";
document.getElementById('text24').style.visibility="hidden";
document.getElementById('text25').style.visibility="hidden";
document.getElementById('text26').style.visibility="hidden";
document.getElementById('text27').style.visibility="hidden";
document.getElementById('addspecimen2c').style.visibility="visible";
document.getElementById('addspecimen2d').style.visibility="hidden";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById('box9').style.visibility="hidden";
document.getElementById('box11').style.visibility="hidden";
document.getElementById('eq5').style.visibility="hidden";
document.getElementById('eq6').style.visibility="hidden";



}





function navNext1e()
{

  document.getElementById("EIQc").style.visibility="hidden";
document.getElementById("b1").style.visibility="hidden";
document.getElementById("box12").style.visibility="visible";
  document.getElementById('nextButton4').style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="visible";
document.getElementById("text28").style.visibility="hidden";
document.getElementById("text29").style.visibility="hidden";
document.getElementById("text30").style.visibility="hidden";
document.getElementById("text31").style.visibility="hidden";
document.getElementById("text32").style.visibility="hidden";
document.getElementById("text33").style.visibility="hidden";
document.getElementById("Mab").style.visibility="hidden";
document.getElementById("b1").style.visibility="hidden";
document.getElementById("Mcd").style.visibility="hidden";
document.getElementById("wrong3a").style.visibility="hidden";
document.getElementById("wrong3b").style.visibility="hidden";
document.getElementById("outputMba2").style.visibility="hidden";
document.getElementById("outputMbc2").style.visibility="hidden";
document.getElementById("outputMcb2").style.visibility="hidden";

document.getElementById("nextButton5").style.visibility="hidden";



}


function navNext1f()
{
  document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="visible";
  document.getElementById("transwhite1b").style.visibility="hidden";

  document.getElementById("b2").style.visibility="hidden";
  document.getElementById("b3").style.visibility="hidden";
document.getElementById("Ha").style.visibility="hidden";
document.getElementById("inputudl").style.visibility="hidden";
document.getElementById("inputMba2").style.visibility="hidden";

document.getElementById("text34").style.visibility="hidden";
document.getElementById("text35").style.visibility="hidden";
document.getElementById("text36").style.visibility="hidden";
document.getElementById("text37").style.visibility="hidden";
document.getElementById("wrong4a").style.visibility="visible";
document.getElementById("text38").style.visibility="hidden";
document.getElementById("text39").style.visibility="hidden";
document.getElementById("text40").style.visibility="hidden";
document.getElementById("text41").style.visibility="hidden";
document.getElementById("text42").style.visibility="hidden";
document.getElementById("text43").style.visibility="hidden";
document.getElementById("text44").style.visibility="hidden";
document.getElementById("text45").style.visibility="hidden";
document.getElementById("addspecimen2e").style.visibility="visible";
document.getElementById("addspecimen2f").style.visibility="hidden";
document.getElementById("addspecimen2g").style.visibility="hidden";
document.getElementById("wrong4b").style.visibility="visible";
document.getElementById("wrong4c").style.visibility="visible"; 
document.getElementById("nextButton6").style.visibility="hidden";


}



function navNext1h()
{
  document.getElementById("canvas1f").style.visibility="hidden";
  document.getElementById("canvas1h").style.visibility="visible";
  document.getElementById("addspecimen3c").style.visibility="visible";
  document.getElementById("addspecimen3d").style.visibility="visible";


 
}







$(document).ready(function(){
	$('.showgraph1').addClass('open');
});








function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('specimen1').style.visibility="visible";
document.getElementById('specimen1').style.animation="specimen1 2s forwards";
document.getElementById('specimen2').style.visibility="visible";
document.getElementById('specimen2').style.animation="specimen2 1s forwards";
document.getElementById('specimen3').style.visibility="visible";
document.getElementById('specimen3').style.animation="specimen3 1s forwards";
document.getElementById('specimen4').style.visibility="visible";
document.getElementById('specimen4').style.animation="specimen4 1s forwards";
document.getElementById('specimen5').style.visibility="visible";
document.getElementById('specimen5').style.animation="specimen5 1s forwards";
document.getElementById('specimen6').style.visibility="visible";
document.getElementById('specimen6').style.animation="specimen6 1s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}







function start_analysis()
{
document.getElementById('start_analysis'). style.visibility="hidden";}
document.getElementById('start_Analysis1').style.visibility="hidden";
function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="hidden";
  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="hidden";


	},1000);

}

function start_Analysis()
{
  document.getElementById('arw5').style.visibility="hidden";
  document.getElementById('start_Analysis').style.visibility="hidden"; 
  

}
