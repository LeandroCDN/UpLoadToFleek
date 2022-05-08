const addressContract = "0x87a9F9aF36FF02fC1d5d5212d9f3bfb019887bBe";

const abi = [{"inputs":[{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"uint256","name":"_rewardMonth","type":"uint256"},{"internalType":"uint256","name":"_maxMonths","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_lockerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payPerClaim","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastWithdraw","type":"uint256"}],"name":"lockEvent","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balancesPerUse","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"lastWithdraw","type":"uint256"},{"internalType":"uint256","name":"firstDeposit","type":"uint256"},{"internalType":"uint256","name":"toPay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"calculateMonthToPay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daysReturns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"lastClaim","type":"uint256"}],"name":"difSegundos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getFinalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getTokensToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardMonth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"timeToNextClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];   // The ABI of the contract  // The address of the contract      

let web3;
let account;
let myContract;
console.log("hello world1")

function init() {
    if( typeof window.ethereum !== 'undefined') {
        const metamaskbtn = document.getElementById('enableEthereumButton');
        metamaskbtn.classList.remove('d-none');    
    
        metamaskbtn.addEventListener('click', async () => {
            console.log('get wallet')
            accounts = await window.ethereum.request( { method: 'eth_requestAccounts'} )
            account = accounts[0];

            metamaskbtn.classList.add('d-none');
            document.getElementById('accountSelected').innerHTML = account;
            document.getElementById('accountSelected').classList.add('border');
            contract();
            console.log("hello world2")
        })
    
      }
    
     
}

function contract() {
  web3 = new Web3(window.ethereum);
  myContract = new web3.eth.Contract(abi, addressContract);
  
  interact()
}

function interact() {
  const btnGetBalance = document.getElementById('btnGetBalance');
  btnGetBalance.addEventListener('click', ()=> {
      //const address = document.getElementById('addressGetBalance');
      //const addressvalue = address.value;
       
      const amount = document.getElementById('addressGetBalance');
      const amountString = amount.value.toString();
      //const amountTransfer = web3.utils.toWei(amountString, 'ether');  

      myContract.methods.lock(amountString).send({ from: account }).then()/* 
       myContract.methods.getFinalDate(value).call().then(res => {
        const amount = web3.utils.fromWei(res, 'ether');
        const valueSpan = document.getElementById('balance');
        valueSpan.innerHTML = amount;
    });
  })*/





  
  })
  const btnDifSegundos = document.getElementById('btnDifSegundos');
  btnDifSegundos.addEventListener('click', ()=> {
    const amount2 = document.getElementById('difSegundos');
    const amount2String = amount2.value.toString();

    myContract.methods.difSegundos(amount2String).call().then(res => {
      const amount = web3.utils.fromWei(res, 'wei');
      const valueSpan = document.getElementById('dif');
      valueSpan.innerHTML = amount;
    })
  })
  

}

window.onload = init();