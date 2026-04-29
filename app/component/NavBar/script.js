let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/NavBar/templateLi.html");
let templateLi = await templateFile2.text();

let NavBar = {};

NavBar.format = function(data){
    let html= templateLi;
    html = html.replace('{{texte}}', data.texte);
    html = html.replace('{{action}}', data.action);
    return html;
}

NavBar.formatMany = function(data,dataP){
    let html = template;

    let liste = "";
    for (const dat of data) {
        liste += NavBar.format(dat);
    }

    html = html.replace("{{navList}}", liste);
    html = html.replace("{{image}}", dataP.image);
    return html;
}

export { NavBar };
