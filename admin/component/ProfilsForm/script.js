let templateFile = await fetch('./component/ProfilsForm/template.html');
let template = await templateFile.text();

let ProfilsForm = {};

ProfilsForm.format = function (handler) {
  let html = template;
  html = html.replace("{{handler}}", handler);
  return html;
};

export{ ProfilsForm };
