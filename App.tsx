import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton } from 'react-native-paper';

const Home = require('./src/components/Home').default;
const Aluno = require('./src/components/Aluno').default;
const Professor = require('./src/components/Professor').default;
const Turma = require('./src/components/Turma').default;
const SideBar = require('./src/components/SideBar').default;
const NovoAluno = require('./src/components/Novo/NovoAluno').default;
const NovoProfessor = require('./src/components/Novo/NovoProfessor').default;
const NovaTurma = require('./src/components/Novo/NovaTurma').default;
const UpdateAluno = require('./src/components/update/UpdateAluno').default;

type DrawerParamList = {
  Home: undefined
  Aluno: undefined
  Professor: undefined
  Turma: undefined
  NovoAluno: undefined
  NovaTurma: undefined
  NovoProfessor: undefined
  UpdateAluno: { aluno: any }
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

const screenData = [
  { name: 'Home', component: Home },
  { name: 'Aluno', component: Aluno },
  { name: 'Professor', component: Professor },
  { name: 'Turma', component: Turma },
  { name: 'NovoAluno', component: NovoAluno },
  { name: 'NovoProfessor', component: NovoProfessor },
  { name: 'NovaTurma', component: NovaTurma },
  { name: 'UpdateAluno', component: UpdateAluno }
];

export default function App() {
  return (
    <PaperProvider theme={light}>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Aluno" 
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
          {screenData.map(({ name, component }) => (
            <Drawer.Screen 
              key={name} 
              name={name} 
              component={component}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
