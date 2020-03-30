import React from 'react';
import { View , Image, Text, TouchableOpacity, FlatList } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function Detail(){
    return (
        <View style={styles.container}>

<View style={styles.header}>
<Image source={logoImg}/>
<TouchableOpacity onPress={() => {}}>
    <Feather name="arrow-left" size={28} color="#E82041" />
</TouchableOpacity>
    </View>

    <View style={styles.incident}>
<Text style={styles.incidentProperty}>ONG</Text>
<Text style={styles.incidentValue}>APAD</Text>

<Text style={styles.incidentProperty}>Caso</Text>
<Text style={styles.incidentValue}>Descrição do Caso</Text>

<Text style={styles.incidentProperty}>Valor</Text>
<Text style={styles.incidentValue}>120,00</Text>
</View>

<View style={styles.contactBox}>
<Text style={styles.heroTitle}>Salve o dia!</Text>
<Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
<Text style={styles.heroDescription}>Entre em contato:</Text>

<View style={styles.actions}>
<TouchableOpacity style={styles.action} onPress={() => {}}>
<Text style={styles.actionText}>Whatsapp</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.action} onPress={() => {}}>
<Text style={styles.actionText}>E-mail</Text>
</TouchableOpacity>



</View>

</View>







        </View>
    );
}