class AlunoView{
    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model){
        return `
        <table>
            <thead>
                <td>Aluno</td>
                <td>Sala</td>
                <td>Materia</td>
                <td>1°bimestre</td>
                <td>2°bimestre</td>
                <td>3°bimestre</td>
                <td>4°bimestre</td>
                <td>Média</td>
                <td>Situação Final</td>
            </thead>
            <tbody>
            ${model.listaDeAlunos.map(n => 
            `
                    
                <tr class="abv">
                    <td>${n.nome}</td>
                    <td>${n.sala}</td>
                    <td>${n.materia}</td>
                    <td>${n.notas[0]}</td>
                    <td>${n.notas[1]}</td>
                    <td>${n.notas[2]}</td>
                    <td>${n.notas[3]}</td>
                    <td>${n.media}</td>
                    <td>${n.situacaoFinal}</td>
                </tr>

            `
            )}

        </tbody>

    </table>
        
        `
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}