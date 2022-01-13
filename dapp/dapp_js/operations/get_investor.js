function getInvestor() {
    let account = $('#account').val()
    investorObj.methods.getInvestorByAddress(account).call( (error, response) => {
        if(response) {
            let html = `<tr>`
            html += `<td> ${response['name']} </td>`
            html += `<td> ${response['photo']} </td>`
            html += `<td> ${response['occupation']} </td>`
            html += `<td> ${response['account']} </td>`
            html += `</tr>`
            $('#contentArea').html(html)
        } 
    })
    event.preventDefault()
}