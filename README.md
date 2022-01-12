# SmartRocketsGA
SmartRocketsGA é o projeto final desenvolvido para a disciplina SSC0713-Sistemas-Evolutivos-Aplicados-a-Robótica. Inspirado no [Smart Rockets](https://shivank1006.github.io/Smart-Rockets/), o projeto tem como intuito aplicar os conceitos estudados em sala de aula e analisar como o algoritmo resolve o problema.

Vídeo de Apresentação: 

## Autores

- [Pedro Henrique Magalhaes Cisdeli](https://github.com/sprmbng) - 10289804
- [Maria Eduardo Kawakami Moreira](https://github.com/madukm) - 11218751

## O problema

O problema consiste em uma população de bolinhas, no qual cada bolinha tem por objetivo chegar até um alvo definido sem colidir com os obstáculos no caminho.

### Fitness
O fitness é calculado baseado no inverso da distância euclidiana entre a bolinha e o alvo, ou seja, quanto mais perto do alvo, maior o fitness. Caso uma bolinha alcance o alvo, seu fitness é multiplicado por 10.

---

### Seleção
Foram utilizados diferentes métodos de seleção a fim de comparar qual se adeque melhor ao nosso problema:
- Roleta: são selecionados n indivíduos aleatoriamente a partir de uma distribuição com probabilidades proporcionais ao fitness de cada indivíduo. Ou seja, indivíduos com maior fitness tendem a reproduzir com mais frequência que indivíduos com menor fitness, portanto eles têm maior chance de serem selecionados.

---

### Crossover
O crossover é calculado pela média do fitness de dois indivíduos aleatórios, gerando assim um filho que herda as características de ambos.

---

### Mutação
A mutação consiste na troca do valor de um gene do cromossomo. A taxa de mutação define a probabilidade dessa troca ocorrer.


## Análise dos resultados


