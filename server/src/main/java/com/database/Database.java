package com.database;
import java.sql.*;
import java.util.ArrayList;

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

    public static ArrayList<ArrayList<String>> showTable(String fileName, String table) {
        try (Connection conn = DriverManager.getConnection(url + fileName);
             Statement stmt = conn.createStatement()) {
             ResultSet result = stmt.executeQuery(String.format("SELECT * FROM %s", table));
             return returnRow(new String[]{"id", "title"}, result);

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    private static ArrayList<ArrayList<String>> returnRow(String[] columns, ResultSet rs) throws SQLException {
        ArrayList<ArrayList<String>> items = new ArrayList<>();
        while (rs.next()) {
            ArrayList<String> rows = new ArrayList<>();
            for (String column: columns) {
                rows.add(rs.getString(column));
            }
            items.add(rows);
        }
        return items;
    }

//    public static void main(String[] args) {
////        createNewDatabase(args[0]);
////        createNewTable(args[0]);
////        executeQuery(args[0], args[1]);
////        showtable(args[0], args[1]);
//    }
}
