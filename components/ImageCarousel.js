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
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, WebView, Linking, Alert } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'
import Carousel from 'react-native-carousel-view';
import Footer from './Footer'
import Header from './Header'
import { linkCheck } from './functionHelpers'



export default class ImageCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aspectRatio: 1,
      height: 100
    }
  }

  componentDidMount() {
    Image.getSize(this.props.imageInfo[0].image, (width, height) => {
      let aspectRatio = width/height
      this.setState({aspectRatio})
    })
  }

  carouselCells = () => {
    const dimensionStyle = {
      aspectRatio: this.state.aspectRatio
    }
    return(
      this.props.imageInfo.map(((item, i) =>                
        <TouchableOpacity key={i} onPress={() => linkCheck(item.URL)} style={[s.cell, dimensionStyle]} activeOpacity={1.0}>
          <Image style={{flex: 1, resizeMode: 'contain'}}source={{uri: item.image}}></Image>
        </TouchableOpacity> 
      ))
    )
  }
  
  render() {
    const height = (Dimensions.get('window').width / this.state.aspectRatio) + 25
    const { footer, buttonURL, buttonText, header, title, des, intro } = this.props
    return (
      <View style={s.component}>
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
        height={ height }
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
    backgroundColor:'white',
  },
  component: { 
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 25,
    overflow: 'hidden'
  },
  top: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor:'#E8E8E8'
  }

});








