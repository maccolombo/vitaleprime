import Toast from "react-native-tiny-toast";
import Colors from "~/styles/Colors";


export default function Notify(msg, type) {

    Toast.show(msg, {
        position: -0.1,
        containerStyle: {
            backgroundColor: Colors[type],
            borderRadius: 0,
            width: "100%",
        },
        textStyle: {
            color: "#fff",
        },
        duration: 2000,
        animation: true,
    });
}