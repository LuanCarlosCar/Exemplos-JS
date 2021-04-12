/* Um algoritmo que transforma nota de um sistema
 numero para sistema de notas em caracteres tipo  A B C

* de 90 para cima - A
*entre 80-89 - B
*entre 70-79 - C
*entre 60-69 - D
* menor que 60 - f
*/



function nota(n) {
    if(n>=90) {
        return 'a'
    }else if(n>=80 && n<= 89){
           return'b'
    }else if(n>=70 && n<= 79){
        return 'c'
    }else if(n>=60 && n<= 69){
        return 'd'
    }else if(n<=59){
        return 'f'
    }
}

console.log(nota(10));
