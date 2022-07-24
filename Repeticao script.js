const dados = [
    {
         Doador: "A",
         receptores: ["A", "AB"],


    },
    {
        Doador: "B",
        receptores: ["B", "AB"],

    },

    {
        Doador: "AB",
        receptores: ["AB"],

    },

    {
        Doador: "O",
        receptores: ["A", "B", "AB", "O"]
    }


]

function leiaInputTipoSanguineo(){
    const Doador = document.getElementById("tipoSanguineoDoador").value;
    const selectReceptor = document.getElementById("tipoSanguineoReceptor").value;
    const resultado = document.getElementById("resultado");

    const doador = buscaDoador(selectDoador.value);
    const eValido = existeReceptor(selectReceptor.doador.receptores);

    if (eValido) {
        resultado.textContent = "E valido";
    } else {
        resultado.textContent = "nao e valido";
    }
}


function tipoSanguineoDoador(Doador) {
    for(let i =0;i< dados.length;i++){
        selectoDados = dados[i].tipoSanguineoDoador;
        if(Doador==selectoDados){
         let receptor =dados[i].tipoSanguineoReceptor;
         return recebedor;
    }
}

}function tipoSanguineoReceptor(Receptor,recebedor){
    for (let i= 0;i< dados.length;i++){
        selectoDados==dados[i].receptoresTipoSanguineo;
        if(Receptor==selectoDados){
          
       return "E valido";
}else{
   return "nao e valido";
}
}

}
