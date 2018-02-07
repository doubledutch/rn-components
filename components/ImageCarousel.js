import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, WebView, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Carousel from 'react-native-carousel'
import Footer from './Footer'
import Header from './Header'


export default class ImageCarousel extends Component {
  constructor(props) {
    super(props)
  }

  carouselCells = () => {
    const width = Dimensions.get('window').width
    const dimensionStyle = {
      width : width,
      height : width * .931
    }
    return(
      this.props.imageInfo.map(((item, i) =>                
        <TouchableOpacity key={i} onPress={()=>{Linking.openURL(item.URL)}} style={[s.cell, dimensionStyle]}>
          <Image style={{flex: 1}}source={{uri: item.image}}></Image>
        </TouchableOpacity> 
      ))
    )
  }
  
  render() {
    const { footer, buttonURL, buttonText, header, title, des } = this.props
    return (
      <View style={s.component}>
        <View style={s.top}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Carousel
        indicatorAtBottom={true}
        animate={false}
        indicatorOffset={0}
        >
          {this.carouselCells()}    
        </Carousel>
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
  cell: {
    marginBottom: 25, 
    backgroundColor:'#E8E8E8',
  },
  component: {
    marginBottom: 0, 
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    backgroundColor: "white"
  },
  top: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor:'#E8E8E8'
  }

});




