function addemp(){
    a={};
    a.empid=document.getElementById("t1").value;
    a.name=document.getElementById("t2").value;
    a.designation=document.getElementById("t3").value;
    a.salary=document.getElementById("t4").value;
    a.experience=document.getElementById("t5").value;

    if(localStorage.getItem(a.empid)){
        alert("sorry this ID already exist ")

    }
    else{
        localStorage.setItem(a.empid,JSON.stringify(a));
        window.location.href="../index.html";
    }

}