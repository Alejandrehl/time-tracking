import React from "react";
import {View, StyleSheet} from "react-native";

import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

const ToggeableTimerForm = ({isOpen}) => {
    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? (
                <TimerForm/>
            ) : (
                <TimerButton title="+" color="black"/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    buttonPadding: {
        paddingHorizontal: 15
    }
});

export default ToggeableTimerForm;