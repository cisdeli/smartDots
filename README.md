# SmartDotsGA
SmartDotsGA é o projeto final desenvolvido para a disciplina SSC0713-Sistemas-Evolutivos-Aplicados-a-Robótica. Inspirado no [Smart Rockets](https://shivank1006.github.io/Smart-Rockets/), o projeto tem como intuito aplicar os conceitos estudados em sala de aula e analisar como o algoritmo resolve o problema.

Vídeo de Apresentação: 

## to-Do
- [x] Resize application window and create a central area for the game.
- [x] Rename project. (espero n ter esquecido nada, se quiser olhar)
- [x] Fix bugs with death and successful dots info.
- [x] Create graphical representation object.
- [x] Center top info with bottom graph.
- [x] Fix or hide graph for population sizes != 100.
- [x] Place better objects.
- [x] Create more selection methods.
- [ ] Generate graph with data from all 3 selection methods.
- [ ] Reorganize files into folders.
- [ ] Document code.
- [x] Check current selection method.

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
- Elitismo: o melhor indíviduo (que possui maior fitness) cruza com todos os outros indíviduos.
- Torneio de 2: são realizados sucessivos torneios para definir os pais que cruzarão.
- Roleta: são selecionados n indivíduos aleatoriamente a partir de uma distribuição com probabilidades proporcionais ao fitness de cada indivíduo. Ou seja, indivíduos com maior fitness tendem a reproduzir com mais frequência que indivíduos com menor fitness, portanto eles têm maior chance de serem selecionados.

---

### Crossover
O crossover é feito utilizando o método tradicional de dividir os cromossos dois pais ao meio, gerando assim um filho que herda as características de ambos.

---

### Mutação
A mutação consiste na troca do valor de um gene do cromossomo. Portanto, para cada gene do cromossomo, a taxa de mutação define a probabilidade dessa troca ocorrer.

## Análise dos resultados


## Implementação
O projeto foi desenvolvido na linguagem de programação JavaScript, com auxílio da biblioteca p5 na parte gráfica.
A aplicação foi desenvolvida para ser usada em um monitor 16:9 com o browser em fullscreen.


