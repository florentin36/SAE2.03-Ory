let templateFile = await fetch('./component/ProfilsUpdateForm/template.html');
let template = await templateFile.text();

let templateFile2 = await fetch('./component/ProfilsUpdateForm/templateLi.html');
let templateLi = await templateFile2.text();

let ProfilsUpdateForm = {};

ProfilsUpdateForm.format = function(dataP){
    let html= templateLi;
    html = html.replace('{{nom}}', dataP.nom);
    html = html.replace("{{id}}", dataP.id);
    return html;
}

ProfilsUpdateForm.formatMany = function (handler,data) {
  let html = template;

  let liste = "";
    for (const dataP of data) {
        liste += ProfilsUpdateForm.format(dataP);
    }

  html = html.replace("{{listProfil}}", liste);
  html = html.replace("{{handler}}", handler);
  return html;
};

export{ ProfilsUpdateForm };
