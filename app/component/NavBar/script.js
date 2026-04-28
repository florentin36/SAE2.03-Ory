let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/NavBar/templateLi.html");
let templateLi = await templateFile2.text();

let NavBar = {};

NavBar.format = function(data){
    let html= templateLi;
    html = html.replace('{{texte}}', data.texte);
    html = html.replace('{{action}}', data.action);
    html = html.replace('{{lien}}', data.lien);
    return html;
}

NavBar.formatMany = function(data){
    let html = template;

    let liste = "";
    for (const dat of data) {
        liste += NavBar.format(dat);
    }

    html = html.replace("{{navList}}", liste);
    return html;
}

export { NavBar };
