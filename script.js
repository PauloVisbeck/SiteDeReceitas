function validaDados(){
    //Verifica se nome não está em branco
    let vnome = document.getElementById('nome')
    if(vnome.value == ''){
        alert('Informe um nome!')
        vnome.focus()   //Caso o nome esteja em branco, posiciona o cursor sobre o campo a ser preenchido
        return          //Esse retorno interrompe o cadastro, impedindo que se prossiga sem cadastrar o nome
    }
    
    //Verifica se nascimento não está em branco
    let vNascimento = document.getElementById('nascimento')
    if(vNascimento.value == ''){
        alert('Informe data de nascimento!')
        vNascimento.focus()   //Caso a idade esteja em branco, posiciona o cursor sobre o campo a ser preenchido
        return          //Esse retorno interrompe o cadastro, impedindo que se prossiga sem cadastrar o nome
    }
    
    //Verifica se idade não está em branco
    let vIdade = document.getElementById('idade')
    if(vIdade.value == ''){
        alert('Informe a idade!')
        vIdade.focus()   //Caso a idade esteja em branco, posiciona o cursor sobre o campo a ser preenchido
        return          //Esse retorno interrompe o cadastro, impedindo que se prossiga sem cadastrar o nome
    }
    else if (vIdade.value < 0 || vIdade.value >=130){
        alert('Idade incorreta! Informe uma idade válida...')
        vIdade.focus()
        return
    }
}