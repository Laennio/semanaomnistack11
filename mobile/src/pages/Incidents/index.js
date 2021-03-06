import React from 'react';
import { View , Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){

const navigation = useNavigation();

function navigateToDetail(){
    navigation.navigate('Detail');
}


    return (
        <View style={styles.container}>

<View style={styles.header}>
<Image source={logoImg}/>
<Text style={styles.headerText}>
    Total de <Text style={styles.headerTextBold}>0 casos.</Text> 
</Text>
    </View>


<Text style={styles.title}>Bem-Vindo(a)</Text>
<Text style={styles.description}>Escolha um dos casos e salve o dia!</Text>


<FlatList
style={styles.incidentsList}
data={[1,2,3,4]}
keyExtractor={incident => String(incident)}
showsVerticalScrollIndicator = {false}
renderItem={() => (
<View style={styles.incident}>
<Text style={styles.incidentProperty}>ONG</Text>
<Text style={styles.incidentValue}>APAD</Text>

<Text style={styles.incidentProperty}>Caso</Text>
<Text style={styles.incidentValue}>Descrição do Caso</Text>

<Text style={styles.incidentProperty}>Valor</Text>
<Text style={styles.incidentValue}>120,00</Text>

<TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}> 
<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
<Feather name="arrow-right" size={16} color = "#E02041" />
</TouchableOpacity>
</View>

) }
/>
        </View>
    );
}