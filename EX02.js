var Filme = /** @class */ (function () {
    function Filme($titulo, $genero, $duracao) {
        this.titulo = $titulo;
        this.genero = $genero;
        this.duracao = $duracao;
    }
    Filme.prototype.getTitulo = function () {
        return this.titulo;
    };
    Filme.prototype.getGenero = function () {
        return this.genero;
    };
    Filme.prototype.getDuracao = function () {
        return this.duracao;
    };
    return Filme;
}());
var Cliente = /** @class */ (function () {
    function Cliente($nome, $idade) {
        this.nome = $nome;
        this.idade = $idade;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getIdade = function () {
        return this.idade;
    };
    return Cliente;
}());
var Locacao = /** @class */ (function () {
    function Locacao(cliente) {
        this.filmesAlugados = [];
        this.cliente = cliente;
    }
    Locacao.prototype.alugarFilme = function (filme) {
        this.filmesAlugados.push(filme);
    };
    Locacao.prototype.exibirFilmesAlugados = function () {
        console.log("Filmes alugados por ".concat(this.cliente.getNome(), ":"));
        if (this.filmesAlugados.length === 0) {
            console.log("Nenhum filme alugado.\n");
        }
        else {
            this.filmesAlugados.forEach(function (filme) {
                console.log(" - ".concat(filme.getTitulo(), " (").concat(filme.getGenero(), ", ").concat(filme.getDuracao(), " min)"));
            });
            console.log("\n"); //Linha em branco para melhor visualização
        }
    };
    return Locacao;
}());
// Programa Principal
//criando filmes
var filmes = [
    new Filme("Filme 1", "Ação", 120),
    new Filme("Filme 2", "Comédia", 90),
    new Filme("Filme 3", "Drama", 110),
    new Filme("Filme 4", "Terror", 100),
    new Filme("Filme 5", "Ficção Científica", 130),
    new Filme("Filme 6", "Romance", 95),
    new Filme("Filme 7", "Animação", 80),
    new Filme("Filme 8", "Suspense", 105),
    new Filme("Filme 9", "Aventura", 115),
    new Filme("Filme 10", "Fantasia", 125),
    new Filme("Filme 11", "Musical", 85),
    new Filme("Filme 12", "Histórico", 140),
    new Filme("Filme 13", "Guerra", 150),
    new Filme("Filme 14", "Biografia", 135),
    new Filme("Filme 15", "Esporte", 100),
    new Filme("Filme 16", "Documentário", 90),
    new Filme("Filme 17", "Mistério", 110),
    new Filme("Filme 18", "Western", 120),
    new Filme("Filme 19", "Noir", 95),
    new Filme("Filme 20", "Experimental", 80)
];
//criando clientes
var clientes = [
    new Cliente("Cliente 1", 25),
    new Cliente("Cliente 2", 30),
    new Cliente("Cliente 3", 22),
    new Cliente("Cliente 4", 28),
    new Cliente("Cliente 5", 35),
    new Cliente("Cliente 6", 40),
    new Cliente("Cliente 7", 18),
    new Cliente("Cliente 8", 27),
    new Cliente("Cliente 9", 33),
    new Cliente("Cliente 10", 29)
];
// Criando locações para cada cliente
// A classe Locacao é responsável por gerenciar os filmes alugados por um cliente
// e o cliente que está alugando os filmes.
// Cada cliente tem uma instância da classe Locacao associada a ele, permitindo
// que cada cliente tenha seu próprio histórico de filmes alugados.
var locacoes = clientes.map(function (cliente) { return new Locacao(cliente); });
// Alugar filmes para alguns clientes
locacoes[0].alugarFilme(filmes[0]); // Cliente 1 aluga Filme 1
locacoes[0].alugarFilme(filmes[1]); // Cliente 1 aluga Filme 2
locacoes[1].alugarFilme(filmes[2]); // Cliente 2 aluga Filme 3
locacoes[1].alugarFilme(filmes[3]); // Cliente 2 aluga Filme 4
locacoes[2].alugarFilme(filmes[4]); // Cliente 3 aluga Filme 5
locacoes[2].alugarFilme(filmes[5]); // Cliente 3 aluga Filme 6
locacoes[3].alugarFilme(filmes[6]); // Cliente 4 aluga Filme 7
locacoes[3].alugarFilme(filmes[7]); // Cliente 4 aluga Filme 8
locacoes[4].alugarFilme(filmes[8]); // Cliente 5 aluga Filme 9
locacoes[4].alugarFilme(filmes[9]); // Cliente 5 aluga Filme 10
locacoes[5].alugarFilme(filmes[10]); // Cliente 6 aluga Filme 11
locacoes[5].alugarFilme(filmes[11]); // Cliente 6 aluga Filme 12   
locacoes[6].alugarFilme(filmes[12]); // Cliente 7 aluga Filme 13
locacoes[6].alugarFilme(filmes[13]); // Cliente 7 aluga Filme 14
locacoes[7].alugarFilme(filmes[14]); // Cliente 8 aluga Filme 15
locacoes[7].alugarFilme(filmes[15]); // Cliente 8 aluga Filme 16
locacoes[8].alugarFilme(filmes[16]); // Cliente 9 aluga Filme 17
locacoes[8].alugarFilme(filmes[17]); // Cliente 9 aluga Filme 18
locacoes[9].alugarFilme(filmes[18]); // Cliente 10 aluga Filme 19
locacoes[9].alugarFilme(filmes[19]); // Cliente 10 aluga Filme 20
// Exibir lista de clientes com os filmes que eles alugaram
console.log("\n--- Filmes alugados por cada cliente ---");
locacoes.forEach(function (locacao) { return locacao.exibirFilmesAlugados(); });
