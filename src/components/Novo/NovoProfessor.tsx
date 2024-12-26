import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';

const NovoProfessor = () => {
    return (
        <View style={styles.container}>
            <Text>Novo Professor</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default NovoProfessor;