import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

import Material from 'react-native-vector-icons/MaterialIcons'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    emailIcon: {
        color: '#009387',
        fontSize: 30,
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
})

const Email = ({ containerStyle, email, index }) => (
    <TouchableOpacity style={{ paddingTop: 15 }}>
        <View style={[styles.container, containerStyle]}>
            <View style={styles.iconRow}>
                {index === 0 && (
                    <Icon
                        name="email"
                        underlayColor="transparent"
                        iconStyle={styles.emailIcon}
                    // onPress={() => onPressEmail()}
                    />
                )}
            </View>
            <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                    <Text style={styles.emailText}>{email}</Text>
                </View>

            </View>
        </View>
    </TouchableOpacity>
)





export default Email