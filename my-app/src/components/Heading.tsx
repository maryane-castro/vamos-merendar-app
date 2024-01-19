import { THEME } from '../theme';
import userImg from '../assets/group.png'
import { Image, Container, Text, ITextProps, HStack, Button, Center } from 'native-base'
import { CaretLeft } from 'phosphor-react-native';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

type Props = ITextProps & {
    text: string;
}


export function Heading({ text, ...rest} : Props){
    const navigation = useNavigation<AuthNavigatorRoutesProps>();


    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <Center>
        <Container>
            <HStack alignItems="center" justifyContent={"space-between"}>             
                <Button 
                    bg={"transparent"}
                    _pressed={{bg: "transparent"}}
                    onPress={handleGoBack}
                    >
                    <CaretLeft/>
                </Button>
                
                <Text 
                    {...rest}
                    fontFamily={'heading'}
                    color={THEME.colors.red[500]}
                    fontSize={'2xl'}
                    marginRight={2}
                >
                    Olá, {text}!
                </Text>

                <Image
                    source={userImg}
                    alt='Usuario'
                />

            </HStack>
        </Container>
        </Center>


    )
}