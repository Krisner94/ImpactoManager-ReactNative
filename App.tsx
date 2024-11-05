import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import Aluno from "./src/components/Aluno";
import Professor from "./src/components/Professor";
import Turma from "./src/components/Turma";
import SideBar from "./src/components/SideBar";
import { IconButton } from 'react-native-paper';

type DrawerParamList = {
  Home: undefined;
  Aluno: undefined;
  Professor: undefined;
  Turma: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

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
        <Drawer.Navigator 
          initialRouteName="Home" 
          drawerContent={(props) => <SideBar {...props} />}
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <IconButton
                icon="menu"
                iconColor="white"
                size={20}
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerStyle: {
              backgroundColor: '#e96a20',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Drawer.Screen 
            name="Home" 
            component={Aluno}
            options={{
              title: "Impacto Manager"
            }}
          />
          <Drawer.Screen name="Aluno" component={Aluno} />
          <Drawer.Screen name="Professor" component={Professor} />
          <Drawer.Screen name="Turma" component={Turma} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}