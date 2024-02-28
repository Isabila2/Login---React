import { Text, View, StyleSheet } from 'react-native';

export default function SecondComponent() {

    return (
        <View style={styles.container}>
            <Text>Componente</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 20,
    }
});