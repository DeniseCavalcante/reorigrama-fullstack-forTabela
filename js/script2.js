
const alunoAll = document.querySelectorAll(".aluno");
//const aluno = document.querySelector(".aluno");
//console.log(alunoAll);
//console.log(aluno);

for (let i = 0; i < alunoAll.length; i++) {
    const aluno = alunoAll[i];
    const tdNotaPrimeira = aluno.querySelector(".info-notaum");
    const notaPrimeira = tdNotaPrimeira.textContent;

    const tdNotaSegunda = aluno.querySelector(".info-notadois");
    const notaSegunda = tdNotaSegunda.textContent;

    const tdInfoMedia = aluno.querySelector(".info-media");
    const infoMedia = (parseFloat(notaSegunda) + parseFloat(notaPrimeira)) / 2;
    tdInfoMedia.textContent = infoMedia;

}