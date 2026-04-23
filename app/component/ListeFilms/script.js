let templateFile = await fetch('./component/ListeFilms/template.html');
let template = await templateFile.text();

let templateFileLi = await fetch('./component/ListeFilms/templateLi.html');
let templateLi = await templateFileLi.text();


let ListeFilms = {};

ListeFilms.format = function(film){
    let html= templateLi;
    html = html.replace('{{nomFilm}}', film.name);
    html = html.replace("{{imageFilm}}", film.image);
    return html;
}

ListeFilms.formatMany = function(data){
    let html = template;

    let liste = "";
    for (const film of data) {
        liste += ListeFilms.format(film);
    }

    html = html.replace("{{listeItems}}", liste);
    return html;
}

export {ListeFilms};