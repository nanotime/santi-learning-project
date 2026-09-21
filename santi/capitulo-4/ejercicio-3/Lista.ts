function arrayToList(arr: any[]) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list: any): any[] {
    let nodoActual = list;
    const resultado: any[] = [];
    while (nodoActual !== null) {
        resultado.push(nodoActual.value);
        nodoActual = nodoActual.rest;
    }
    return resultado;

}

function prepend(value: any, list: any) {
    return { value: value, rest: list };
}

function nth(list: any, n: number): number | undefined {
    let nodoActual = list;
    for (let i = 0; i < n; i++) {
        if (nodoActual === null) {
            return undefined;
        }
        nodoActual = nodoActual.rest;
    }
    return nodoActual?.value;
}