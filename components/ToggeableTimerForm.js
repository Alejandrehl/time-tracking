import React, {useState} from "react";
import {View, StyleSheet} from "react-native";

import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

const ToggeableTimerForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleFormOpen = () => setIsOpen(true);

    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? (
                <TimerForm/>
            ) : (
                <TimerButton
                    title="+"
                    color="black"
                    onPress={handleFormOpen}
                />
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