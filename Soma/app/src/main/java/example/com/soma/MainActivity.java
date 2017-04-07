package example.com.soma;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
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



        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final MyNDK myNDK = new MyNDK();
        final ImageView iv = (ImageView) findViewById(R.id.imageView);
        final TextView tv = (TextView) findViewById(R.id.textView);

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
        button2.setVisibility(View.INVISIBLE);
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

        final Button button3 = (Button) findViewById(R.id.button3);
        //button2.setBackgroundColor(Color.TRANSPARENT);
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


        iv.post(new Runnable() {
            @Override
            public void run() {

                button.setTranslationX(0.225f*iv.getWidth());
                button.setTranslationY(0.52f*iv.getHeight());


                tv.setTranslationX(0.18f*iv.getWidth());
                tv.setTranslationY(0.28f*iv.getHeight());

                button2.setTranslationX(0.37f*iv.getWidth());
                button2.setVisibility(View.VISIBLE);
                button2.setTranslationY(0.52f*iv.getHeight());

                button3.setVisibility(View.VISIBLE);
                button3.setTranslationX(0.15f*iv.getWidth());
                button3.setTranslationY(0.6f*iv.getHeight());


            }
        });



    }
}
