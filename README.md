# Bienvenido, aqui es donde vas a trabajar en tus ejercicios

La idea es que puedas desarrollar la logica de programacion mas alla de solo ejecutar ordenes y puedas desarrollar y ejercitar tu criterio.

## Flujo de trabajo.

Vamos a programar los mismos ejercicios, cada uno en su rama y luego haremos PR's a main. Cada ejercicio debe venir estructurado de la misma forma, así podremos comparar resultados.

```
# Este es el root del repo:
javi/
santi/
```

Tus ejercicios viven en la carpeta santi
Mis ejercicios viven en la carpeta javi

Los ejercicios deben ser separados por capitulo, siendo la estructura la siguiente:

```
santi/
  package.json
  index.ts (aqui llamas a tus ejercicios)
  ??? // tu configuracion de entorno
  capitulo-[x]/
    ejercicio-[y]/
      [ejercicio].md // (usa el titulo del ejercicio)
      [ejercicio].ts // (usa el titulo del ejercicio)
```

## Detalles

- Tu elijes el runtime que quieres usar
- Los ejercicios deben siempre usar la misma nomenclatura ya definida
- Todos los ejercicios serán ejecutables en terminal, para empezar
- Iremos añadiendo nuevas reglas a medida que avances

## Reglas git

Parte de tu aprendizaje es entender git, y aqui lo vas a poner a prueba.

- Vamos a usar la rama main como fuente de la verdad.
- Todos tus ejercicios serán pull-requests que harás desde una rama hacia main, desde la rama main.
- Las pull request tienen una estructura definida (mas abajo se detalla)
- Los commits deben usar el estandar base: [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Como se ve un PR:

Los PR constan de un titulo, una descripcion y lo que hayas subido:

- Titulo: {Capitulo} - {Nro ejercicio}
- Descripcion:

```markdown
Concepto aplicado: // Breve descripcion del concepto
Como lo aplicaste: // Qué hiciste mas o menos para lograrlo
Que te costó mas: // breve descripcion de lo que consideras fue mas dificil
```
