import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Video from 'react-native-video'
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube'


export class Footer extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
        const { footer, buttonURL, buttonText } = this.props
        if (footer) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <TouchableOpacity onPress={()=>{
                    Linking.openURL(buttonURL)
                    }} style={{marginTop:0}}>
                        <View style={s.footerButton}>
                            <Text style={s.footerButtonText}>{buttonText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const s = ReactNative.StyleSheet.create({
  footerButton : {
    backgroundColor: client.primaryColor,
    borderRadius:4,
    padding:10, 
    margin: 20, 
    marginTop: 0
},
footerButtonText : {
    color:'white',
    textAlign:'center',
    fontSize:16
},
  
});