function countdown(number,callback){
  setTimeout(function(){
    document.body.innerHTML=`<p>${number}</p>`;
    if(number>1){
      countdown(number-1,callback);
    }else{
      callback();
    }
  },1000);
}

function displayMessage(){
  document.body.innerHTML=`<h1>Happy independence Day my friends</h1>`;
}

//start the coundown from 10
countdown(10,displayMessage);