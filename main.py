"""This is an python code"""

notasAlunos = []

for i in range (3):
    RM = int(input("Digite o código do aluno:\n"))
    nota = float(input("Digite a nota do aluno:\n"))
    resultado = (RM,nota)

    notasAlunos.append(resultado)

print("Quantidade de notas inseridas:",len(notasAlunos))

for x in notasAlunos:
    print("Código:", x[0],"Nota:", x[1])
