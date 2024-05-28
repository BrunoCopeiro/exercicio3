let modelo, distancia, tempo, velocidadeM;

modelo = prompt("Digite o modelo de seu Veiculo:")
distancia= parseFloat(prompt("Digite a distancia percorida (em km)"));
tempo= parseFloat(prompt("Digite o tempo percorida (em horas)"));
velocidadeM= distancia/ tempo;

alert(" Modelo do veiculo: " + modelo +   " Distancia percorrida: "   + distancia + "km"  
+ "  tempo percorrido: "  + tempo + "horas"  + "  Sua velocidade media foi de: " + velocidadeM);