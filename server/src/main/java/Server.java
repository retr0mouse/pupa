import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Date;

public class Server {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(8080);  // create a socket and bind it to port 8080
        System.out.println("Listening for connection on port http://localhost:8080");
        while (true) {
            Socket clientSocket = server.accept();
            InputStreamReader isr =  new InputStreamReader(clientSocket.getInputStream());
            BufferedReader reader = new BufferedReader(isr);
            String line = reader.readLine();
            while (!line.isEmpty()) {
                System.out.println(line);
                line = reader.readLine();
            }
//            try (Socket socket = server.accept()) {     // listen for a connection
//                InputStream input = socket.getInputStream(); // write the data sent from the client


//                Date today = new Date();
//                String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + today;
//                socket.getOutputStream().write(httpResponse.getBytes(StandardCharsets.UTF_8));


//                InputStreamReader reader = new InputStreamReader(input); // to read data as characters
//                BufferedReader reader1 = new BufferedReader(reader); // to read data as String
//                int character = reader.read(); // reads a single character
//                String line = reader1.readLine();  // reads a line of text
//                OutputStream output = socket.getOutputStream(); // output stream provides only low-level methods
//                PrintWriter writer = new PrintWriter(output, true);
//                writer.println("Kekw");
//            }
        }
    }
}


