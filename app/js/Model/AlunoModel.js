class Aluno {
    constructor(nome, sala, materia, notas) {
        this._nome = nome;
        this._sala = sala;
        this._materia = materia;
        this._notas = notas;
        this._media = this._media(this._notas);
        this._situacaoFinal =  this._media >= 6 ? 'Aprovado' : "Reprovado"
    }

    _media(notas) {
        let notasParaNumero = notas.map((e) => {
            return parseFloat(e);
        })
        let somaDasNotas = notasParaNumero.reduce((total, n) => {
            return total + n;
        })
        return somaDasNotas / notas.length;
    }


    get nome() {
        return this._nome;
    }
    get sala() {
        return this._sala;
    }
    get materia() {
        return this._materia;
    }
    get notas() {
        return this._notas;
    }
    get media() {
        return this._media.toFixed(2);
    }
    get situacaoFinal() {
        return this._situacaoFinal;
    }
}