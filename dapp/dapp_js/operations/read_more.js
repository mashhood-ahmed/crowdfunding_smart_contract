function getIdeaDetail(code) {
    contractOwnerObj.methods.getInvestorsOnIdeaCode(code).call((error,response) => {
        let raw = ""
        response.forEach(e => {
            raw += `<tr><td> ${e} </td></tr>`
        })
        $('#investors_area').html(raw)
    })
}

function loadPage() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let code = params['code']
    getIdeaDetail(code)
}