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

export default class TextView extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    const { footer, buttonURL, buttonText, header, title, des, content, intro, color } = this.props
    return(
      <View style={s.container}>
        <Header
          header = {header}
          title = {title}
          des = {des}
          intro = {intro}
        />
        <Text style={s.content}>{content}</Text>
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
  container : {
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
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor: '#E8E8E8'
  },
  content : {
    marginLeft: 15, 
    marginRight: 15, 
    flex: 1, 
    textAlign:'center',
    color: '#364247'
  },

});
