let templateFile = await fetch("./component/SelecProfils/template.html");
let template = await templateFile.text();

let templateFile2 = await fetch("./component/SelecProfils/templateLi.html");
let templateLi = await templateFile2.text();

let SelecProfils = {};

SelecProfils.format = function(data){
    let html= templateLi;
    html = html.replace("{{nom}}", data.nom);
    html = html.replace("{{image}}", data.image);
    html = html.replace("{{action}}", "C.loadHome("+data.id+")");
    return html;
}

SelecProfils.formatMany = function(data){
    let html = template;

    let liste = "";
    for (const dat of data) {
        liste += SelecProfils.format(dat);
    }

    html = html.replace("{{listprofils}}", liste);
    return html;
}

export { SelecProfils };
