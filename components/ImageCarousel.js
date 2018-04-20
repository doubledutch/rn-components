/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, WebView, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Carousel from 'react-native-carousel-view';
import Footer from './Footer'
import Header from './Header'


export default class ImageCarousel extends Component {
  constructor(props) {
    super(props)
  }

  carouselCells = (width) => {
    const dimensionStyle = {
      width : width,
      height : width * .931
    }
    return(
      this.props.imageInfo.map(((item, i) =>                
        <TouchableOpacity key={i} onPress={()=>{Linking.openURL(item.URL)}} style={[s.cell, dimensionStyle]} activeOpacity={1.0}>
          <Image style={{flex: 1, resizeMode: 'contain'}}source={{uri: item.image}}></Image>
        </TouchableOpacity> 
      ))
    )
  }
  
  render() {
    const width = Dimensions.get('window').width
    const { footer, buttonURL, buttonText, header, title, des, intro } = this.props
    return (
      <View style={s.component}>
        <View style={s.top}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        intro = {intro}
        />
        <Carousel
        indicatorAtBottom={true}
        animate={false}
        indicatorOffset={0}
        height={ width * .931 + 25 }
        >
          {this.carouselCells(width)}    
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








