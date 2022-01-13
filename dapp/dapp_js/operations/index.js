function getIdeas() {
    contractOwnerObj.methods.getIdeas().call((error,response) => {
        if(response) {
            let raw = ``;
            response.forEach((element,i) => {
                raw += `<div>`
                raw += `<h1 id="f${i}" class="mt-4"> ${element['code']} </h1>`
                raw += `<p> ${element['title']} </p>`
                raw += `<p> ${element['description']} </p>`
                raw += `</div>`
            })
            $('#dataContainer').html(raw)
            console.log(response)
        }
    })
}

function loadPage() {
    getIdeas()
}
