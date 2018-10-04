//buscando aluno pelo id
const aluno = document.querySelector("#primeiro-da-lista");
//console.log(aluno);

//buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-Notaum");
const primeiraNota = tdPrimeiraNota.textContent;
console.log(primeiraNota);
// buscando o segundo valor
const tdSegundaNota = aluno.querySelector(".info-notadois");
const SegundaNota = tdSegundaNota.textContent;
console.log(tdSegundaNota);

const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(SegundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;

//

const todosOsAlunos = document.querySelectorAll(".aluno");
for (let i = 0; i < todosOsAlunos.length; i++) {
   // console.log(todosOsAlunos[i]);
    const aluno = todosOsAlunos[i];
    const tdPrimeiraNota = aluno.querySelector(".info-notaum");
    const primeiraNota = tdPrimeiraNota.textContent;
    console.log(primeiraNota);
    const tdSegundaNota = aluno.querySelector(".info-notadois");
    const SegundaNota = tdSegundaNota.textContent;
    console.log(tdSegundaNota);
    const mediaFinal = aluno.querySelector(".info-media");
    const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(SegundaNota)) / 2;
    mediaFinal.textContent = mediaCalculada;
}
