import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class RemocaoDeArquivo {
    public static void main(String[] args) {
        try {
            Files.delete(Path.of("alunos.txt"));
            System.out.println("Arquivo excluído com sucesso.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}