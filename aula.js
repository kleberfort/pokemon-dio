//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Classe que calcula o frete com base na taxa fixa e taxa por produto
class CalculadoraFrete {

    taxaFixa;
    taxaPorProduto;
    constructor(taxaFixa, taxaPorProduto) {
       // TODO: Armazene a taxa fixa de frete na propriedade `taxaFixa`:

       this.taxaFixa = taxaFixa;
       this.taxaPorProduto = taxaPorProduto;

       // TODO: Armazenar a taxa por produto na propriedade `taxaPorProduto`
        
    }

    calcularFrete(listaProdutos) {
        const produtos = listaProdutos.split(', ');
        
        //.reduce() → é um método que percorre o array e vai acumulando um resultado em uma variável (o acumulador).
        const quantidadeTotal = produtos.reduce((total, produto) => {
            const quantidade = parseInt(produto.split(':')[1], 10);
            return total + quantidade;
        }, 0);
        
        // TODO: Calcule o valor total do frete:

        const freteTotal = this.taxaFixa + (this.taxaPorProduto * quantidadeTotal);
       
        
        // TODO: TODO: Retorne o valor do frete formatado com duas casas decimais:

        return freteTotal.toFixed(2);
    }
}

// Função principal para obter os dados de entrada e imprimir o resultado
function main() {
  
   // const listaProdutos = gets();

   const listaProdutos = "Funko Pop:3, Action Figure:2, LEGO:1";
    
    const taxaFixa = parseFloat(6.00);
    
    const taxaPorProduto = parseFloat(3.00);
    
    const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto);

   // calculadora.calcularFrete(listaProdutos);
    
    console.log(calculadora.calcularFrete(listaProdutos));
}

// Chamar a função principal para executar o desafio
main();


