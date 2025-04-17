class Livro{
    private titulo: string; //representa o nome do livro
    private autor: string; //representa o nome do autor
    private anoPublicacao: number; //representa o ano de publicação do livro

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getAnoPublicacao(): number {
        return this.anoPublicacao;
    }
}

class Usuario {
    private nome: string; //representa o nome do usuário
    private idade: number; //representa a idade do usuário

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }
}

class Biblioteca {
    private acervo: Livro[] = [];
    private usuarios: Usuario[] = [];

    public adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    public adicionarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    public emprestarLivro(livro: Livro, usuario: Usuario): void {
        const livroDisponivel = this.acervo.some(l => l.getTitulo() === livro.getTitulo());
        const usuarioCadastrado = this.usuarios.some(u => u.getNome() === usuario.getNome());

        if (livroDisponivel && usuarioCadastrado) {
            console.log(`Livro "${livro.getTitulo()}" emprestado para ${usuario.getNome()}!`);
        } else {
            console.log("Erro: Livro ou usuário não encontrado na biblioteca.");
        }
    }
}

// Programa principal
const biblioteca = new Biblioteca();

// Adicionando livros
const livros = [
    new Livro("Dom Casmurro", "Machado de Assis", 1899),
    new Livro("1984", "George Orwell", 1949),
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954),
    new Livro("Harry Potter", "J.K. Rowling", 1997),
    new Livro("A Revolução dos Bichos", "George Orwell", 1945),
    new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943),
    new Livro("O Hobbit", "J.R.R. Tolkien", 1937),
    new Livro("It: A Coisa", "Stephen King", 1986),
    new Livro("Orgulho e Preconceito", "Jane Austen", 1813),
    new Livro("O Código Da Vinci", "Dan Brown", 2003)
];

livros.forEach(livro => biblioteca.adicionarLivro(livro));

// Adicionando usuários
const usuarios = [
    new Usuario("Alice", 25),
    new Usuario("Bruno", 30),
    new Usuario("Carla", 20),
    new Usuario("Daniel", 27),
    new Usuario("Eva", 22)
];

usuarios.forEach(usuario => biblioteca.adicionarUsuario(usuario));

// Realizando empréstimos
biblioteca.emprestarLivro(livros[1], usuarios[0]); // 1984 para Alice
biblioteca.emprestarLivro(livros[2], usuarios[2]); // Senhor dos Anéis para Carla
biblioteca.emprestarLivro(livros[3], usuarios[1]); // Harry Potter para Bruno
biblioteca.emprestarLivro(livros[5], usuarios[4]); // Pequeno Príncipe para Eva