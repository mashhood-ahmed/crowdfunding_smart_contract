function getIdeaCodes() {
    contractOwnerObj.methods.getIdeaCodes().call((error, response) => {
        let raw = "";
        response.forEach(e => {
            raw += `<option value="${e}" > ${e} </option>`;
        })
        $('#ideacodes').html(raw)
    })
}

function getYourInvestments() {
    const account = myaccount[0]
    contractOwnerObj.methods.getIdeaOnInvestor(account).call((error, response) => {
        console.log(response)
        let raw = ""
        response.forEach(e => {
            raw += `<tr><td>Idea Code</td><td>${e}</td></tr>`
        })
        $('#yourinfo').html(raw)
    })
}

function investInIdea() {
    const code = $('#ideacodes').val()
    const amount = $('#amount').val()
    investorObj.methods.investInIdea(code, amount, myaccount[0]).send({from:myaccount[0], gasPrice:web3.utils.toWei("4.1", "Gwei")},(error, response) => {
        console.log(response)
    })
    event.preventDefault()
}

function loadPage() {
    getIdeaCodes() 
    getYourInvestments()
}