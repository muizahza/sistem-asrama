function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){
window.location="dashboard.html";
}else{
document.getElementById("msg").innerText="Login salah!";
}

}

function tambahPelajar(){

let nama=document.getElementById("nama").value;
let id=document.getElementById("idPelajar").value;

let table=document.getElementById("senarai");

let row=table.insertRow();

row.insertCell(0).innerText=nama;
row.insertCell(1).innerText=id;

}