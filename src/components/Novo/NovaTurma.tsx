import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';

const NovaTurma = () => {
    return (
        <View style={styles.container}>
            <Text>Nova Turma</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default NovaTurma;