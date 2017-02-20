#include "example_com_soma_MyNDK.h"
#include <jni.h>

JNIEXPORT jfloat JNICALL Java_example_com_soma_MyNDK_addMyFloat(JNIEnv *env, jobject jobject1, jfloat jfloat1){
    return (jfloat1+0.1f);
}

JNIEXPORT jfloat JNICALL Java_example_com_soma_MyNDK_subMyFloat(JNIEnv *env, jobject jobject1, jfloat jfloat1){
    return (jfloat1-0.1f);
}