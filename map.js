produtos = [
    {nome:"Motorola G8", preço: 1200.00},
    {nome:"Motorola G7", preço: 900.50},
    {nome:"Xiaomi", preço: 200.00},
    {nome:"Nokia", preço: 500.50},

]

//Lista os produtos
console.log(produtos.map(
    (p, i) => "Produto: (" + i + ")" + p.preço
));

//Filtra os produtos
console.log(produtos.filter(
    (p) => p.preço >= 600
))

//soma os produtos de uma certa maneira (o de antes soma com o seguinte e assim por diante)
console.log(produtos.map(p=>p.preço) .reduce((previous, current) => previous + current) )