

all: java headers ndk-build apk-build

java: 
	@echo "Crating java files $@..."
	@javac app/src/main/java/example/com/soma/MyNDK.java

headers:
	@echo "Creating headers..."
	@cd app/src/main/java;javah example.com.soma.MyNDK; mv example_com_soma_MyNDK.h ../jni/;

ndk-build:
	@echo "Building NDK..."
	@cd app/src/main; ~/Library/Android/sdk/ndk-bundle/ndk-build;

apk-build:
	@echo "Building .apk file..."
	@./gradlew assembleRelease
	@mv app/build/outputs/apk/app-release-unsigned.apk app-release-unsigned.apk
clean:
	@echo "Limpando..."
	
