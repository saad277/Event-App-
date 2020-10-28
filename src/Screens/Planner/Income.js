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

    useEffect(() => {


        let nam = []
        let tick = []

        console.log(myEvents)


        for (let i in myEvents) {

            nam.push(myEvents[i]["name"])
            tick.push(parseInt(myEvents[i]["price"]))

        }

        setNames(nam)
        setTickets(tick)

        console.log(tickets)




    }, [])



    return (
        <ScrollView>
            <View>
                <LineChart
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
                />
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