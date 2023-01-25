//Implemente a função ao lado que recebe como parâmetros uma string e uma letra e deve retornar a quantidade de ocorrências da letra passada na string passada.
//Exemplo: se for passado “carreira” e a letra “r”, a função deve retornar 3
//Exemplo: se for passado “ovo” e a letra “s”, a função deve retornar 0
//Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

function contarLetras(texto, letra) {

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        let letter = texto[i];

        if (letter == letra) {
            contador += 1;
        }
    }
    return contador;
}
