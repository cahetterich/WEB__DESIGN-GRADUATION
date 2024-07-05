public class OperadoresAritmeticos {

    public static void main(String[] args) {

        //Operadores Aritméticos (+, -, *, /, %, ++, --)
        int x = 10;
        int y = 5;
        int soma = x + y;
        System.out.println(soma);

        int multiplicacao = x * 2;
        System.out.println(multiplicacao);
        System.out.println(x / 2);
        System.out.println(y / 2); // resultado é 2, por conta de ser um numero inteiro

        float f = 5;
        System.out.println(f / 2); // resultado é 2.5, por conta de ser um float

        int resto1 = x % 2;
        System.out.println(resto1); // = 0

        int resto2 = y % 2;
        System.out.println(resto2); // = 1

        x++; // incrementa + 1 no x
        System.out.println(x); // = 11

        y--; // decremento - 1 no y
        System.out.println(y); // = 4

        int a = 10;
        int b = 3;

        int soma1 = a + b; // 10+3 = 13
        int subtracao = a -b; // 10-3 = 7
        int multiplicacao1 = a * b; // 10 *3 = 30
        int divisao = a/b; // 10/3 = 3
        int modulo = a % b; // 10 % 3 = 1 (resto da divisão)

        System.out.println("Soma: "+ soma1);
        System.out.println("Subtração: "+ subtracao);
        System.out.println("Multiplicação: "+ multiplicacao1);
        System.out.println("Divisão: "+ divisao);
        System.out.println("Módulo: "+ modulo);

    }
}
