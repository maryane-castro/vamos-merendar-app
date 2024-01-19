import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { useTheme, Box } from 'native-base';

export function Routes(){
    const { colors } =  useTheme()

    const theme = DefaultTheme;
    theme.colors.background = colors.white

    return(
        <Box flex={1} bg={"white"}>
            <NavigationContainer theme={theme}>
                <AuthRoutes/>
            </NavigationContainer>
        </Box>
    )
}