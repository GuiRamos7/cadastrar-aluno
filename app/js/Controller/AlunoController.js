class AlunoController {
    constructor() {
        // INPUT'S DO DOM
        this._inputNome = $(".nome-input");
        this._inputSala = $(".sala-input");
        this._inputMateria = $(".materia-input");
        this._inputNota1 = $(".nota1-input");
        this._inputNota2 = $(".nota2-input");
        this._inputNota3 = $(".nota3-input");
        this._inputNota4 = $(".nota4-input");



    }

    adiciona() {
        event.preventDefault()
        console.log(this._criaAluno());
    }

    _criaAluno() {
        return new Aluno(
            this._inputNome.value,
            this._inputSala.value,
            this._inputMateria.value,
            new NotasHelper().notas(
                this._inputNota1.value,
                this._inputNota2.value,
                this._inputNota3.value,
                this._inputNota4.value
            )
        )
    }

}