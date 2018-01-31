import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import { Footer, Header } from '@doubledutch/rn-components'


export default class TwoImage extends Component {
  constructor(props) {
      super(props)
  }
  
  render(){
    const width = Dimensions.get('window').width
    const height = width * .4959
    const { footer, buttonURL, buttonText, header, title, des, imageInfo } = this.props

    return(
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Image source={{uri: imageInfo[0].image}} style={{width, height}}/>
        <Image source={{uri: imageInfo[1].image}} style={{marginTop: 10, width, height}}/>
        <Footer
        footer={footer}
        buttonURL={buttonURL}
        buttonText={buttonText}
        />
      </View>
    )
  }

}


const s = ReactNative.StyleSheet.create({
  container : {
    padding: 0, 
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    backgroundColor: "#FFFFFF"
  },
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 50, 
    flex: 1, 
    backgroundColor: "#E8E8E8"
  }
    
});

