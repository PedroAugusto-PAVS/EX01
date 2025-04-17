var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    return Usuario;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.acervo.push(livro);
    };
    Biblioteca.prototype.adicionarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    Biblioteca.prototype.emprestarLivro = function (livro, usuario) {
        var livroDisponivel = this.acervo.some(function (l) { return l.getTitulo() === livro.getTitulo(); });
        var usuarioCadastrado = this.usuarios.some(function (u) { return u.getNome() === usuario.getNome(); });
        if (livroDisponivel && usuarioCadastrado) {
            console.log("Livro \"".concat(livro.getTitulo(), "\" emprestado para ").concat(usuario.getNome(), "!"));
        }
        else {
            console.log("Erro: Livro ou usuário não encontrado na biblioteca.");
        }
    };
    return Biblioteca;
}());
// Programa principal
var biblioteca = new Biblioteca();
// Adicionando livros
var livros = [
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
livros.forEach(function (livro) { return biblioteca.adicionarLivro(livro); });
// Adicionando usuários
var usuarios = [
    new Usuario("Alice", 25),
    new Usuario("Bruno", 30),
    new Usuario("Carla", 20),
    new Usuario("Daniel", 27),
    new Usuario("Eva", 22)
];
usuarios.forEach(function (usuario) { return biblioteca.adicionarUsuario(usuario); });
// Realizando empréstimos
biblioteca.emprestarLivro(livros[1], usuarios[0]); // 1984 para Alice
biblioteca.emprestarLivro(livros[2], usuarios[2]); // Senhor dos Anéis para Carla
biblioteca.emprestarLivro(livros[3], usuarios[1]); // Harry Potter para Bruno
biblioteca.emprestarLivro(livros[5], usuarios[4]); // Pequeno Príncipe para Eva
