import java.nio.file.Path;
import java.nio.file.Paths;

public class ManipulacaoArquivos {
    public static void main(String[] args) {
        Path caminho = Paths.get("exemplo/diretorio/arquivo.txt");
        System.out.println("Caminho do arquivo: " + caminho);
    }
}