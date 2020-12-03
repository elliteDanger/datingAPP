import React from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const BottomModalSlide = React.forwardRef((props, ref) => {
    const { children } = props
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
            <RBSheet
                ref={ref}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                {children}
            </RBSheet>
        </View>
    );
})

export default BottomModalSlide