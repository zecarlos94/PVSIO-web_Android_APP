#include<stdio.h>

int s=0;

void subtracao(){
 s--;
}

void soma(){
 s++;
}

int main(){
soma();
printf("%d\n",s);
soma();
printf("%d\n",s);
subtracao();
printf("%d\n",s);
return s;
}
