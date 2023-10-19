numUm = float(input("Insira o primeiro número: "))

numDois = float(input("Insira o segundo número: "))

sinal = input("Qual é o tipo de equação que você quer fazer? (soma, subtração, multiplicação ou divisão): ")

def calcularSoma():
    print(numUm + numDois)

def calcularSub():
    print(numUm - numDois)

def calcularMulti():
    print(numUm * numDois)

def calcularDiv():
    print(numUm / numDois)

if sinal == "soma":
    calcularSoma()

if sinal == "subtração":
    calcularSub()

if sinal == "multiplicação":
    calcularMulti()

if sinal == "divisão":
    calcularDiv()