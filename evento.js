let listaDeParticipantes = ["Antônio", "Marina", "Felipe", "André"]
let numeroDeparticipantes = listaDeParticipantes.length
let cadastro = 0
console.log(numeroDeParticipantes)


for (let index = 0; index < numeroDeparticipantes; index++) {
    const Participante = listaDeParticipante[index];
    console.log(Participante)
}

do{
    console.log(listaDeParticipantes[cadastro])
    cadastro++
} while (cadastro < numeroDeparticipantes)


while (cadastro < numeroDeParticipantes){
    console.log(listaDeParticipantes[cadastro])
    cadastro++
}

for (let numero = 1; numero <= 10; numero++){
    console.log(numero);
}

listaDeParticipantes.push("Antônio")
console.log(listaDeParticipantes)

if (numeroDeParticipantes < 6){
    listaDeParticipantes.push ("Antônio")
    console.log(listaDeParticipantes) 
}

let listaDeParticipantes_final = ["Antônio", "Marina", "Felipe", "André", "Rafael", "Milena"]
let numeroDeParticipantes_final = listaDeParticipantes_final.length

if (numeroDeParticipantes_final < 6){
    listaDeParticipantes_final.push ("Antônio")
    console.log(listaDeParticipantes_final)
} else {
    console.log("Impossivel adicionar participantes!")
}
