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
import Footer from './Footer'
import Header from './Header'
import { linkCheck } from './functionHelpers'


export default class SquaresRow extends Component {
  constructor(props) {
      super(props)
  }

  render(){
    const width = Dimensions.get('window').width / 3 - 20
    const height = width
    const { footer, buttonURL, buttonText, header, title, des, image1, image2, image3, intro, url1, url2, url3, color } = this.props
      return (
        <View style={s.component}>
          <Header
            header = {header}
            title = {title}
            des = {des}
            intro = {intro}
          />
          <View style={s.box}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>linkCheck(url1 || "")} style={[s.imageBoxTop, {alignSelf: "flex-start"}]}>
                <Image style={{width, height}} source={{uri: image1}} alt=""/>
              </TouchableOpacity>
              <View style={{flex: 1}}/>
              <TouchableOpacity onPress={()=>linkCheck(url2 || "")} style={s.imageBoxTop}>
                <Image style={{width, height}} source={{uri: image2}} alt=""/>
              </TouchableOpacity>   
              <View style={{flex: 1}}/>
              <TouchableOpacity onPress={()=>linkCheck(url3 || "")} style={s.imageBoxBottom}>
                <Image style={{width, height}} source={{uri: image3}} alt=""/>
              </TouchableOpacity>
            </View>
          </View>
          <Footer
            footer={footer}
            buttonURL={buttonURL}
            buttonText={buttonText}
            color={color}
          />
        </View>
      )
    }
}


const s = ReactNative.StyleSheet.create({
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
    flex: 1
  },
  box: {
    backgroundColor:'#FFFFFF',
    borderTopWidth:1,
    borderColor:'#D8D8D8',
  },
  imageBoxTop: {
    alignItems:'center'
  },
  lowerRow: {
    flexDirection:'row',
    borderColor:'#D8D8D8'
  },
  imageBoxBottom: {
    alignItems:'center'
  }
});
