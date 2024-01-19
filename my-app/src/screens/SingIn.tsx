import { VStack, Image, Text, Center, Link, ScrollView } from 'native-base'
import logoImg from '../assets/logo.png'
import { THEME } from '../theme';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';


export function SingIn(){
    return(
    <SafeAreaView>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={true}>
        <VStack flex={1} px={12}>
            <Image
                source={logoImg}
                alt='Vamos Merendar'
                marginTop={10}
            />
            <Center>
                <Text 
                marginBottom={12}
                color={THEME.colors.gray[300]}>
                    Entre com seu dados cadastrais:
                </Text>
            </Center>


            <Input 
                icon_name='signIn' 
                placeholder='Continue com E-mail'
                keyboardType='email-address' 
                />

            <Input 
                icon_name='pass' 
                placeholder='Digite sua senha'
                secureTextEntry
                />

            <Button title='Login' />


            <Center>
                <Link 
                href='hhtp/'
                paddingBottom={10}
                isExternal _text={{
                    color: THEME.colors.orange
                }}
                >
                    Esqueceu seu senha?
                </Link>
            </Center>
        </VStack>   
    </ScrollView>
    </SafeAreaView>
    )
}