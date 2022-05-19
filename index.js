const vestingAddress = "0x87a9F9aF36FF02fC1d5d5212d9f3bfb019887bBe";
const faucetAddress ="0x269cD7B9Ebb2b731d443f08e7B78f4191e4637A6";
const MedamonAddress = "0xE879a660938078295a0a7428749Ff2fC210364D2";
const MedacoinAddress = "0x2bB513E23C978Fa1f9E700D5eCC754dbf979f2CC";

const abi = [{"inputs":[{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"uint256","name":"_rewardMonth","type":"uint256"},{"internalType":"uint256","name":"_maxMonths","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_lockerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payPerClaim","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastWithdraw","type":"uint256"}],"name":"lockEvent","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balancesPerUse","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"lastWithdraw","type":"uint256"},{"internalType":"uint256","name":"firstDeposit","type":"uint256"},{"internalType":"uint256","name":"toPay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"calculateMonthToPay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daysReturns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"lastClaim","type":"uint256"}],"name":"difSegundos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getFinalDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getTokensToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardMonth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"timeToNextClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];   // The ABI of the contract  // The address of the contract      
const abiFaucet = [{"inputs":[{"internalType":"address","name":"tokenFaucet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"bool","name":"_setOnOFF","type":"bool"}],"name":"ActivateFaucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getAmountOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getExpiryOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getOwnerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getSecsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountForClaimers","type":"uint256"},{"internalType":"uint256","name":"_secs","type":"uint256"}],"name":"makeMeOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setActiveOn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_secs","type":"uint256"}],"name":"setUpToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"vaciarFaucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const abiMedamon = [{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_walletOne","type":"address"},{"internalType":"address","name":"_walletTwo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setWalletOne","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setWalletTwo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"toggleBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"toggleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wallet_one","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet_two","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
//abi medacoin is same of medamon


let web3;
let account;
let vestingContract;
let faucetContract;
let medamon;
let medacoin;

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
  vestingContract = new web3.eth.Contract(abi, vestingAddress);
  faucetContract = new web3.eth.Contract(abiFaucet, faucetAddress);
  medamon = new web3.eth.Contract(abiMedamon, MedamonAddress);
  medacoin = new web3.eth.Contract(abiMedamon, MedacoinAddress);
  
  interact()
}

function interact() {
  // Faucet Buttons
  const btnClaimMedamon = document.getElementById('btnClaimMedamon');
  btnClaimMedamon.addEventListener('click', async () => {
    faucetContract.methods.claim(MedamonAddress).send({from: account}).then()
  })

  const btnClaimMedacoin = document.getElementById('btnClaimMedacoin');
  btnClaimMedacoin.addEventListener('click', async () => {
    faucetContract.methods.claim(MedacoinAddress).send({from: account}).then()
  })

  const btnAproveMedamon = document.getElementById('btnApprove');
  btnAproveMedamon.addEventListener('click', async () => {
    const amount = document.getElementById('aprovedTokens');
    const amount2String = amount.value.toString();
    medamon.methods.approve(vestingAddress, amount2String).send({from: account}).then()
  })

  const btnLockMedamon = document.getElementById('btnLock');
  btnLockMedamon.addEventListener('click', async () => {
    const amount = document.getElementById('lockTokens');
    const amount2String = amount.value.toString();
    vestingContract.methods.lock(amount2String).send({from: account}).then()
  });

  const btnNextClaim = document.getElementById('btnNextClaim');
  btnNextClaim.addEventListener('click', ()=> {
    vestingContract.methods.timeToNextClaim(account).call().then(res => {
      const amount = web3.utils.fromWei(res, 'wei');
      const valueSpan = document.getElementById('resultNextClaim');
      valueSpan.innerHTML = amount;
    })
  })
  const btnClaim = document.getElementById('btnClaim');
  btnClaim.addEventListener('click', ()=> {
    vestingContract.methods.claim().send({from: account}).then()
  });


   nombre = "alberto";

  const btnDifSegundos = document.getElementById('btnDifSegundos');
  btnDifSegundos.addEventListener('click', ()=> {
    const amount2 = 
      document.getElementById('difSegundos').innerText();
    const amount2String = amount2.value.toString();

    vestingContract.methods.difSegundos(amount2String).call().then(res => {
      const amount = web3.utils.fromWei(res, 'wei');
      const valueSpan = document.getElementById('dif');
      valueSpan.innerHTML = amount;
    })
  })
  

}

window.onload = init();