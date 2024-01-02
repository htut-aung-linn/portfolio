//elements
const popup = document.getElementById('popup');

function getall(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const a = JSON.parse(xhttp.responseText);
        var text = "";
        for(var i = 0;  i< a.length; i++){
            console.log(a[i][0][0]);
            text +=array_to_message(a[i][0]);
        }
        }
        console.log(typeof(text));
        document.getElementById('popup').innerHTML = text;
    };
    xhttp.open("GET", "adminReq.php?f=all", true);
    xhttp.send(); 
}

function array_to_message(array){
    const string = '<div class="message">'+
    '<h3>Name: '+array[0]+'</h3>'+
    '<p>Message: '+array[2]+'</p>'+
    '<a>To Contact: '+array[1]+'</a>'+
   ' <div class="button">'+
        '<button onclick="">Seen</button>'+
        '<button>Done</button>'+
        '<button>Delete</button>'+
    '</div>'+
'</div>';
    return string;
}