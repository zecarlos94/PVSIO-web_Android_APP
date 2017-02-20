//
// Created by José Carlos Gonçalves on 20/02/2017.
//
#include "example_com_soma_MyNDK.h"

JNIEXPORT jstring JNICALL Java_example_com_soma_MyNDK_getMyString(JNIEnv *env, jobject jobj){
    return (*env)->NewStringUTF(env, "Soma Nativa");
};