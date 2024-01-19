import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { THEME } from '../theme';
import { Container, HStack, Box, Center } from 'native-base';

type Props = {
  data: string;
  bgVermelho?: boolean; // Nova propriedade
};

const Quadrado = ({ data, bgVermelho = false }: Props) => (
  <TouchableOpacity
    style={{
      backgroundColor: bgVermelho ? 'rgba(217, 78, 65, 0.9)' : '#fff',
      borderRadius: 29,
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 80,
      borderColor: 'rgba(96, 96, 96, 0.9)',
      borderWidth: 0.4,


    }}
  >
    <Text style={{ 
      fontSize: 16, 
      color: bgVermelho ? '#ffffff' : '#000000'
    }}>{data}</Text>
  </TouchableOpacity>
);

export function Calendar() {
  const [currentDate, setCurrentDate] = useState('');
  const [datas, setDatas] = useState<string[]>([]);

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const formattedDate = format(date, "d 'de' MMMM", { locale: ptBR });
      setCurrentDate(formattedDate);
    };
    getCurrentDate();
  }, []);

  useEffect(() => {
    const obterDatas = () => {
      const dataAtual = new Date();
      const datasSeguintes = Array.from({ length: 4 }, (_, index) => {
        const dataSeguinte = addDays(dataAtual, index);
        return format(dataSeguinte, 'dd');
      });
      setDatas(datasSeguintes);
    };
    obterDatas();
  }, []);

  return (
    <Container w={'100%'} alignItems={'center'}>
      <Text
        style={{
          fontSize: THEME.fontSizes.lg,
          fontFamily: THEME.fonts["heading"],
          marginBottom: 10,
        }}
      >
        {currentDate}
      </Text>

      <HStack space={1}>
        {datas.map((data, index) => (
          <Quadrado key={index} data={data} bgVermelho={index === 1 } />
        ))}
      </HStack>
    </Container>
  );
}
