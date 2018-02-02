import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Footer from './Footer'
import Header from './Header'

export default class OneImage extends Component {
  constructor(props) {
      super(props)
      this.state = {
        userColor: client.primaryColor
      }
  }
  
  render(){
    const width = Dimensions.get('window').width
    const height = width * .931
    const { footer, buttonURL, buttonText, header, title, des } = this.props
    return(
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Image source={{uri: this.props.imageInfo.image}} style={s.dimensionStyle}/>
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
    borderBottomWidth:1
  },
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 50, 
    flex: 1  
  },
  dimensionStyle : {
    flexDirection: "row", 
    flexGrow: 1,
    aspectRatio: 1.074,
    justifyContent: 'center',
    backgroundColor:'#E8E8E8'
  }
  
  
});


