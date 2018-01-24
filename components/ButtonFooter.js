import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Linking } from 'react-native'
import client, {Color} from '@doubledutch/rn-client'

export class ButtonFooter extends Component {
    constructor(props) {
      super()
    }

    render(){
      const { buttons } = this.props
      return(
          <View style={s.container}>
            <TouchableOpacity onPress={()=>{
              this.openWebURL(buttons[0].buttonURL)
            }}>
              <View style={s.buttonBox}>
                <Text style={s.button}>{buttons[0].buttonTitle}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              Linking.openURL(buttons[0].buttonURL)
            }} style={{marginTop:20}}>
              <View style={s.buttonBox}>
                <Text style={s.button}>{buttons[1].buttonTitle}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
    }
}

const s = ReactNative.StyleSheet.create({
  container: {
    padding: 20
  },
  buttonBox: {
    borderColor: client.primaryColor,
    borderWidth:1,
    backgroundColor:'#FFFFFF',
    borderRadius:4,
    padding:10
  },
  button: {
    color: client.primaryColor,
    textAlign:'center',
    fontSize:16
  }

})