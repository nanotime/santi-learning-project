function range(inicio: number, fin: number, paso?: number): number[] {
    const resultado: number[] = [];
    const pasoReal = paso !== undefined ? paso : (inicio > fin ? -1 : 1);
    if (pasoReal > 0) {
        for (let i = inicio; i <= fin; i += pasoReal) {
            resultado.push(i);
        }
    } else {
        for (let i = inicio; i >= fin; i += pasoReal) {
            resultado.push(i);
        }
    }
    return resultado;
}

function sum(numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
}
