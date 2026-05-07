import { DataProfils } from "../../data/dataProfils.js";

let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

// format devient async car on doit attendre l'appel réseau verifierFavori
MovieDetail.format = async function (data,uA) {
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
  let favori = await DataProfils.verifierFavori(uA,data.id);
  if (Array.isArray(favori) && favori.length >= 1){
    html = html.replace("{{coeur}}", "coeur_plein.svg");
    html = html.replace("{{handler}}", "C.handlerEnleveFavori("+uA+","+data.id+")");
  } else {
    html = html.replace("{{coeur}}", "coeur.svg");
    html = html.replace("{{handler}}", "C.handlerAjoutFavori("+uA+","+data.id+")");
  }
  return html;
};

export { MovieDetail };