import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";

import TimerButtom from "./TimerButton";

const TimerForm = ({id, title, project}) => {
    const [titleState, setTitleState] = useState(id ? title : '');
    const [projectState, setProjectState] = useState(id ? project : '');

    const submitText = id ? 'Update' : 'Create';

    const handleTitleChange = title => {
        setTitleState(title);
    };

    const handleProjectChange = project => {
        setProjectState(project);
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        onChangeText={handleTitleChange}
                        value={titleState}
                    />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        onChangeText={handleProjectChange}
                        value={projectState}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButtom small color="#21BA45" title={submitText}/>
                <TimerButtom small color="#DB2828" title="Cancel"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: "white",
        borderColor: "#D6D7DA",
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0
    },
    attributeContainer: {
        marginVertical: 8
    },
    textInputContainer: {
        borderColor: "#D6D7DA",
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default TimerForm;