console.log("ARC Builder Loaded");
function playMusic(){
document.getElementById("bgmusic").play();
}

async function connectWallet() {

if(window.ethereum){

await window.ethereum.request({
method:"eth_requestAccounts"
});

alert("Wallet Connected!");

}

else{

alert("Install MetaMask");

}

}
.socials a{
color:#00ffff;
text-decoration:none;
font-size:18px;
}

.card{
background:#1e293b;
padding:20px;
margin:20px;
border-radius:20px;
}

button{
background:#7c3aed;
color:white;
padding:15px 30px;
border:none;
border-radius:15px;
cursor:pointer;
  }
