function fetchData(){
    if(localStorage.length==0){
    document.getElementById("tbl").innerHTML="<h2>NO EMPLOYEES WERE ADDED</h2>"    
    }
    else{
        str=``
        for(i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            const value=JSON.parse(localStorage.getItem(key));
            console.log(key);
            
            str+=`
            <tr>
        <th scope="row">${value.empid}</th>
        <td>${value.name}</td>
        <td>${value.designation}</td>
        <td>${value.salary}</td>
        <td>${value.experience}</td>
        <td><a href="./html/edit.html?id=${value.empid}"> <button class="btn btn-outline-success">Edit</button></a>
        <button class="btn btn-outline-danger" onclick="delemp('${value.empid}')">Delete</button></td>
      </tr>`
        }
        document.getElementById("tb").innerHTML=str;
    }
}
fetchData();
function delemp(d){
    if(confirm("Are you sure?")){
    console.log(d);
    localStorage.removeItem(d)
    fetchData();
    
}
else{
    alert("Cancelled")
}
}