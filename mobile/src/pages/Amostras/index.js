import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { Styles } from './styles'

const Amostras = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={Styles.container}>

        <View style={Styles.containerLogo}>

          <Image style={Styles.logo}
            source={require('../../image/logo.png')}
          />

        </View>

        <View style={Styles.titleAmostra}>

          <Text style={Styles.textAmostra}> Análise de Plantação </Text>

        </View>

        <ScrollView horizontal>
          <ScrollView stickyHeaderIndices={[0]} horizontal>
            <View style={Styles.containerMenu}>
              <View style={Styles.colunaMenu}>
                <Text style={Styles.menu1}>Amostra</Text>
                <Text style={Styles.menu1}>Data:</Text>
                <Text style={Styles.menu1}>Exposição à Luz:</Text>
                <Text style={Styles.menu1}>Umidade de Solo:</Text>
                <Text style={Styles.menu1}>Umidade Ambiente:</Text>
                <Text style={Styles.menu1}>Temperatura Média:</Text>
                <Text style={Styles.menu1}>Data Término:</Text>
                <Text style={Styles.menu1}> Responsável: </Text>
              </View>
            </View>
          </ScrollView>

          <View style={{ width: 4 }} />

          <ScrollView horizontal>
            <View style={Styles.containerMenu}>

              <View style={Styles.coluna1}>
                <Text style={Styles.menu2}> 1 </Text>
                <Text style={Styles.menu2}>01/05/2024</Text>
                <Text style={Styles.menu2}>8 horas</Text>
                <Text style={Styles.menu2}>45%</Text>
                <Text style={Styles.menu2}>60%</Text>
                <Text style={Styles.menu2}>22°C</Text>
                <Text style={Styles.menu2}>15/05/2024</Text>
                <Text style={Styles.menu2}>Josão Silva</Text>
              </View>

              <View style={{ width: 4 }} />

              <View style={Styles.coluna2}>
                <Text style={Styles.menu2}> 2 </Text>
                <Text style={Styles.menu2}>19/05/2024</Text>
                <Text style={Styles.menu2}>5 horas</Text>
                <Text style={Styles.menu2}>80%</Text>
                <Text style={Styles.menu2}>40%</Text>
                <Text style={Styles.menu2}>28°C</Text>
                <Text style={Styles.menu2}>Em andamento</Text>
                <Text style={Styles.menu2}>Fulano</Text>
              </View>

              <View style={{ width: 4 }} />

              <View style={Styles.coluna1}>
                <Text style={Styles.menu2}> 3 </Text>
                <Text style={Styles.menu2}>19/05/2024</Text>
                <Text style={Styles.menu2}>5 horas</Text>
                <Text style={Styles.menu2}>80%</Text>
                <Text style={Styles.menu2}>40%</Text>
                <Text style={Styles.menu2}>28°C</Text>
                <Text style={Styles.menu2}>Em andamento</Text>
                <Text style={Styles.menu2}>Fulano</Text>
              </View>
              
            </View>
          </ScrollView>
        </ScrollView>

        <View style={Styles.info}>
          <Text style={Styles.infoText}>Informações adcionais:</Text>
          <View style={Styles.addtionalInfo}></View>

        </View>

      </View>
    </ScrollView>
  );
};

export default Amostras;