import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'

export default class TextView extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const width = Dimensions.get('window').width
    const height = width * .931
    const { footer, buttonURL, buttonText, header, title, des, content } = this.props
    return(
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Text style={s.content}>{content}</Text>
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
    flex: 1, 
    padding: 0, 
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    backgroundColor: '#FFFFFF'
  },
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 50, 
    flex: 1, 
    backgroundColor: '#E8E8E8'
  },
  content : {
    marginLeft: 15, 
    marginRight: 15, 
    flex: 1, 
    textAlign: 'left'
  },
  dimensionStyle : {
    flexDirection: "row", 
    flexGrow: 1,
    aspectRatio: 1.074,
    justifyContent: 'center'
  }

});
