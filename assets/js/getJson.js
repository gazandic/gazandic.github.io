var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    arr = arr.data;
    var name = arr[0].fullname;
    var about = arr[1].about; 
    var now = arr[2].now; 
    var place = arr[3].location; 
    var edu = arr[5].edulist[0].eduplace;
    edu += arr[5].edulist[0].edufocus;
    document.title.innerHTML = name; 
    document.getElementsByClassName("fullname")[0].innerHTML = name; 
    document.getElementsByClassName("fullname")[1].innerHTML = name;
    document.getElementsByClassName("fullname")[2].innerHTML = name; 
    document.getElementsByClassName("fullname")[3].innerHTML = name; 
    document.getElementById("now").innerHTML = now; 
    document.getElementById("place").innerHTML = place; 
    document.getElementById("edu").innerHTML = edu;
    document.getElementById("about").innerHTML = about;
    var job = arr[4].joblist;
    var objob,t;
    for(i = 0; i < job.length; i++) {
        objob = document.createElement("div");
        objob.className="job";
        t = document.createTextNode(job[i].job);       // Create a text node
        objob.appendChild(t);                                          // Append the text to <p>
        document.getElementById("work").appendChild(objob);  
    }
    // out += "</table>";
    // document.getElementById("work").innerHTML = out;
}