let templateFile = await fetch("./component/ListeFavoris/template.html");
let template = await templateFile.text();

let ListeFavoris = {};

ListeFavoris.format = async function () {
  let html = template;
  return html;
};

export { ListeFavoris };