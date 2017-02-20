package example.com.soma;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    float i=0.0f;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final MyNDK myNDK = new MyNDK();
        final TextView tv = (TextView) findViewById(R.id.textView);
        //tv.setText("Hello There!! - #"+i);

        final Button button = (Button) findViewById(R.id.button2);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                i=myNDK.addMyFloat(i);
                tv.setText(i+"");
                Log.i("SomaTag",i+"");
                // Perform action on click
                //i=i+1.0f;
                //tv.setText("Hello There!! - #"+i);
            }
        });

        final Button button2 = (Button) findViewById(R.id.button3);
        button2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                i=myNDK.subMyFloat(i);
                tv.setText(i+"");
                Log.i("SomaTag",i+"");
                // Perform action on click
                //i=i-1.0f;
                //tv.setText("Hello There!! - #"+i);
            }
        });
    }
}
