function getYourIdea(account) {
    contractOwnerObj.methods.getIdeasByIdeatorAddress(account).call((error, response) => {
        let raw = `<tr>`
        raw += `<td> ${response['code']} </td>`
        raw += `<td> ${response['title']} </td>`
        raw += `<td> ${response['description']} </td>`
        raw += `<td> ${response['amount']} </td>`
        raw += `<td> <a href="read_more.html?code=${response['code']}"> View Investors </a> </td>`
        raw += `</tr>`
        $('#contentArea').html(raw)
        console.log(response)
    })
}

function loadPage() {
    let addr = myaccount[0]
    getYourIdea(addr)
}