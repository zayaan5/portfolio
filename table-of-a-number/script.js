const numEl =document.getElementById("num")
const btnEl =document.getElementById("btn")
const outputEl =document.getElementById("output")

console.log(btnEl)

btnEl.addEventListener("click",function (){
    const n =numEl.value 
    let output = " ";
    for (i = 1; i < 11; i++){
        output +=` 
        <tr>
        <td>${n}</td>
        <td>x</td>
        <td>${i}</td>
        <td>=</td>
        <td>${n*i}</td>
    </tr>
    `
    }
    outputEl.innerHTML = output
});