const Web_3 = require('web3')

const sendEther =  async () => {
    const provider = new Web_3.providers.HttpProvider('HTTP://127.0.0.1:7545');
    const web3 = new Web_3(provider)

    // transaction
    const transact = await web3.eth.sendTransaction({
        from: "0x20dAf01F31781D883765C9Ef222BC267Da6E641d",
        to: "0x6cc561eB313d98d497794D982D05cAD574735167",
        value: web3.utils.toWei("10", "ether")
    })

    console.log(transact)
}
sendEther()
