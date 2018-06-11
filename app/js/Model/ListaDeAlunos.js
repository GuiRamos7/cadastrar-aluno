class ListaDeAlunos{
    constructor() {
        this._listaAlunos = [];
    }

    adicionaAluno(aluno) {
        this._listaAlunos.push(aluno);
    }

    get listaDeAlunos() {
        return [].concat(this._listaAlunos);
    }
}