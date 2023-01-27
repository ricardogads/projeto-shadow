const botaoTrailer = document.querySelector(".botao-trailer");console.log(botaoTrailer);
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer")
   modal.classList.add("aberto");
   video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "");
})







