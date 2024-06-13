import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Styles } from './styles';

const Contato = () => {
  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={Styles.container}>

        <View style={Styles.containerLogo}>
          <Image style={Styles.logo} source={require('../../image/logo.png')} />
        </View>

        <View style={Styles.titleAmostra}>
          <Text style={Styles.textAmostra}> Conheça a nossa Equipe </Text>
        </View>

        <View style={Styles.perfilContainer1}>

          <View style={Styles.perfil}>

            <Image style={Styles.perfilImage} source={require('../../image/perfil.png')} />
            <Text style={Styles.perfilText}>Bruno Vinicius</Text>
            <Text style={Styles.perfilText}>Age: 29 years</Text>
            <Text style={Styles.perfilText}>Officer: Front-End / Mobile Development</Text>

            <View style={Styles.perfilRedesContainer}>
              <Image style={Styles.perfilRedes} source={require('../../image/facebook.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/linkedin.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/github.png')} />
            </View>

          </View>

          <View style={Styles.perfil}>

            <Image style={Styles.perfilImage} source={require('../../image/perfil.png')} />
            <Text style={Styles.perfilText}>Marlon Vinicius</Text>
            <Text style={Styles.perfilText}>Age: 29 years</Text>
            <Text style={Styles.perfilText}>Officer: back-End / Mobile Development</Text>

            <View style={Styles.perfilRedesContainer}>
              <Image style={Styles.perfilRedes} source={require('../../image/facebook.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/linkedin.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/github.png')} />
            </View>

          </View>

          <View style={Styles.perfil}>

            <Image style={Styles.perfilImage} source={require('../../image/perfil.png')} />
            <Text style={Styles.perfilText}>Gabriel Araujo</Text>
            <Text style={Styles.perfilText}>Age: 29 years</Text>
            <Text style={Styles.perfilText}>Officer: Product Owner</Text>

            <View style={Styles.perfilRedesContainer}>
              <Image style={Styles.perfilRedes} source={require('../../image/facebook.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/linkedin.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/github.png')} />
            </View>

          </View>

          <View style={Styles.perfil}>

            <Image style={Styles.perfilImage} source={require('../../image/perfil.png')} />
            <Text style={Styles.perfilText}>Felipe Tardivo</Text>
            <Text style={Styles.perfilText}>Age: 29 years</Text>
            <Text style={Styles.perfilText}>Officer: database analyst</Text>

            <View style={Styles.perfilRedesContainer}>
              <Image style={Styles.perfilRedes} source={require('../../image/facebook.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/linkedin.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/github.png')} />
            </View>

          </View>

          <View style={Styles.perfil}>

            <Image style={Styles.perfilImage} source={require('../../image/perfil.png')} />
            <Text style={Styles.perfilText}>Matheus Mancio</Text>
            <Text style={Styles.perfilText}>Age: 29 years</Text>
            <Text style={Styles.perfilText}>Officer: mobile developer</Text>

            <View style={Styles.perfilRedesContainer}>
              <Image style={Styles.perfilRedes} source={require('../../image/facebook.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/linkedin.png')} />
              <Image style={Styles.perfilRedes} source={require('../../image/github.png')} />
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contato;
