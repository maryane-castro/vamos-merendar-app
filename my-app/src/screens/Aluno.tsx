import { VStack, Image, Text, Center, Link, ScrollView } from 'native-base'
import userImg from '../assets/group.png';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from '@components/Heading';
import { Calendar } from '@components/Calendar';


export function Aluno(){
    return(
    <SafeAreaView>
        <VStack alignItems={'center'}>
            <Heading text='Aluno'/>
            <Calendar/>



        </VStack>   
    </SafeAreaView>
    )
}