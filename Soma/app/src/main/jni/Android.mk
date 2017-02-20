LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE    := MyLibrary
LOCAL_SRC_FILES := soma2.c

include $(BUILD_SHARED_LIBRARY)