// criando um sistema login que autentica usuarios e devolve uma mensagem de sucesso.

const NickolasLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  }
  
  const AmandaLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!"
  }
  
  NickolasLogin()
  AmandaLogin()

  // Estamos repetindo duas funçoes para a mesma tarefa, para melhorar isso fazemos:

  const usuarioLogin = (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++){
        array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
  }

  usuarioLogin("Luke")

  // é possivel tbm separar a responsabilidade em outras funços, transcrevendo o codigo acima temos:

  const acesso = (nome) => {
    return `${pessoa} logou com sucesso no sistema!`
  }
  
  const usuarioLogin1 = (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso(pessoa)
  }

  usuarioLogin1("Luke")



