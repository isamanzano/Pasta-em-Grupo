function verificarNavio(mapa: number[][]): boolean {
    for (var linha of mapa) {
        if (linha.includes(1)) {
            return true;
        }
    }
    return false;
}
