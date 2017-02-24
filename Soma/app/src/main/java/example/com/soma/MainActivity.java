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

    int power = 0;
    float i=0.0f;

    public static BigDecimal round(float d, int decimalPlace) {
        BigDecimal bd = new BigDecimal(Float.toString(d));
        bd = bd.setScale(decimalPlace, BigDecimal.ROUND_HALF_UP);
        return bd;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        int scrWidth  = getWindowManager().getDefaultDisplay().getWidth();
        int scrHeight = getWindowManager().getDefaultDisplay().getHeight();

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final MyNDK myNDK = new MyNDK();
        final TextView tv = (TextView) findViewById(R.id.textView);
        tv.setTranslationX(0.15f*scrWidth);
        tv.setTranslationY(0.18f*scrHeight);
        //tv.setText("Hello There!! - #"+i);

        final Button button = (Button) findViewById(R.id.button);
        //button.setBackgroundColor(Color.TRANSPARENT);
        button.setTranslationX(0.225f*scrWidth);
        button.setTranslationY(0.459f*scrHeight);
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
        button2.setTranslationX(0.37f*scrWidth);
        button2.setTranslationY(0.459f*scrHeight);
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

        final Button button3 = (Button) findViewById(R.id.button3);
        //button2.setBackgroundColor(Color.TRANSPARENT);
        button3.setTranslationX(0.15f*scrWidth);
        button3.setTranslationY(0.532f*scrHeight);
        button3.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
              if (power == 0){
                tv.setVisibility(View.VISIBLE);
                i=0.0f;
                BigDecimal result;
                result=round(i,2);
                tv.setText(result+"");
                Log.i("SomaTag",i+"");
                power=1;
              }
              else {
                power=0;
                  tv.setVisibility(View.INVISIBLE);

              }
            }
        });
    }
}
