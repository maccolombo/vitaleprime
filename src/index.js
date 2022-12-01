import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import WebView from 'react-native-webview';
const VitalePrime = () => {


    const [url, setUrl] = useState(`https://vitaleprime.com`)

    // const INJECTED_JAVASCRIPT_BEFORE = `(function() {
    //     window.isNativeApp = true;
    //     window.localStorage.setItem('token', '${token}');
	// })();`;

    return (
        <>
            <StatusBar backgroundColor="#B41267"/>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <WebView
                source={{
                    uri: url,
                }}
                allowsBackForwardNavigationGestures
            // injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT_BEFORE}
            // onMessage={(event) => handleEvents(event)}
            // ref={(ref) => setWebRef(ref)}
            // onNavigationStateChange={() => {
            //     BackHandler.addEventListener("hardwareBackPress", backHandler)
            // }}
            // onFileDownload={({ nativeEvent: { downloadUrl } }) =>
            //     console.log("onFIleDowload", downloadUrl)
            // }
            />
        </>
    );
}

export default VitalePrime;