function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    /*Document é a parte visível do HTML e está seguido de um ponto, pois é um objeto JS. O documentElemnt permite acessar a tag HTML que é  identificador do objeto.*/ 

    // pegar a tag img
    const img = document.querySelector("#profile img")
    
    // substituir a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assests/fotoSorrindo.jpg")
        img.setAttribute("alt", "Foto de Emanuel Pratts sorrindo com uma camisa off white e fundo preto.")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assests/Emanuel_foto2.jpeg")
        img.setAttribute("alt", "Foto de Emanuel Pratts sorrindo com os lábios fechados com uma camiseta polo branca e fundo branco off white.")
    }
}