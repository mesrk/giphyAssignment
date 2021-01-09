import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default function Loader({color}) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color={color} />
        </View>
    )
}
