// alert("Thsi application was created by Daud Abdul-Gafar Olamilekan")
function openham(){
    document.getElementById("sec2").style.width='100%';
    document.getElementById("sec2").style.transition='0.5s';
    document.getElementById("ham").style.display="none";
    document.getElementById("cancel").style.display='block';

}
function closeham(){
    document.getElementById("sec2").style.width='0%';
    document.getElementById("ham").style.display="block";
    document.getElementById("cancel").style.display='none';
}

// function to enable and disable scroll

// disable scroll functin 
function disable_scroll(){
  document.body.style.overflow='hidden';
}
function enable_scroll(){
  document.body.style.overflow='auto'
}
window.onscroll = function(){
    let scrolling = window.scrollY;
    let sec2 = document.getElementsByClassName("sect2")[0];
    let offh = sec2.offsetHeight;
    let offt = sec2.offsetTop;
    if(scrolling >= offt && scrolling <= offh + offt){
       sec2.classList.add('myanime');
    }
    else{
      sec2.classList.remove('myanime');
    }
  }


//  ***** solution1
window.onload = ()=>{
  thedots.style.height='9%';
  add_up_course_unit()
  
}
// for the dots  ***** problem1

let thedots = document.getElementById("mydots")
document.getElementById("thedot").onclick = function(){
  // let tdots = getComputedStyle(thedots)
  thedots.style.transition ='0.5s'
  // 61.1094px
  // thedots.style.height='9%';

  if(thedots.style.height === '9%'){
    thedots.style.height='20%';
  }
  else {
    thedots.style.height='9%';
   }
  // alert(tdots.height)

}
// document.getElementById("thedot").addEventListener('click',() => {
//   // document.getElementById("mydots").style.height='20%';
//    if(thedots.style.height == "9%"){
//     document.getElementById("mydots").style.height='20%';
//    }
//    else{
//     document.getElementById("mydots").style.height='9%';
//    }
// })
function hidedots(){
  document.getElementById('mydots').style.display="none";
}  
window.onscroll = function(){
    
    let scrolling = window.scrollY;
    let sec2 = document.getElementsByClassName("sect");
    for(let i = 0; i < sec2.length; i++){
        
        let offh = sec2[i].offsetHeight;
        let offt = sec2[i].offsetTop;
        if(scrolling >= offt && scrolling <= offh + offt){
           sec2[i].classList.add('myanime');
        
        }
        else{
          sec2[i].classList.remove('myanime');
        
        }
       
    }
  }
  function changer(){
     let myswitch = document.getElementById("switch")
     if (myswitch.value === "first"){
        myswitch.value="second";
       document.documentElement.style.setProperty("--myblue","rgb(139, 10, 26)");
       document.documentElement.style.setProperty("--mytransblue","rgba(139, 10, 26,0.8)")
       document.documentElement.style.setProperty("--mycyan","rgb(248, 226, 49)")
     }
     else{
      myswitch.value="first";
      document.documentElement.style.setProperty("--myblue","rgb(2, 2, 75)");
      document.documentElement.style.setProperty("--mytransblue","rgba(2, 2, 75,0.8)")
      document.documentElement.style.setProperty("--mycyan","cyan")
     }
  }

