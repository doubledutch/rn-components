import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Footer from './Footer'
import Header from './Header'


export default class TwoImage extends Component {
  constructor(props) {
      super(props)
  }
  
  render(){

    const { footer, buttonURL, buttonText, header, title, des, imageInfo } = this.props

    return(
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Image source={{uri: imageInfo[0].image}} style={s.dimensionStyle}/>
        <Image source={{uri: imageInfo[1].image}} style={s.dimensionStyle1}/>
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
    height: 25, 
    flex: 1, 
    backgroundColor: "#E8E8E8"
  },
  dimensionStyle : {
    flexDirection: "row", 
    flexGrow: 1,
    aspectRatio: 2.0165,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  dimensionStyle1 : {
    flexDirection: "row", 
    flexGrow: 1,
    aspectRatio: 2.0165,
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'contain'
  }
    
});

