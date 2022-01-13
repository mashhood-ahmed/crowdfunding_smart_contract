function addIdeator() {
    let name = $('#name').val()
    let phto = $('#photo').val()
    let edu = $('#education').val()
    let addr = $('#account').val()

    ideatorObj.methods.register_ideator(name, phto, edu, addr).send({from:myaccount[0], gasPrice:web3.utils.toWei("4.1", "Gwei")}, (err,res) => {
        console.log(res)
    })

    event.preventDefault()
}

function addInIPFS(event) {
    ret = confirm("Are you sure you want to upload this file?");
    event.stopPropagation();
    event.preventDefault();
    saveToIpfs(event.target.files)
}

function saveToIpfs (files){
    ipfs.add([...files], { progress: (prog) => console.log("received:" +prog) })
        .then((response) => {
            console.log(response);
            let ipfsId = response.path;
            console.log(ipfsId);
            $("#photo").val(ipfsId);
        }).catch((err) => {
        console.error(err);
    })
}