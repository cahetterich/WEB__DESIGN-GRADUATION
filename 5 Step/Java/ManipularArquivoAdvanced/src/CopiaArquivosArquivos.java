import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class CopiaArquivosArquivos {
    public static void main(String[] args) {
        try {
            Path origem = Paths.get("exemplo.txt");
            Path destino = Paths.get("exemplo_copiado.txt");
            Files.copy(origem, destino, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Arquivo copiado com sucesso.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}