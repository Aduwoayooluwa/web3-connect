const Web3 =  require('web3');

async function connect() {
    // connected to blockchain
    const provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
    const web3 = new Web3(provider)
    // console.log(web3)

    // to fetch the account addresses
    const account =  await web3.eth.getAccounts();
    console.log(account)

    // fetch balance of an account in wei
    const balanceInWei = await web3.eth.getBalance(account[0]);
    console.log(balanceInWei)

    // accoun balance in ether
    const balanceInEther = web3.utils.fromWei(balanceInWei, "ether")
    console.log('balance in ether', balanceInEther)
}

connect()