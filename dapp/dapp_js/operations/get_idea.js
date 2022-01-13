function getIdea() {
    let code = $('#code').val()
    contractOwnerObj.methods.getIdeaByCode(code).call((error, response) => {
        const raw = `<tr>
                        <td> ${response['ideaOwner']} </td>
                        <td> ${response['title']} </td>
                        <td> ${response['description']} </td>
                        <td> ${response['amount']} </td>
                        <td> <a href="read_more.html?code=${response['code']}">View Investors</a></td>
                     </tr>`
                     console.log(response)
        $('#content').html(raw)
    })
    event.preventDefault()
}