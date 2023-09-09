function validaDados(){
    //Verifica se nome não está em branco
    let vnome = document.getElementById('nome')
    if(vnome.value == ''){
        alert('Informe um nome!')
        vnome.focus()   //Caso o nome esteja em branco, posiciona o cursor sobre o campo a ser preenchido
        return          //Esse retorno interrompe o cadastro, impedindo que se prossiga sem cadastrar o nome
    }
    
    //Verifica se idade não está em branco
    let vidade = document.getElementById('idade')
    if(vidade.value == ''){
        alert('Informe a idade!')
        vidade.focus()   //Caso a idade esteja em branco, posiciona o cursor sobre o campo a ser preenchido
        return          //Esse retorno interrompe o cadastro, impedindo que se prossiga sem cadastrar o nome
    } 
}