import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SingIn } from '@screens/SingIn'
import { Aluno } from '@screens/Aluno'


type AuthRoutes = {
    SingIn: undefined;
    Aluno: undefined
}


export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()


export function AuthRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="SingIn"
                component={SingIn}
            />
            <Screen
                name="Aluno"
                component={Aluno}
            />
        </Navigator>
    )
}