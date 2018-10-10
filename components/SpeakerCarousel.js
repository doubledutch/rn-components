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
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import Carousel from 'react-native-carousel-view';
import Footer from './Footer'
import Header from './Header'
import { linkCheck } from './functionHelpers'


export default class SpeakerCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 240
    }
  }

  carouselCells = (maxLines) => {
    return(
      this.props.speakerInfo.map(((item, i) =>
        <TouchableOpacity key={i} onPress={()=>linkCheck(item.URL)} style={s.cell} activeOpacity={1.0}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={{uri: item.image}} style={s.image}/>
            <View style={{flexDirection: 'column', marginRight: 15, flex: 1}}>
              <Text style={{fontSize: 24, marginLeft: 20, marginTop: 5, color: '#364247'}}>{item.name}</Text>
              <Text numberOfLines={2} style={{fontSize: 16, marginLeft: 20, marginTop: 0, color: '#364247'}}>{item.title}{(item.company && item.title) ? "," : null} {item.company}</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text numberOfLines={maxLines}  style={s.cellDes}>{item.des}</Text>
          </View>
        </TouchableOpacity>     
      ))
    )
  }

  findHeight = () => {
    const width = Dimensions.get('window').width
    let setHeight = 240
    let string = 1
    const fontConstant = 2
    const CPL = width / (14 / fontConstant)
    this.props.speakerInfo.forEach((item) => {
      if (item.des.length > string) {
        string = item.des.length
      }
    })
    const lines = Math.round(string / CPL + 0.5)
    setHeight = lines * 18 + 128
    return setHeight
  }

  findLines = () => {
    const width = 286
    let string = 1
    const fontConstant = 2
    const CPL = width / (14 / fontConstant)
    this.props.speakerInfo.forEach((item) => {
      if (item.des.length > string) {
        string = item.des.length
      }
    })
    const lines = Math.round(string / CPL + 0.5)
    return lines
  }


  render() {
    const { footer, buttonURL, buttonText, header, title, des, intro } = this.props
    const maxLines = this.findLines()
    return (
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        intro = {intro}
        />
        <Carousel
        indicatorAtBottom={true}
        animate={false}
        indicatorOffset={10}
        height={this.findHeight()}
        width={Dimensions.get('window').width}
        >
        {this.carouselCells(maxLines)}    
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
  container: {
    marginBottom: 0, 
    borderColor:'#D8D8D8', 
    borderBottomWidth:1, 
    backgroundColor: "#ffffff"
  },
  border: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor:'#E8E8E8'
  },
  cell: {
    width: Dimensions.get('window').width,  
    backgroundColor:'#E8E8E8',
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  cellDes: {
    flex: 1, 
    textAlign:'left', 
    marginLeft: 15, 
    marginRight: 15, 
    marginBottom: 15, 
    fontSize: 14,
    color: '#364247'
  },
  image: {
    marginLeft: 15,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 10,
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  }

});




