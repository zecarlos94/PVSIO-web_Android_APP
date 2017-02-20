package example.com.soma;

/**
 * Created by zecarlos on 20/02/2017.
 */

public class MyNDK {

    static {
        System.loadLibrary("MyLibrary");
    }

    public native float addMyFloat(float a);
    public native float subMyFloat(float a);
}
