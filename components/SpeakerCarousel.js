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
import client, {Color} from '@doubledutch/rn-client'
import Carousel from 'react-native-carousel-view';
import Footer from './Footer'
import Header from './Header'


export default class SpeakerCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 240
    }
  }

  carouselCells = () => {
    return(
      this.props.speakerInfo.map(((item, i) =>
        <TouchableOpacity key={i} onPress={()=>{Linking.openURL(item.URL)}} style={s.cell} activeOpacity={1.0}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={{uri: item.image}} style={s.image}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24, marginLeft: 20, marginTop: 5}}>{item.name}</Text>
              <Text style={{fontSize: 16, marginLeft: 20, marginTop: 0}}>{item.title}, {item.company}</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={s.cellDes}>{item.des}</Text>
          </View>
        </TouchableOpacity>     
      ))
    )
  }



  render() {
    const { footer, buttonURL, buttonText, header, title, des } = this.props
    return (
      <View style={s.container}>
        <View style={s.border}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        />
        <Carousel
        indicatorAtBottom={true}
        animate={false}
        indicatorOffset={10}
        height={this.state.height}
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
    backgroundColor:'#E8E8E8'
  },
  cellDes: {
    flex: 1, 
    textAlign:'left', 
    marginLeft: 15, 
    marginRight: 15, 
    marginBottom: 15, 
    fontSize: 14
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




