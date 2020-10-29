import React, { useEffect, useState } from 'react'

import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native'

import { ListItem, Avatar } from 'react-native-elements'








const MemberList = ({ navigation }) => {


    const members = navigation.getParam("members")

    console.log(members)

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => {

        console.log(item)

        return (
            <ListItem bottomDivider >
                <Avatar title={item.userId["name"]} source={{ uri: item.userId["picture"] }} />
                <ListItem.Content>
                    <ListItem.Title>Name : {item.userId["name"]}</ListItem.Title>
                    <ListItem.Subtitle>Email: {item.userId["email"]}</ListItem.Subtitle>
                    <ListItem.Subtitle>Recipient : {item.recipientId}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={members}
                renderItem={renderItem}
            />
        </View>
    )


}


export default MemberList;