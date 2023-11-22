import org.sikuli.script.*;

public class Sikuli {
    public static void main(String[] args) {
        ImagePath.add(Sikuli.class.getCanonicalName() + "/imgs");

        Screen s = new Screen();
        try {
            s.click("1681886554083.png");
            s.click("1681886635088.png");
            s.wait("1681886669934.png");
            s.click();
            s.write("Hello World#ENTER."); // #ENTER. for line break
        } catch (FindFailed e) {
            e.printStackTrace();
        }
    }
}
