import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Date;

public class Server {
    public static void main(String[] args) throws IOException {
//        try (ServerSocket serverSocket = new ServerSocket(8080)) {
//
//            System.out.println("Server is listening on port " + 8080);
//
//            while (true) {
//                Socket socket = serverSocket.accept();
//
//                System.out.println("New client connected");
//
//                OutputStream output = socket.getOutputStream();
//                PrintWriter writer = new PrintWriter(output, true);
//
//                writer.println("HTTP/1.1 200 OK");
//            }
//
//        } catch (IOException ex) {
//            System.out.println("Server exception: " + ex.getMessage());
//            ex.printStackTrace();
//        }
        try (ServerSocket server = new ServerSocket(8080)) {    // create a socket and bind it to port 8080
            System.out.println("Listening for connection on port http://localhost:8080");
            while (true) {
                Socket socket = server.accept(); // listen for a connection
                System.out.println("New client connected");
                InputStream input = socket.getInputStream(); // write the data sent from the client
                InputStreamReader reader = new InputStreamReader(input); // to read data as characters
                BufferedReader reader1 = new BufferedReader(reader); // to read data as String
//                int character = reader.read(); // reads a single character
//                String line = reader1.readLine();  // reads a line of text
                OutputStream output = socket.getOutputStream(); // output stream provides only low-level methods (writing data as a byte array)
                PrintWriter writer = new PrintWriter(output, true); // this makes it basically a string
                writer.println("HTTP/1.1 200 OK\r\n\r\n" + reader1.readLine());
//                socket.getOutputStream().write("HTTP/1.1 200 OK\r\n\r\n".getBytes(StandardCharsets.UTF_8));
                socket.close();     // WITHOUT THIS IT WON'T WORK, SHIT FUCK CRAP AAAAAAAAAA
            }
        }
    }
}



