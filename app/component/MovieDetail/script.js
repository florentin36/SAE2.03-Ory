let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (data) {
  let html = template;
  html = html.replace("{{image}}", data.image);
  html = html.replace("{{titre}}", data.name);
  html = html.replace("{{realisateur}}", data.director);
  html = html.replace("{{date}}", data.year);
  html = html.replace("{{length}}", data.length);
  html = html.replace("{{categorie}}", data.id_category);
  html = html.replace("{{url}}", data.trailer);
  html = html.replace("{{age}}", data.min_age);
  html = html.replace("{{synopsis}}", data.description);
  return html;
};

export { MovieDetail };