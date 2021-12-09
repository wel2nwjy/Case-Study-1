function collectdata(){
    var xhttp= new XMLHttpRequest();
    // event listener
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById('labeltxtstyle').style.display='none';
            // document.getElementById("demo").innerHTML=this.responseText; // for text file
            var newresponse=JSON.parse(this.responseText);
            filldata(newresponse);
            
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

let nfilleddataflag=0;

function filldata(jsontxtdata){
    if(nfilleddataflag==1){return;}
    let getdiv=document.getElementById('filldata');
    let nrow=0;
    let newrow;
    document.getElementById('heading').textContent="Select Any 5 from the following To Do Lists";


    jsontxtdata.forEach(element => {
        nfilleddataflag=1;
    if (nrow ==0){
        newrow=document.createElement("div");
        newrow.className = 'row';
        getdiv.appendChild(newrow);
        nrow=1;
    }else{
        nrow=0;
    }
        

        let newcol=document.createElement("div");
        newcol.className = 'col-md-6';
        newrow.appendChild(newcol);
        

        let newCheckBox=document.createElement("input");
        newCheckBox.type = 'checkbox';     
        newCheckBox.setAttribute("onchange","countchecked(this.checked)");
        
        var newlabel = document.createElement('label')
        newlabel.appendChild(document.createTextNode(element.title));
        newlabel.className = 'mx-2 chklabel1';

        if(element.completed==true){
            newCheckBox.checked=true;
            newCheckBox.disabled=true;
            newlabel.className = 'mx-2 chklabel1';
            newCheckBox.className = 'chkbxinfo1';
        }else{
            newlabel.className = 'mx-2';
            newCheckBox.className = 'chkbxinfo2';
        }

        newcol.appendChild(newCheckBox);
        newcol.appendChild(newlabel);

    });   
    
}



function cleardata(){
    document.getElementById('labeltxtstyle').style.display='initial';
    document.getElementById('filldata').innerText="";
    document.getElementById('heading').textContent="";
    nfilleddataflag=0;
}

function closeWindow(){
    // window.close();
    // window.open("index.html","_blank"); 

    window.location = 'index.html'
}

let ncount=0;

function countchecked(chekornot) {
    if(chekornot==true){
        ncount++;
    }else{
        ncount--; 
    }
   console.log(ncount);

   if(ncount==5){
    setTimeout(function(){ alert("Congrats. 5 Tasks have been Successfully Completed"); }, 500);
   }
}


