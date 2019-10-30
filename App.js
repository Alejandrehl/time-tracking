import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';

import uuidv4 from "uuid/v4";
import {newTimer} from "./utils/TimerUtils";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggeableTimerForm";


const App = () => {
    const TIME_INTERVAL = 1000;
    const [timers, setTimers] = useState([
        {
            title: "Mow the lawn",
            project: "House Chores",
            id: uuidv4(),
            elapsed: 5456099,
            isRunning: true
        },
        {
            title: "Bake Squash",
            project: "Kitchen Chores",
            id: uuidv4(),
            elapsed: 1273998,
            isRunning: false
        }
    ]);

    useEffect(() => {
        this.intervalId = setInterval(() => {
            setTimers(timers.map(timer => {
                const {elapsed, isRunning} = timer;

                return {
                    ...timer,
                    elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed
                };
            }));
        }, TIME_INTERVAL);

        clearInterval(this.intervalId);
    }, []);

    const handleCreateFormSubmit = timer => {
        setTimers([newTimer(timer), ...timers]);
    };

    const handleFormSubmit = attrs => {
        setTimers(timers.map(timer => {
                if (timer.id === attrs.id) {
                    const {title, project} = attrs;

                    return {
                        ...timer,
                        title,
                        project
                    };
                }
                return timer;
            })
        );
    };

    const handleOnRemovePress = timerId => {
        setTimers(timers.filter(timer => timer.id !== timerId));
    };

    const toggleTimer = timerId => {
        setTimers(timers.map(timer => {
                const {id, isRunning} = timer;

                if (id === timerId) {
                    return {
                        ...timer,
                        isRunning: !isRunning
                    };
                }

                return timer;
            })
        )
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Timers</Text>
            </View>
            <KeyboardAvoidingView behavior="padding" style={styles.timerListContainer}>
                <ScrollView contentContainerStyle={styles.timerList}>
                    <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
                    {timers.map(
                        ({title, project, id, elapsed, isRunning}) => (
                            <EditableTimer
                                key={id}
                                id={id}
                                title={title}
                                project={project}
                                elapsed={elapsed}
                                isRunning={isRunning}
                                onFormSubmit={handleFormSubmit}
                                onRemovePress={handleOnRemovePress}
                                onStartPress={toggleTimer}
                                onStopPress={toggleTimer}
                            />
                        )
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 35,
        borderBottomWidth: 1,
        borderBottomColor: "#D6D7DA"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    timerList: {
        paddingBottom: 15
    },
    timerListContainer: {
        flex: 1
    }
});

export default App;
