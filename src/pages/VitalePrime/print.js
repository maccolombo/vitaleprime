import RNPrint from 'react-native-print';

export async function printHTML(html) {
    await RNPrint.print({
        html
    })
}

export async function PrintPDF(base64) {
    await RNPrint.print({ filePath: base64 })
}