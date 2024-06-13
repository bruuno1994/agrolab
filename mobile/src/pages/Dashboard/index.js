import React from "react";
import { View, Text, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import { Text as SvgText } from 'react-native-svg';
import { PieChart, LineChart, Grid, YAxis, StackedBarChart } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';


import { Styles } from './styles';

export default function Dashboard() {

    const data = [45.8, 54.2];

    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: (
                '#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000'
            ).slice(0, 7)
        },
        label: index === 0 ? 'False' : 'True'
    }));

    const Label = ({ slices }) => {
        return slices.map((slice, index) => {
            const { pieCentroid, data } = slice;
            return (
                <SvgText
                    key={`label}-${index}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill="black"
                    textAnchor={'middle'}
                    alignmentBaseLine={'middle'}
                    fontSize={15}
                >
                    {data.value}%
                </SvgText>
            )
        })
    }

    const Legend = ({ data }) => {
        return data.map((item, index) => (
            <View key={`label}-${index}`} style={Styles.legendItem}>
                <View style={[Styles.legendColor, { backgroundColor: item.svg.fill }]} />
                <Text style={Styles.legendText}>{item.label}</Text>
            </View>
        ));
    }
    const barData = [
        { value: 23, svg: { stroke: 'blue' }, key: 'day-1' },
        { value: 24, svg: { stroke: 'blue' }, key: 'day-2' },
        { value: 25, svg: { stroke: 'blue' }, key: 'day-3' },
        { value: 22, svg: { stroke: 'blue' }, key: 'day-4' },
        { value: 26, svg: { stroke: 'blue' }, key: 'day-5' },
        { value: 21, svg: { stroke: 'blue' }, key: 'day-6' },
        { value: 23, svg: { stroke: 'blue' }, key: 'day-7' },
        { value: 24, svg: { stroke: 'blue' }, key: 'day-8' },
        { value: 25, svg: { stroke: 'blue' }, key: 'day-9' },
        { value: 22, svg: { stroke: 'blue' }, key: 'day-10' },
        { value: 26, svg: { stroke: 'blue' }, key: 'day-11' },
        { value: 21, svg: { stroke: 'blue' }, key: 'day-12' },
        { value: 23, svg: { stroke: 'blue' }, key: 'day-13' },
        { value: 24, svg: { stroke: 'blue' }, key: 'day-14' },
        { value: 25, svg: { stroke: 'blue' }, key: 'day-15' },
        { value: 22, svg: { stroke: 'blue' }, key: 'day-16' },
        { value: 26, svg: { stroke: 'blue' }, key: 'day-17' },
        { value: 21, svg: { stroke: 'blue' }, key: 'day-18' },
        { value: 23, svg: { stroke: 'blue' }, key: 'day-19' },
        { value: 24, svg: { stroke: 'blue' }, key: 'day-20' },
        { value: 25, svg: { stroke: 'blue' }, key: 'day-21' },
        { value: 22, svg: { stroke: 'blue' }, key: 'day-22' },
        { value: 26, svg: { stroke: 'blue' }, key: 'day-23' },
        { value: 21, svg: { stroke: 'blue' }, key: 'day-24' },
        { value: 23, svg: { stroke: 'blue' }, key: 'day-25' },
        { value: 24, svg: { stroke: 'blue' }, key: 'day-26' },
        { value: 25, svg: { stroke: 'blue' }, key: 'day-27' },
        { value: 22, svg: { stroke: 'blue' }, key: 'day-28' },
        { value: 26, svg: { stroke: 'blue' }, key: 'day-29' },
        { value: 21, svg: { stroke: 'blue' }, key: 'day-30' },


    ];
    const keys = ['soil', 'air'];
    const colors = ['#7b4173', '#f16913'];
    const formattedBarData = barData.map(item => ({
        ...item,
        soil: item.soil,
        air: item.air,
    }));

    const lineData = [25, 23, 22, 21, 24, 25, 23, 22, 21, 24, 25, 23, 22, 21, 24, 25, 23, 22, 21, 24, 25, 23, 22, 21, 24, 25, 23, 22];


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={Styles.containerHome}>
                    <View style={Styles.containerLogo}>
                        <Image
                            style={Styles.logo}
                            source={require('../../image/logo.png')}
                        />
                    </View>
                    <View style={Styles.titleAmostra}>
                        <Text style={Styles.textAmostra}> DASHBOARD AgroLab</Text>
                    </View>
                </View>



                <View style={Styles.container}>

                    <View style={Styles.MediaTemp}>
                        <Text style={Styles.textMediaTemp}>Média de temperatura (°C) no mês de Abril</Text>
                        <Text style={Styles.numberMediaTemp}>23,54</Text>
                    </View>

                    <View style={Styles.graficoPizza}>
                        <Text style={Styles.textgraficoPizza}>Exposição a Luz (%)</Text>
                        <PieChart style={{ height: 160, width: 210, marginTop: 15 }} data={pieData}>
                            <Label />
                        </PieChart>
                        <View style={Styles.containerLegenda}>
                            <Text>LEGENDAS:   </Text>
                            <Legend data={pieData} />
                        </View>
                    </View>
                </View>

                <View style={Styles.contaner2}>

                    <View style={Styles.mediaMes}>

                        <Text style={Styles.chartTitle}>Média de Temperatura (°C) e Umidade (%)</Text>
                        <View style={{ flexDirection: 'row', height: 200 }}>
                            <YAxis
                                data={lineData}
                                contentInset={{ top: 20, bottom: 20 }}
                                svg={{ fontSize: 10, fill: 'black' }}
                                numberOfTicks={6}
                            />
                            <LineChart
                                style={{ flex: 1, marginLeft: 10 }}
                                data={lineData}
                                svg={{ stroke: 'rgb(134, 65, 244)' }}
                                contentInset={{ top: 20, bottom: 20 }}
                            >
                                <Grid />
                            </LineChart>
                        </View>
                    </View>


                    <View style={Styles.mediaSolo}>

                        <Text style={Styles.chartTitle}>Umidade do Solo (%) e do Ar (%)</Text>
                        <StackedBarChart
                            style={{ height: 200 }}
                            keys={keys}
                            colors={colors}
                            data={formattedBarData}
                            showGrid={false}
                            contentInset={{ top: 30, bottom: 30 }}
                        >
                            <Grid />
                        </StackedBarChart>
                    </View>

                    <View style={Styles.mediaUmid}>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


