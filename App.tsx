import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/components/Home/";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Aluno from "./src/components/Aluno";
import Professor from "./src/components/Professor";
import Turma from "./src/components/Turma";

export type RootStackParamList = {
  Home: undefined;
  Aluno: undefined;
  Professor: undefined;
  Turma: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const light = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#e96a20',
    accent: '#FFD900',
    error: '#ED1C24',
    text: '#000'
  }
};

export default function App() {
  return (
    <PaperProvider theme={light}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#e96a20', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{ title: "Impacto Manager" }} />
          <Stack.Screen name="Aluno" component={Aluno} />
          <Stack.Screen name="Professor" component={Professor} />
          <Stack.Screen name="Turma" component={Turma} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}