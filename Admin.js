//ALTER TABLE `message` ADD `No` INT NOT NULL AUTO_INCREMENT AFTER `State`, ADD PRIMARY KEY (`No`);
//elements
var popup = document.getElementById('popup');
//get all message from database
var getstate = "Unseen";
function getall(){
    getstate = "All";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const a = JSON.parse(xhttp.responseText);
        var text = "";
        for(var i = 0;  i< a.length; i++){
            console.log(a[i][0]);
            text +=array_to_message(a[i]);
        }
        }
        console.log(typeof(text));
        document.getElementById('container').innerHTML = text;
        uichangeforget();
    };
    xhttp.open("GET", "adminReq.php?f=all", true);
    xhttp.send(); 
}
//getting unseen message from database
function getunseen(){
    getstate = "Unseen";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const a = JSON.parse(xhttp.responseText);
        var text = "";
        for(var i = 0;  i< a.length; i++){
            console.log(a[i][0]);
            text +=array_to_message(a[i]);
        }
        }
        console.log(typeof(text));
        document.getElementById('container').innerHTML = text;
        uichangeforget();
    };
    xhttp.open("GET", "adminReq.php?f=us", true);
    xhttp.send(); 
}
//geting finished messages
function getdone(){
    getstate = "Done";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const a = JSON.parse(xhttp.responseText);
        var text = "";
        for(var i = 0;  i< a.length; i++){
            console.log(a[i][0]);
            text +=array_to_message(a[i]);
        }
        }
        console.log(typeof(text));
        document.getElementById('container').innerHTML = text;
        uichangeforget();
    };
    xhttp.open("GET", "adminReq.php?f=d", true);
    xhttp.send();
}

//get in progress message
function getprogress(){
    getstate = "In Progress";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const a = JSON.parse(xhttp.responseText);
        var text = "";
        for(var i = 0;  i< a.length; i++){
            console.log(a[i][0]);
            text +=array_to_message(a[i]);
        }
        }
        //console.log(typeof(text));
        document.getElementById('container').innerHTML = text;
        uichangeforget();
    };
    xhttp.open("GET", "adminReq.php?f=pro", true);
    xhttp.send();
}
function array_to_message(array){
    const state = array[3];
    var btn = "";
    if(state==="P"){
        btn = '<button onclick="don('+array[4]+')">Done</button>'
    } else{
        btn = '<button onclick="per('+array[4]+')">Perform</button>';
    }
    const string = '<div class="message '+array[3]+'">'+
    '<h3>Name: '+array[0]+'</h3>'+
    '<p>Message: '+array[2]+'</p>'+
    '<a href="tel:'+array[1]+'">To Contact: '+array[1]+'</a>'+
    '<div class="button">'+btn+
        '<button onclick="deldo('+array[4]+')">Delete</button>'+
    '</div>'+
    '</div>';
    return string;
}

function per(no){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            refresh();
        }
    };
    console.log("adminReq.php?f=per&no="+no);
    xhttp.open("GET", "adminReq.php?f=per&no="+no, true);
    xhttp.send(); 
}
function don(no){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            refresh();
        }
    };
    console.log("adminReq.php?f=per&no="+no);
    xhttp.open("GET", "adminReq.php?f=don&no="+no, true);
    xhttp.send();
}
function cancle(){
    document.getElementById('popup').style.display = "none";
}
function del(no){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('popup').style.display = "none";
            refresh();
        }
    };
    xhttp.open("GET", "adminReq.php?f=del&no="+no, true);
    xhttp.send();
}
function deldo(no){
    const text = '<div>'+
    'Do you want to delete this message?'+
'</div>'+
'<div class="button">'+
    '<button onclick="del('+no+')">Delete</button>'+
    '<button onclick="cancle()">Cancle</button>'+
'</div>';
    document.getElementById("popup").innerHTML = text;
    document.getElementById('popup').style.display = "block";
}

function refresh(){
    if(getstate==="All"){
        getall();
    }else if(getstate==="Unseen"){
        getunseen();
    }else if(getstate==="Done"){
        getdone();
    }else{
        getprogress();
    }
}

function uichangeforget(){
    var all= document.getElementById('all');
    var unseen= document.getElementById('unseen');
    var progress= document.getElementById('progress');
    var done= document.getElementById('done');
    if(all.classList.contains('active')){
        all.classList.remove('active');
    }
    if(unseen.classList.contains('active')){
        unseen.classList.remove('active');
    }
    if(progress.classList.contains('active')){
        progress.classList.remove('active');
    }
    if(done.classList.contains('active')){
        done.classList.remove('active');
    }
    if(getstate==="All"){
        all.classList.add('active');
    }else if(getstate==="Unseen"){
        unseen.classList.add('active');
    }else if(getstate==="Done"){
        done.classList.add('active');
    }else{
        progress.classList.add('active');
    }
    if(document.getElementById("container").innerHTML===""){
        document.getElementById("container").innerHTML = "No message available."
    }
} 
//ALTER TABLE `message` ADD `No` INT NOT NULL AUTO_INCREMENT AFTER `State`, ADD PRIMARY KEY (`No`);
getprogress();