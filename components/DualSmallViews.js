import React, { Component } from 'react'
import ReactNative, { Text, View, Image, TouchableOpacity } from 'react-native'
import Footer from './Footer'
import Header from './Header'

export default class DualSmallViews extends Component {
  render() {
    const { image1, title1, description1, image2, title2, description2, url1, url2, footer, buttonURL, buttonText, header, title, des } = this.props
    return(
      <View>
        <View style={s.top} />
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <TouchableOpacity onPress={()=>{Linking.openURL(url1)}} style={s.main}>
          <Image style={s.image} source={{uri: image1}} />
          <View style={s.info}>
            <Text style={s.title}>{title1}</Text>
            <Text style={s.description}>{description1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL(url2)}} style={s.main2}>
          <Image style={s.image} source={{uri: image2}} />
          <View style={s.info}>
            <Text style={s.title}>{title2}</Text>
            <Text style={s.description}>{description2}</Text>
          </View>
        </TouchableOpacity>
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
  top: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    height: 25,
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
  main: {
    padding: 0,
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    borderTopWidth:1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  main2: {
    padding: 0,
    marginTop: 10,
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    borderTopWidth:1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    height: 110,
    width: 110
  },
  info: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  description: {
    fontSize: 14
  }
})