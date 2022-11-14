import React, { useState } from 'react';
import { ActivityIndicator, BackHandler, Linking } from 'react-native';
import WebView from 'react-native-webview';
import { useAuth } from '~/contexts/auth';
import * as rootNavigation from '~/routes/rootNavigation';
import { printHTML, PrintPDF } from './print';
import RNFS from 'react-native-fs';

import { request, PERMISSIONS } from 'react-native-permissions';

const VendaSimples = ({ route }) => {
    const {
        grupo,
        env
    } = route.params
    const [url, setUrl] = useState(`https://vitaleprime.com/`)
    
    const { token, setWebRef, webRef } = useAuth()

    const INJECTED_JAVASCRIPT_BEFORE = `(function() {
        window.isNativeApp = true;
        window.localStorage.setItem('token', '${token}');
	})();`;

    const getPermition = async () => {
        return await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    }

    const enviarWhatsapp = async (url) => {
        await Linking.openURL(url);
    }

    const downloadFileHandler = async (file) => {
        try {
            if (file.payload.url.includes("http")) {
                var path = RNFS.DownloadDirectoryPath + "/" + (file.payload?.nomeArquivo || file.payload.url.split("/")[5])

                RNFS.downloadFile({ fromUrl: file.payload.url, toFile: path })
            } else {
                var Base64Code = "";
                if (file.payload.url.includes("pdf;base64")) {
                    Base64Code = file.payload.url.replace('data:application/pdf;base64,', '')
                }
                if (file.payload.url.includes("csv;base64")) {
                    Base64Code = file.payload.url.replace('data:text/csv;base64,', '')
                }
                let ext = file.payload.url.includes("text/csv;") ? ".csv" : ".pdf"
                const perm = await getPermition();

                if (perm === "granted") {
                    var path = RNFS.DownloadDirectoryPath + "/" + (file.payload?.nomeArquivo || file.payload.url.split("/")[5] + Math.random().toString(36).substring(2, 10) + ext)

                    RNFS.writeFile(path, Base64Code, 'base64')
                        .then((success) => {
                            console.log('FILE WRITTEN!', success);
                        })
                        .catch((err) => {
                            console.log("error", err.message);
                        });
                }
            }

        } catch (error) {
            console.log(error)
        }

    };

    const handleEvents = async event => {
        try {
            const events = JSON.parse(event.nativeEvent.data)
            
            switch (events.action) {
                case "printHTML":
                    printHTML(events.payload)
                    break;
                case "downloadFile":
                    downloadFileHandler(events)
                    break;
                case "logout":
                    rootNavigation.navigate("Main")
                    break;
                case "printPDF":
                    PrintPDF(events.payload)
                    break;
                case "enviarWhatsapp":
                    enviarWhatsapp(events.payload)
                    break;
                default:
                    break;
            }

        } catch (error) {
            console.log(error)
        }

    }

    const backHandler = () => {
        webRef.goBack()
        return true
    }

    return (
        // (grupo && env) ?
        //     (
                <WebView
                    source={{
                        uri: "https://vitaleprime.com/",
                    }}
                    allowsBackForwardNavigationGestures
                    injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT_BEFORE}
                    onMessage={(event) => handleEvents(event)}
                    ref={(ref) => setWebRef(ref)}
                    onNavigationStateChange={() => {
                        BackHandler.addEventListener("hardwareBackPress", backHandler)
                    }}
                />
            // ) : (
            //     <ActivityIndicator size="large" />
            // )
    );
}

export default VendaSimples;