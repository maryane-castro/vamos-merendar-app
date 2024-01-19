import { VStack, Image, Text, Center, Link } from 'native-base'
import logoImg from '../assets/logo.png'
import { THEME } from '../theme';
import { Button } from '@components/Button';


export function SingIn(){

    
    

    return(
    <VStack flex={1} px={12}>
        <Image
            source={logoImg}
            alt='Vamos Merendar'
        />
        <Center>
            <Text 
            marginBottom={7}
            color={THEME.colors.gray[300]}>
                Entre como:
            </Text>
        </Center>

        <Button title='Aluno(a)' />
        <Button title='Professor(a)' />
        <Button title='Nutricionista' />
        <Button title='Adiministrador(a)' />


        <Center>
            <Link 
            href='hhtp/'
            isExternal _text={{
                color: THEME.colors.orange
            }}
            >
                Esqueceu seu senha?
            </Link>
        </Center>





    </VStack>   
    )
}