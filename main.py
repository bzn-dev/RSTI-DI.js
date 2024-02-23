"""This is an python code"""

"""notasAlunos = []

for i in range (3):
    RM = int(input("Digite o código do aluno:\n"))
    nota = float(input("Digite a nota do aluno:\n"))
    resultado = (RM,nota)

    notasAlunos.append(resultado)

print("Quantidade de notas inseridas:",len(notasAlunos))

for x in notasAlunos:
    print("Código:", x[0],"Nota:", x[1])

biblioteca = {
    'nome': "Nome da pessoa",
    'idade': "Idade da pessoa"
}

print(biblioteca["nome"])"""

import os

mensagens = []

nome = input("Nome: ")

while True:

    os.system('cls')

    if len(mensagens) > 0:
        for m in mensagens:
            print(m['nome'], "-",m['texto'])
                  
    print('-------------------------------------')

    texto = input("Mensagem: ")
    if texto == "fim":
        break
        
    mensagens.append({
        "nome": nome,
        "texto": texto
    })