function ehPalindromo(palavra) {
  let palindromo = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palindromo += palavra[i]
  }

  if (palavra == palindromo) {
    console.log("SIM, sou um palíndromo");
  } else {
    console.log("NÃO, sou um palíndromo");
  }
}

ehPalindromo('ovo');
