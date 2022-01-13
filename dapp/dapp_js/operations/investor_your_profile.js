function getProfile() {
    const account = myaccount[0]
    investorObj.methods.getInvestorByAddress(account).call((error, response) => {
        const raw = `<tr>
                        <td>${response['name']}</td>
                        <td>${response['photo']}</td>
                        <td>${response['occupation']}</td>
                        <td>${response['account']}</td>
                     </tr>`
        $('#content').html(raw)
        console.log(response)
    })
}

function loadPage() {
    getProfile()
}