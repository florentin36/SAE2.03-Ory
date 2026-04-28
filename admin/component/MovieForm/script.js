let templateFile = await fetch('./component/MovieForm/template.html');
let template = await templateFile.text();

let templateFile2 = await fetch('./component/MovieForm/templateLi.html');
let templateLi = await templateFile2.text();

let MovieForm = {};

MovieForm.format = function(categ){
    let html= templateLi;
    html = html.replace('{{name}}', categ.name);
    html = html.replace("{{id}}", categ.id);
    return html;
}

MovieForm.formatMany = function (handler,data) {
  let html = template;

  let liste = "";
    for (const categ of data) {
        liste += MovieForm.format(categ);
    }

  html = html.replace("{{listCategory}}", liste);
  html = html.replace("{{handler}}", handler);
  return html;
};

export{ MovieForm };
