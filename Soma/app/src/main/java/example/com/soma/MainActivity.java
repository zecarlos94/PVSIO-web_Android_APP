package example.com.soma;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.math.BigDecimal;

//android:background="@null"
//Basta acrescentar isto no activity_main.xml e os botões deixam de estar com cor background e é diferente
//de por invisible(este último impede a chamada da função pelo listener onClick())

public class MainActivity extends AppCompatActivity {
    float i=0.0f;

    public static BigDecimal round(float d, int decimalPlace) {
        BigDecimal bd = new BigDecimal(Float.toString(d));
        bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
        return bd;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final MyNDK myNDK = new MyNDK();
        final TextView tv = (TextView) findViewById(R.id.textView);
        //tv.setText("Hello There!! - #"+i);

        final Button button = (Button) findViewById(R.id.button);
        //button.setBackgroundColor(Color.TRANSPARENT);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                i=myNDK.addMyFloat(i);
                BigDecimal result;
                result=round(i,2);
                tv.setText(result+"");
                Log.i("SomaTag",i+"");
                // Perform action on click
                //i=i+1.0f;
                //tv.setText("Hello There!! - #"+i);
            }
        });

        final Button button2 = (Button) findViewById(R.id.button2);
        //button2.setBackgroundColor(Color.TRANSPARENT);
        button2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                i=myNDK.subMyFloat(i);
                BigDecimal result;
                result=round(i,2);
                tv.setText(result+"");
                Log.i("SomaTag",i+"");
                // Perform action on click
                //i=i-1.0f;
                //tv.setText("Hello There!! - #"+i);
            }
        });
    }
}
