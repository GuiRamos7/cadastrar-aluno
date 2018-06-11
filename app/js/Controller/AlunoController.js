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



        //Criando Lista de alunos
        this._listaDeAlunos = new ListaDeAlunos()
        
        //Criando a view
        this._alunoView = new AlunoView($(".tabela-alunos"));


        this._alunoView.update(this._listaDeAlunos);

    }

    adiciona(event) {
        event.preventDefault()
        this._listaDeAlunos.adicionaAluno(this._criaAluno());
        debugger;
        this._alunoView.update(this._listaDeAlunos);
        this._limpaFormulario();

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
    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputSala.value = '';
        this._inputMateria.value = '';
        this._inputNota1.value = '';
        this._inputNota2.value = '';
        this._inputNota3.value = '';
        this._inputNota4.value = '';
        this._inputNome.focus();
    }

}