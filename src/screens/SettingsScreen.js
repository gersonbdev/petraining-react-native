import React, { useState } from 'react'
import { View, StyleSheet, Platform, SafeAreaView, ScrollView} from 'react-native'
import { List, Checkbox, Text, Divider, Button, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';


export const SettingsScreen = () => {

    // List
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    // Checkbox
    const [checked, setChecked] = React.useState(false);

    // DatePicker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // Text
    const [text, setText] = React.useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <List.Section title="Datos de tu mascota">
                    <List.Accordion
                        title="Nombre"
                        left={props => <List.Icon {...props} icon="dog" />}>
                         <TextInput
                            label="Nombre"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </List.Accordion>

                    <List.Accordion
                        title="Tipo"
                        left={props => <List.Icon {...props} icon="bone" />}
                    >
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Perro</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Gato</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                    </List.Accordion>

                    <List.Accordion
                        title="Cumpleaños"
                        left={props => <List.Icon {...props} icon="cake" />}
                        expanded={expanded}
                        onPress={handlePress}>

                        <Button
                            style={styles.button}
                            icon="calendar-today"
                            mode="outlined"
                            onPress={showDatepicker}>
                            Establecer
                        </Button>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </List.Accordion>

                    <List.Accordion
                        title="Tamaño"
                        left={props => <List.Icon {...props} icon="elevation-rise" />}
                    >
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Pequeño (1kg - 5kg)</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Mediano (5kg - 15kg)</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Grande (15kg - 30kg)</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </View>
                    </List.Accordion>
                </List.Section>                

                <Divider />

                <Text>{'\n'}</Text>

                <View style={styles.checkboxContainer}>
                    <Text style={styles.label}>Configuración avanzada</Text>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24,
      },
  });