import React, { useState } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import WebView from 'react-native-webview';
const VitalePrime = () => {


    const [url, setUrl] = useState(`https://mobile.vitaleprime.com`)

    // const INJECTED_JAVASCRIPT_BEFORE = `(function() {
    //     window.isNativeApp = true;
    //     window.localStorage.setItem('token', '${token}');
    // })();`;
    const CostumStatusBar = () => (
        Platform.OS === "ios" ? (
            <View style={{ height: 20, backgroundColor: "#B41267" }} />
        ) : (
            <StatusBar backgroundColor="#B41267" />
        )
    )


    return (
        <>
            <CostumStatusBar />
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

