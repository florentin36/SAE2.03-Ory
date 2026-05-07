let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/NavBar/templateLi.html");
let templateLi = await templateFile2.text();

let NavBar = {};

NavBar.format = function(data,dataP){
    let html= templateLi;
    html = html.replace('{{texte}}', data.texte);
    html = html.replace('{{icon}}', data.icon);
    if (data.texte == "Home"){
        html = html.replace('{{action}}', "C.loadHome("+dataP.id+")");
    }
    else{
        html = html.replace('{{action}}', data.action);
    }

    return html;
}

NavBar.formatMany = function(data,dataP){
    let html = template;

    let liste = "";
    for (const dat of data) {
        liste += NavBar.format(dat,dataP);
    }

    html = html.replace("{{navList}}", liste);
    html = html.replace("{{image}}", "profil.svg");
    html = html.replace("{{logo}}", "logo.png");
    html = html.replace("{{action}}", "C.loadHome("+dataP.id+")");
    html = html.replace('{{action2}}', "C.loadProfils()");
    return html;
}

export { NavBar };
