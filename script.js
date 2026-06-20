function checkWallet() {
  const wallet = document.getElementById("wallet").value;

  if (wallet === "") {
    alert("Please enter a wallet address");
  } else {
    alert("Wallet Connected: " + wallet);
  }
}
