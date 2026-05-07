let templateFile = await fetch('./component/MovieCategory/template.html');
let template = await templateFile.text();

let templateFileLi = await fetch('./component/MovieCategory/templateLi.html');
let templateLi = await templateFileLi.text();


let MovieCategory = {};

MovieCategory.format = function(data){
    let html= templateLi;
    html = html.replace('{{nomCateg}}', data.name);
    html = html.replace('{{idCateg}}', data.id);
    return html;
}

MovieCategory.formatMany = function(data){
    let html = template;

    let liste = "";
    for (const dt of data) {
        liste += MovieCategory.format(dt);
    }

    html = html.replace("{{listCategory}}", liste);
    return html;
}

export {MovieCategory};