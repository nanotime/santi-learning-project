-Concepto aplicado: Recursion con casos base y caso recursivo y manejo de casos limite numeros negativos.

-Cómo lo aplicaste: Defini isEven con dos casos base n === 0 → par, n === 1 → impar y un caso recursivo que llama a isEven n - 2 para cualquier otro numero Probe con 50 y 75, y verifiqué que con -1 la funcion entraba en recursión infinita porque restar 2 a un negativo lo aleja de 0 y 1 en vez de acercarlo. Lo solucione normalizando el número con Math.abs(n) al inicio de la función, antes de evaluar los casos base.

-Qué te costó más: Entender por qué la recursión fallaba con -1 visualizar que la secuencia de llamadas -1, -3, -5, -7... nunca toca un caso base fue la parte que mas me costo pensar hasta trazarlo paso a paso 