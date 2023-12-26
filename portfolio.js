

function SendMessage(){
    // get value from message input
    const nam = document.getElementById("name");
    const phone =  document.getElementById("phone");
    const desctiption = document.getElementById("short-note");
    const loadfun = document.getElementById("send");
    //testing message input, value exist or nor
    var valueExist = true;
    if(!desctiption.value.length > 0){
        valueExist = false;
        desctiption.focus();
    }
    if(!phone.value.length > 0){
        valueExist = false;
        phone.focus();
    }
    if(!nam.value.length > 0){
        valueExist = false;
        nam.focus();
    }
    //if value exist send message
    if(valueExist){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("warning").innerHTML = xhttp.responseText;
            nam.disabled = true;
            phone.disabled = true;
            desctiption.disabled = true;
            setCookie("n",nam.value,30);
            setCookie("p",phone.value,30);
            setCookie("d",desctiption.value,30);
            }
        };
        xhttp.open("GET", "message.php?n="+nam.value+"&p="+phone.value+"&d="+desctiption.value, true);
        xhttp.send(); 
    } else{ // value does not exist give error message;
        document.getElementById("warning").innerHTML = "Fill all requirements to make the message."
    }
}
// Cookies function
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let n = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return "";
}

//load cookies
const nameC = getCookie("n");
const phoneC = getCookie("p");
const desC = getCookie("d");

console.log(nameC);
//load values from cookies
/* need to fixed error
if(nameC!==""){
    document.getElementById('name').disabled = true;
}
*/
