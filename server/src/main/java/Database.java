import java.sql.*;

public class Database {
    final static String url = "jdbc:sqlite:C:/Users/Daniil/Documents/Code/cards-project/server/";

    public static void createNewTable(String fileName) {
        String sql = """
                CREATE TABLE IF NOT EXISTS warehouses (
                	id integer PRIMARY KEY,
                	name text NOT NULL,
                	capacity real
                );""";
        try (Connection conn = DriverManager.getConnection(url + fileName);
                Statement stmt = conn.createStatement()) {
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
    public static void createNewDatabase(String fileName) {
        try (Connection conn = DriverManager.getConnection(url + fileName)) {
            if (conn != null) {
                DatabaseMetaData meta = conn.getMetaData();
                System.out.println("The driver name is " + meta.getDriverName());
                System.out.println("A new database has been created.");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void executeQuery(String fileName, String query) {
        try (Connection conn = DriverManager.getConnection(url + fileName);
             Statement stmt = conn.createStatement()) {
            stmt.execute(query);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        createNewDatabase("test.db");
        createNewTable("test.db");
        executeQuery("test.db",
                """
                INSERT INTO warehouses (name, capacity) VALUES ("abobus", 50);
                """
        );
    }
}
