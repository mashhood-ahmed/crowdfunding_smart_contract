function postIdea() {
    let code = $('#code').val()
    let title = $('#title').val()
    let desc = $('#desc').val()
    ideatorObj.methods.postIdea(code, title, desc).send({from:myaccount[0], gasPrice:web3.utils.toWei("4.1", "Gwei")},(error, response) => {
        console.log(response)
    })
    event.preventDefault()
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function loadPage() {
    let ch = makeid(5).toLowerCase()
    $('#code').val(ch)
}