// Classe Produto
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    return Produto;
}());
// Classe Cliente
var Cliente = /** @class */ (function () {
    function Cliente(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    return Cliente;
}());
// Classe Pedido
var Pedido = /** @class */ (function () {
    function Pedido(cliente) {
        this.produtos = [];
        this.cliente = cliente;
    }
    Pedido.prototype.adicionarProduto = function (produto, quantidade) {
        this.produtos.push({ produto: produto, quantidade: quantidade });
    };
    Pedido.prototype.calcularTotal = function () {
        return this.produtos.reduce(function (total, item) {
            return total + (item.produto.getPreco() * item.quantidade);
        }, 0);
    };
    Pedido.prototype.finalizarPedido = function () {
        console.log("\nResumo do pedido de ".concat(this.cliente.getNome(), " (").concat(this.cliente.getEndereco(), "):"));
        this.produtos.forEach(function (item) {
            console.log("- ".concat(item.quantidade, "x ").concat(item.produto.getNome(), " (R$").concat(item.produto.getPreco().toFixed(2), " cada)"));
        });
        console.log("Total do pedido: R$".concat(this.calcularTotal().toFixed(2), "\n"));
    };
    return Pedido;
}());
// Programa Principal
// Criando produtos (Produto 1, Produto 2, ...)
var produtos = [
    new Produto("Produto 1", 100),
    new Produto("Produto 2", 150),
    new Produto("Produto 3", 200),
    new Produto("Produto 4", 250),
    new Produto("Produto 5", 300),
    new Produto("Produto 6", 350),
    new Produto("Produto 7", 400),
    new Produto("Produto 8", 450),
    new Produto("Produto 9", 500),
    new Produto("Produto 10", 550),
    new Produto("Produto 11", 600),
    new Produto("Produto 12", 650),
    new Produto("Produto 13", 700),
    new Produto("Produto 14", 750),
    new Produto("Produto 15", 800),
    new Produto("Produto 16", 850),
    new Produto("Produto 17", 900),
    new Produto("Produto 18", 950),
    new Produto("Produto 19", 1000),
    new Produto("Produto 20", 1050)
];
// Criando clientes (Cliente 1, Cliente 2, ...)
var clientes = [
    new Cliente("Cliente 1", "Endereço 1"),
    new Cliente("Cliente 2", "Endereço 2"),
    new Cliente("Cliente 3", "Endereço 3"),
    new Cliente("Cliente 4", "Endereço 4"),
    new Cliente("Cliente 5", "Endereço 5"),
    new Cliente("Cliente 6", "Endereço 6"),
    new Cliente("Cliente 7", "Endereço 7"),
    new Cliente("Cliente 8", "Endereço 8"),
    new Cliente("Cliente 9", "Endereço 9"),
    new Cliente("Cliente 10", "Endereço 10")
];
// Criando e simulando pedidos
var pedidos = clientes.map(function (cliente) { return new Pedido(cliente); });
// Adicionando produtos aos pedidos
pedidos[0].adicionarProduto(produtos[0], 1);
pedidos[0].adicionarProduto(produtos[1], 2);
pedidos[1].adicionarProduto(produtos[2], 1);
pedidos[1].adicionarProduto(produtos[3], 2);
pedidos[2].adicionarProduto(produtos[4], 1);
pedidos[2].adicionarProduto(produtos[5], 1);
pedidos[3].adicionarProduto(produtos[6], 2);
pedidos[4].adicionarProduto(produtos[7], 1);
pedidos[4].adicionarProduto(produtos[8], 1);
pedidos[5].adicionarProduto(produtos[9], 1);
pedidos[6].adicionarProduto(produtos[10], 2);
pedidos[7].adicionarProduto(produtos[11], 1);
pedidos[7].adicionarProduto(produtos[12], 1);
pedidos[8].adicionarProduto(produtos[13], 1);
pedidos[9].adicionarProduto(produtos[14], 3);
// Finalizando os pedidos
console.log("\n--- Finalizando Pedidos ---");
pedidos.forEach(function (pedido) { return pedido.finalizarPedido(); });
