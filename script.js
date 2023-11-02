function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // TUDO ISSO PODE SER SIMPLIFICADO POR OUTRO CÓDIGO
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }

  //-------------------------------------------------------------

  const img = document.querySelector("#profile img")
  //Troca de imagem com a condição;
  if (html.classList.contains("light")) {
    // Se tiver light mode, add a imagem light;
    img.setAttribute('src', './assets/assets/Avatar.light.png')
  } else {
    img.setAttribute('src', './assets/assets/avatar.png')
    // Se tiver sem o light mode, manter imagem padrão
  }
}