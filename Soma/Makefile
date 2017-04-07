

all: java headers  apk-build

java: 
	@echo "Crating java files $@..."
	@javac app/src/main/java/example/com/soma/MyNDK.java

headers:
	@echo "Creating headers..."
	@cd app/src/main/java;javah example.com.soma.MyNDK; mv example_com_soma_MyNDK.h ../jni/;
	@cd app/src/main; ~/Library/Android/sdk/ndk-bundle/ndk-build;
ndk-build:
	@echo "Building NDK..."
	@cd app/src/main; ~/Library/Android/sdk/ndk-bundle/ndk-build;

apk-build:
	@echo "Building .apk file..."
	@./gradlew
	@./gradlew assembleRelease
	@mv app/build/outputs/apk/app-release-unsigned.apk app-release-unsigned.apk


	@echo "Signing .apk file..."

	@ ~/Library/Android/sdk/build-tools/25.0.2/zipalign -f -v -p 4 app-release-unsigned.apk  my-app.apk
	@ ~/Library/Android/sdk/build-tools/25.0.2/apksigner sign --ks my-release-key.jks my-app.apk

install-sdk:
	@if [ -a sdk.zip ];then echo "File already downloaded. Please delete it to download again.";else echo "Downloading SDK...";wget -O sdk.zip "https://www.dropbox.com/s/il81vpf7e2n53rd/sdk.zip?dl=0";fi;

	
	@echo "Installing SDK..."
	@unzip sdk.zip
	@rm sdk.zip

local:java headers-local apk-build-local

headers-local:
	@echo "Creating headers..."
	@cd app/src/main/java;javah example.com.soma.MyNDK; mv example_com_soma_MyNDK.h ../jni/;
	@cd app/src/main;../../../sdk/ndk-bundle/ndk-build;
ndk-build-local:
	@echo "Building NDK..."
	@cd app/src/main; ../../../sdk/ndk-bundle/ndk-build;

apk-build-local:
	@echo "Building .apk file..."
	@./gradlew
	@./gradlew assembleRelease
	@mv app/build/outputs/apk/app-release-unsigned.apk app-release-unsigned.apk


	@echo "Signing .apk file..."
	@rm my-app.apk
	@sdk/build-tools/*/zipalign -v -p 4 app-release-unsigned.apk  my-app.apk
	@sdk/build-tools/*/apksigner sign --ks my-release-key.jks my-app.apk
	@rm app-release-unsigned.apk

clean:
	@echo "Limpando..."
	@if [ -a my-app.apk ];then rm my-app.apk;fi;
	@if [ -a app-release-unsigned.apk ];then rm app-release-unsigned.apk;fi;
	@if [ -a sdk.zip ];then rm sdk.zip;fi;
	
