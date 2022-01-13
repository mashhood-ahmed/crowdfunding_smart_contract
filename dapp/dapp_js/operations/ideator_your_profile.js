function getProfile() {
    const account = myaccount[0]
    ideatorObj.methods.getIdeatorByAddress(account).call((error,response) => {
        const raw = `<tr>
                        <td>${response['name']}</td>
                        <td>${response['photo']}</td>
                        <td>${response['education']}</td>
                        <td>${response['account']}</td>
                    </tr>`
                    $('#content').html(raw)
                    console.log(response)
    })
}

function loadPage() {
    getProfile()
}