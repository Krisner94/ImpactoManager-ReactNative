import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';

interface Props {
    nomeDaTela: string;
    backgroundColor?: string; 
    iconColor?: string;
}

type RootStackParamList = {
    [key: string]: undefined;
};

const FabComponent = ({nomeDaTela, backgroundColor = '#ff7b00', iconColor = 'white'}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate(nomeDaTela);
    };

    return (
        <FAB
            icon="plus"
            style={[styles.fab, {backgroundColor}]} 
            color={iconColor}                      
            onPress={handlePress}
        />
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default FabComponent;
