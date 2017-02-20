#include "example_com_soma_MyNDK.h"
#include <jni.h>

JNIEXPORT jint JNICALL Java_example_com_soma_MyNDK_getMyInt(JNIEnv *env, jobject jobject1, jint jint1){
    return (jint1+1);
}