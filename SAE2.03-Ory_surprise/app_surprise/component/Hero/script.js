let templateFile = await fetch("./component/Hero/template.html");
let template = await templateFile.text();

let Hero = {};

Hero.format = async function (data) {
  let html = template;
  html = html.replace("{{image}}",data.image);
  html = html.replace("{{titre}}",data.name);
  return html;
};

export { Hero };