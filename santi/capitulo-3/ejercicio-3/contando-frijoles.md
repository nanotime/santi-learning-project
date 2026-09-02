-Concepto aplicado: Recorrido de cadenas con indices comparacion de caracteres y reutilizacion de codigo mediante generalización de funciones.

-Cómo lo aplicaste: Primero escribí contarBs, que recorre la cadena con un for y compara cada caracter contra "B" luego generalice esa logica en contarCaracter que recibe el caracter a buscar como segundo parametro finalmente reescribi contarBs para que ya no tenga su propio ciclo sino que delegue el conteo llamando a contarCaractercadena, "B".

-Qué te costó más: Al inicio duplicaba la misma logica en ambas funciones sin darme cuenta entender que contarBs era solo un caso particular de contarCaracter y que debía delegar en vez de repetir el ciclo fue lo que más me costó identificar.