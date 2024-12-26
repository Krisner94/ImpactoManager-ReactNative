import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import Aluno from "./src/components/Aluno";
import Professor from "./src/components/Professor";
import Turma from "./src/components/Turma";
import SideBar from "./src/components/SideBar";
import { IconButton } from 'react-native-paper';
import NovoAluno from "./src/components/Novo/NovoAluno";
import NovoProfessor from './src/components/Novo/NovoProfessor';
import NovoTurma from './src/components/Novo/NovoTurma';
import NovaTurma from './src/components/Novo/NovaTurma';

type DrawerParamList = {
  Home: undefined
  Aluno: undefined
  Professor: undefined
  Turma: undefined
  NovoAluno: undefined
  NovaTurma: undefined
  NovoProfessor: undefined
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
                size={30}
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
          <Drawer.Screen name="NovoAluno" component={NovoAluno}/>
          <Drawer.Screen name="NovoProfessor" component={NovoProfessor}/>
          <Drawer.Screen name="NovaTurma" component={NovaTurma}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}