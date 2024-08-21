let value;
function edit(){
    const urlParams= new URLSearchParams(window.location.search)
    id=urlParams.get("id");
    value=JSON.parse(localStorage.getItem(id));
    document.getElementById("tbls").innerHTML=`
    <table>
        <h3 align="center">Edit Employee Details</h3>
       
        <tr>
          <td><label for="t1">NAME</label></td>
          <td><input type="text" name="" id="t2" value="${value.name}"></td>
        </tr>
        <tr>
          <td><label for="t1">DESIGNATION</label></td>
          <td><input type="text" name="" id="t3" value="${value.designation}"></td>
        </tr>
        <tr>
          <td><label for="t1">SALARY</label></td>
          <td><input type="text" name="" id="t4" value="${value.salary}"></td>
        </tr>
        <tr>
          <td><label for="t1">EXPERIENCE</label></td>
          <td><input type="text" name="" id="t5" value="${value.experience}"></td>
        </tr>
        <tr>
          <td></td>
          <td>   <button class="btn bg-success" onclick="editData()">SUBMIT</button></td>
     
        </tr>
      </table>`

}
edit();
function editData(){
    a={};
    a.empid=value.empid;
    console.log(a.empid );
    var b1=document.getElementById("t2").value;
    a.name=b1;
    var b2=document.getElementById("t3").value;
    a.designation=b2;
    var b3=document.getElementById("t4").value;
    a.salary=b3;
    var x4 = document.getElementById("t5").value;  
    a.experience=x4;  
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="../index.html";


}