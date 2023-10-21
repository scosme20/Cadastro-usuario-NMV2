class Membro {
    constructor(nome, email, patrimonio, pais, cpf, datNascimento, estilo) {
      this.nome = nome;
      this.email = email;
      this.patrimonio = patrimonio;
      this.pais = pais;
      this.cpf = cpf;
      this.datNascimento = datNascimento;
      this.estilo = estilo;
    }
  }
  
  class gerenciadorMembros {
    constructor() {
      this.novosNm = [];
      this.modal = document.getElementById('modal');
      this.fecharModal = document.getElementById('fecharModal');
      this.form = document.getElementById('form');
      this.nomeInput = document.getElementById('nome');
      this.emailInput = document.getElementById('email');
      this.patrimonioInput = document.getElementById('patrimonio');
      this.paisInput = document.getElementById('pais');
      this.cpfInput = document.getElementById('cpf');
      this.datNascimentoInput = document.getElementById('datNascimento');
      this.estiloInput = document.getElementById('estilo');
      this.botaoSalvar = document.getElementById('salvar');
      this.botaoCancelar = document.getElementById('cancelar');
      this.tableBody = document.querySelector('tbody');
  
      this.cadastrarMembro = document.getElementById('cadastrar');
      this.editingIndex = -1;
  
      this.fecharModal.addEventListener('click', () => this.fechar());
      this.botaoCancelar.addEventListener('click', () => this.opcaoCancelar());
      this.botaoSalvar.addEventListener('click', () => this.opcaoSalvar());
      this.cadastrarMembro.addEventListener('click', () => this.abrir());
    }
  
    abrir() {
      this.modal.classList.add('active');
    }
  
    fechar() {
      this.modal.classList.remove('active');
      this.formaOriginal();
    }
  
    formaOriginal() {
      this.nomeInput.value = '';
      this.emailInput.value = '';
      this.patrimonioInput.value = '';
      this.paisInput.value = '';
      this.cpfInput.value = '';
      this.datNascimentoInput.value = '';
      this.estiloInput.value = '';
      this.editingIndex = -1;
    }
  
    opcaoSalvar() {
      const nome = this.nomeInput.value;
      const email = this.emailInput.value;
      const patrimonio = this.patrimonioInput.value;
      const pais = this.paisInput.value;
      const cpf = this.cpfInput.value;
      const datNascimento =this.datNascimentoInput.value;
      const estilo = this.estiloInput.value
  
      if (nome && email && patrimonio && pais && cpf && datNascimento && estilo) {
        if (this.editingIndex === -1) {
          const futuro = new Membro(nome, email, patrimonio, pais, cpf, datNascimento, estilo);
          this.novosNm.push(futuro);
        } else {
          const milionario = this.novosNm[this.editingIndex];
          milionario.nome = nome;
          milionario.email = email;
          milionario.patrimonio = patrimonio;
          milionario.pais = pais;
          milionario.cpf = cpf;
          milionario.datNascimento = datNascimento;
          milionario.estilo = estilo;
        }
  
        this.fechar();
        this.tabelaDados();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }
  
    opcaoCancelar() {
      this.fechar();
    }
  
    editarMembro(index) {
      this.editingIndex = index;
      const outlier = this.novosNm[index];
      this.nomeInput.value = outlier.nome;
      this.emailInput.value = outlier.email;
      this.patrimonioInput.value = outlier.patrimonio;
      this.paisInput.value = outlier.pais;
      this.cpfInput.value = outlier.cpf;
      this.datNascimentoInput.value = outlier.datNascimento;
      this.cpfInput.value = outlier.estilo;
      this.abrir();
    }
  
    deletarMembro(index) {
      this.novosNm.splice(index, 1);
      this.tabelaDados();
    }
  
    tabelaDados() {
      this.tableBody.innerHTML = '';
  
      this.novosNm.forEach((nomade, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${nomade.nome}</td>
          <td>${nomade.email}</td>
          <td>${nomade.patrimonio}</td>
          <td>${nomade.pais}</td>
          <td>${nomade.cpf}</td>
          <td>${nomade.datNascimento}</td>
          <td>${nomade.estilo}</td>
          <td>
            <button class="button green" onclick="GerenciadorMembros.editarMembro(${index})">Editar</button>
            <button class="button red" onclick="GerenciadorMembros.deletarMembro(${index})">Excluir</button>
          </td>
        `;
        this.tableBody.appendChild(row);
      });
    }
  }
  
  const GerenciadorMembros = new gerenciadorMembros();  

































