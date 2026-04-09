package reusableComponents;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesOperation {
    public static Properties prop = null;
    public static File file = null;
    public static FileInputStream fis = null;

    static {
        file = new File(System.getProperty("user.dir") + "\\config.properties");
        try {
            fis = new FileInputStream(file);
        } catch (FileNotFoundException e1) {
            e1.printStackTrace();
        }
        prop = new Properties();
        try {
            prop.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static String getPropertyValue(String property) {

        String value = prop.get(property).toString();
        return value;
    }

}