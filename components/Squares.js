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
  import client, { Color } from '@doubledutch/rn-client'
  import Footer from './Footer'
  import Header from './Header'

  export default class Squares extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      const width = Dimensions.get('window').width / 2 - 30
      const height = width * .6792
      const { footer, buttonURL, buttonText, header, title, des, image1, image2, image3, image4, text } = this.props
      return (
        <View style={s.container}>
          <View style={s.border}/>
          <Header
            header = {header}
            title = {title}
            des = {des}
          />
          <View style={s.squareContainer}>
            <View style={{flexDirection:'row'}}>
              <View style={s.cellLeft}>
                <Image style={{width, height, marginBottom:14}} source={{uri: image1}}/>
                <Text style={{textAlign:'center'}}>{this.props.text1}</Text>
              </View>
              <View style={s.cellRight}>
                <Image style={{width, height, marginBottom:14}} source={{uri: image2}}/>
                <Text style={{textAlign:'center'}}>{this.props.text2}</Text>
              </View>   
            </View>
            <View style={{flexDirection:'row',borderTopWidth:1,borderColor:'#D8D8D8'}}>
              <View style={s.cellLeft}>
                <Image style={{width, height, marginBottom:14}} source={{uri: image3}}/>
                <Text style={{textAlign:'center'}}>{this.props.text3}</Text>
              </View>
              <View style={s.cellRight}>
                <Image style={{width, height, marginBottom:14}} source={{uri: image4}}/>
                <Text style={{textAlign:'center'}}>{this.props.text4}</Text>
              </View>
            </View>
          </View>
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
      padding: 0, 
      borderColor:'#D8D8D8',
      borderBottomWidth:1
    },
    border: {
      borderColor:'#D8D8D8',
      borderBottomWidth:1, 
      height: 25, 
      flex: 1
    },
    squareContainer: {
      backgroundColor:'#FFFFFF',
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor:'#D8D8D8'
    },
    cellLeft: {
      borderRightWidth:1,
      borderColor:'#D8D8D8',
      flex:1,
      padding:15,
      alignItems:'center'
    },
    cellRight: {
      flex:1,
      padding:15,
      alignItems:'center'
    }
  });


