import java.io.IOException;
import java.nio.file.*;

public class ListandoArquivos {
    public static void main(String[] args) {
        Path dir = Paths.get("src/main/java");
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir)) {
            for (Path file : stream) {
                System.out.println(file.getFileName());
            }
        } catch (IOException | DirectoryIteratorException e) {
            e.printStackTrace();
        }
    }
}