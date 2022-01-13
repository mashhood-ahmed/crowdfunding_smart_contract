let contractOwnerAddr = "0x7588Cf8e3950463726BC5802134303E28936Cb54";
let ideatorAddr = "";
let investorAddr = "";

let contractOwnerObj = "";
let ideatorObj = "";
let investorObj = "";

const initilizeMainContract = async (web3) => {
    const contractOwnerdata = await $.getJSON('./dapp_js/contracts/ContractOwner.json');
    contractOwnerObj = await new web3.eth.Contract(contractOwnerdata.abi, contractOwnerAddr);
    console.log("contractOwner object is loaded " + contractOwnerObj);
    return contractOwnerObj;
}

const getIdeatorContract = async (web3) => {
    const ideatorData = await $.getJSON("./dapp_js/contracts/Ideator.json");
    await contractOwnerObj.methods.getIdeatorContractAddress().call((error, result) => {
        if(result) {
            ideatorAddr = result;
            ideatorObj = new web3.eth.Contract(ideatorData.abi, ideatorAddr);
            console.log("loaded ideator address "+result);
        }
    });
}

const getInvestorContract = async (web3) => {
    const investorData = await $.getJSON("./dapp_js/contracts/Investor.json");
    await contractOwnerObj.methods.getInvestorContractAddress().call((error, result) => {
        if(result) {
            investorAddr = result;
            investorObj = new web3.eth.Contract(investorData.abi, investorAddr);
            console.log("loaded ideator address "+result);
        }
    });
}

async function initSetup() {
    const web3 = await getWeb3();
    await initilizeMainContract(web3);
    await getIdeatorContract(web3);
    await getInvestorContract(web3);
    try{
        loadPage();
    }
    catch(error){
        console.log("Load page is not defined by child page :"+error);
    }
}

initSetup();
