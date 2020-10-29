import React, { useEffect, useState } from 'react'

import { View, Text, ScrollView, Dimensions } from 'react-native'


import { connect } from 'react-redux'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Income = ({ myEvents }) => {


    const [names, setNames] = useState([])
    const [tickets, setTickets] = useState([])
    const [pieData, setPie] = useState([])

    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };


    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    useEffect(() => {


        let nam = []
        let tick = []
        let pie = []

        console.log(myEvents)


        for (let i in myEvents) {

            let color = '#' + Math.random().toString(16).slice(-3)

            nam.push(myEvents[i]["name"])
            tick.push(parseInt(myEvents[i]["price"]))

            pie.push(
                {
                    name: myEvents[i]["name"],
                    population: myEvents[i]["members"].length,
                    color: color,
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                })


        }

        setNames(nam)
        setTickets(tick)


        console.log(pie)

        setPie(pie)



    }, [])



    return (
        <ScrollView>
            <View>
                {tickets.length > 0 ? <LineChart
                    data={{
                        labels: names,
                        datasets: [
                            {
                                data: tickets
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="RS "

                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "green",
                        backgroundGradientFrom: "#009387",
                        backgroundGradientTo: "#009387",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,

                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{



                    }}
                /> : null}

            </View>

            <View>
                <Text style={{textAlign:"center",marginTop:5,fontSize:24}}>Strength</Text>
                {pieData ? <PieChart
                    data={pieData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                /> : null}

            </View>
        </ScrollView>
    )


}

const mapState = (state) => {


    return {

        myEvents: state.event
    }


}

export default connect(mapState)(Income);