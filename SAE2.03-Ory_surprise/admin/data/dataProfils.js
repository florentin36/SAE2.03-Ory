let HOST_URL = "https://mmi.unilim.fr/~ory3/SAE2.03-Ory/SAE2.03-Ory_surprise";

let DataProfils = {};

DataProfils.requestProfils = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readprofils");
    let data = await answer.json();
    return data; 
}

DataProfils.ajoutProfil = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=ajoutprofil", config);
    let data = await answer.json();
    return data;
}

DataProfils.updateProfil = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=updateprofil", config);
    let data = await answer.json();
    return data;
}

export {DataProfils};