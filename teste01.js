let idades = [50, 6, 10, 20, 33]

let total = idades.reduce((acc, curr) => acc + curr)
let media = total / idades.length

console.log(`A média das idades é: ${media}`);