function gotohome(){
  if(window.innerWidth < 800){
    closeham();
    window.location.href="#home";

  }
  else{
    window.location.href="#home";
    
  }
}
function gotocourse(){
  if(window.innerWidth < 800){
    closeham()
    document.getElementById("course").scrollIntoView({behavior:"smooth"});
  }
  else{
      document.getElementById("course").scrollIntoView({behavior:"smooth"});

    }
}
function gotolectures(){
    if(window.innerWidth < 800){
      closeham()
  window.location.href="#lecturer";

    }
    else{
      window.location.href="#lecturer";

    }
}
function gotogpcal(){
  if(window.innerWidth < 800){
    closeham()
  document.getElementById("gpcal").scrollIntoView({behavior:"smooth"});

  }
  document.getElementById("gpcal").scrollIntoView({behavior:"smooth"});
}
function gotoabout(){
    if(window.innerWidth < 800){
      closeham();
  window.location.href="#about";
    }
    else{
  window.location.href="#about";

    }
}
function add_up_course_unit(){
  try {
    let thetable = document.getElementById("tab");
   
    let sum = 0;
    let columnIndex = 3;
    for(let i = 1; i < thetable.rows.length; i++){
       const row = thetable.rows[i]
      let tcell =  row.cells[columnIndex];
      if(!tcell) continue; // ***** this is very important has it function for table that some row may have fewer values
      let value = Number(tcell.innerText);
       if(!isNaN(value)){
        sum += value;
       }
       else{
        alert("there is a letter")
       }
      //  console.log(value)
      }
      document.getElementById("totalcu").textContent=sum;
  } catch (error) {
    alert(error)
  }
}
function Printmycouseform(){
  let swdhnd1firsttable = document.getElementById("swdhnd1firsttable");
  const frame = document.createElement('iframe');
  frame.name = 'print-frame';
  frame.src ='about:blank';
  document.body.appendChild(frame);
  const frameDoc = frame.contentWindow.document;
  frameDoc.body.innerHTML = swdhnd1firsttable.innerHTML;
  frame.focus();
  frame.contentWindow.print()
  // Remove frame after printing
  document.body.removeChild(frame);
  
  
}
function adeola(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
   document.getElementById('lname').innerHTML=' Mr Adeola O.O';
   document.getElementById("lgender").innerText=' Male';
   document.getElementById("lcourse").innerHTML=" SWD 315 & SWD 316";
   gotolectures();
   disable_scroll()
}
function olowo(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mr Olowookere';
  document.getElementById("lgender").innerText=' Male';
  document.getElementById("lcourse").innerHTML=" AIT 311 & AIT 313";
  gotolectures();
  disable_scroll()
}
function bello(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mrs Bello G.R';
  document.getElementById("lgender").innerText=' Female';
  document.getElementById("lcourse").innerHTML=" SWD 312";
  gotolectures();
  disable_scroll();
}
function sikiru(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mr Sikiru Kilani';
  document.getElementById("lgender").innerText=' Male';
  document.getElementById("lcourse").innerHTML=" SWD 312";
  gotolectures();
  disable_scroll();
}
function ojo(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mr Ojo';
  document.getElementById("lgender").innerText=' Male';
  document.getElementById("lcourse").innerHTML=" SWD 313";
  gotolectures();
  disable_scroll();
}
function amao(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mr Amao';
  document.getElementById("lgender").innerText=' Male';
  document.getElementById("lcourse").innerHTML=" SWD 313";
  gotolectures();
  disable_scroll();
}
function lateefah(){
  document.getElementById("details").style.display='block';
  document.getElementById("limg").src='/image/oyscatech_logo.png';
  document.getElementById('lname').innerHTML=' Mrs Lateefah';
  document.getElementById("lgender").innerText=' Female';
  document.getElementById("lcourse").innerHTML=" SWD 313";
  gotolectures();
  disable_scroll();
}
function swdhnd1f(){
  // alert("SWD HND1 first semester")
  document.getElementById("swdhnd1first").style.display='block';
  document.getElementById("courses").style.display='none';

}
function swdhnd1s(){
  // alert(" SWD HND 1 second semester")
  document.getElementById("swdhnd1second").style.display='block';
  document.getElementById("courses").style.display='none';
}
function swdhnd2f(){
  // alert(" SWD HND2 first semester")/
  document.getElementById("swdhnd2first").style.display='block';
  document.getElementById("courses").style.display='none';

}
function swdhnd2s(){
  // alert("SWD HND2 second Semester")
  document.getElementById("swdhnd2second").style.display='block';
  document.getElementById("courses").style.display='none';
}
function ncchnd1f(){
  alert("NCC HND1 first Semester")
}
function ncchnd1s(){
  alert("NCC HND1 second Semester")
}
function ncchnd2f(){
  alert("NCC HND2 first semester")
}
function ncchnd2s(){
  alert("NCC HND2 second semester")
}
// document.getElementById('exitbtn').addEventListener("click",()=>{
  
//   document.getElementById("swdhnd1first").style.display='none';
//   document.getElementById("swdhnd1second").style.display='none';
//   document.getElementById("swdhnd2first").style.display='none';
//   document.getElementById("swdhnd1second").style.display='none';
//   document.getElementById("courses").style.display='flex';});

  function exitfunc(){
    document.getElementById("swdhnd1first").style.display='none';
  document.getElementById("swdhnd1second").style.display='none';
  document.getElementById("swdhnd2first").style.display='none';
  document.getElementById("swdhnd2second").style.display='none';
  document.getElementById("courses").style.display='flex';
  }
  function closelecmodal(){
    document.querySelector("#details").style.display='none';
    enable_scroll();
  }