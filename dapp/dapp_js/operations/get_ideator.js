function getIdeator() {
    let account = $('#account').val()
    ideatorObj.methods.getIdeatorByAddress(account).call( (error, response) => {
        if(response) {
            let html = `<tr>`
            html += `<td> ${response['name']} </td>`
            html += `<td> ${response['photo']} </td>`
            html += `<td> ${response['education']} </td>`
            html += `<td> ${response['account']} </td>`
            html += `</tr>`
            $('#contentArea').html(html)
        } 
    })
    event.preventDefault()
}