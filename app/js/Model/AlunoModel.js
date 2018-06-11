class Aluno {
    constructor(nome, sala, materia, notas) {
        this._nome = nome;
        this._sala = sala;
        this._materia = materia;
        this._notas = notas;
        this._media = this.media(this._notas);
        this._situacaoFinal = this.situacaoFinal();
    }

    media(notas) {
        let notasParaNumero = notas.map((e) => {
            return parseFloat(e);
        })
        let somaDasNotas = notasParaNumero.reduce((total, n) => {
            return total + n;
        })
        return somaDasNotas / notas.length;
    }

    situacaoFinal() {
        return this._media >= 6 ? 'Aprovado' : "Reprovado"
    }
}