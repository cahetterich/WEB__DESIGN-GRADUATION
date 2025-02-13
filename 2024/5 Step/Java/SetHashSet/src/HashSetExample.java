import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> frutas = new HashSet<>();
        frutas.add("Maçã");
        frutas.add("Banana");
        frutas.add("Morango");
        frutas.add("Maçã"); // Tentativa de adicionar duplicata
        System.out.println(frutas); // Observe a ausência de duplicatas
    }
}