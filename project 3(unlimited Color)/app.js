const randomcolor=function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    
    for(let i= 0; i<6; i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
  
  };
  
  let intervalid;
  const startchangebackground = function(){
    if(!intervalid){
      intervalid = setInterval(changebgcolor,1000);
    }
    function changebgcolor(){
      document.body.style.backgroundColor = randomcolor();
    }
  };
  
  const stopchangingcolor = function(){
   clearInterval(intervalid);
   intervalid = null;
  
  }
  
  document.querySelector('#start').addEventListener('click',startchangebackground);
  document.querySelector('#stop').addEventListener('click',stopchangingcolor);