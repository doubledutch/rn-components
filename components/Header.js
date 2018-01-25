import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'

export default class Header extends Component {
  constructor(props) {
      super(props)
    }

    render() {
      const { header, title, des } = this.props
      if (header) {
        return (
          <View style={{backgroundColor: 'white'}}>    
            <Text style={s.header}>{title}</Text>
            <Text style={s.description}>{des}</Text>
          </View>
        )
      }
      else {
        return (
          <View style={{backgroundColor: 'white'}}>
            <Text style={s.header2}>{title}</Text>
          </View>
        )
      }
    }
}

const s = ReactNative.StyleSheet.create({
  header : {
    textAlign: "center",
    fontSize: 26,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom:5
  },
  description : {
    textAlign: "center",
    fontSize: 14,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 25
  },
  header2: {
    textAlign: "left",
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
    marginTop: 5,
    marginBottom:5
  }

});