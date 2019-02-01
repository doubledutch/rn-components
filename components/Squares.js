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

export default class Squares extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aspectRatio: 1
    }
  }

  componentDidMount() {
    Image.getSize(this.props.image1, (width, height) => {
      const aspectRatio = width/height
      this.setState({aspectRatio})
    })
  }


  render() {
    const width = Dimensions.get('window').width / 2 - 15
    const { footer, buttonURL, buttonText, header, title, des, image1, image2, image3, image4, text, intro, url1, url2, url3, url4, color } = this.props
    const { aspectRatio } = this.state
    return (
      <View style={s.container}>
        <Header
          header = {header}
          title = {title}
          des = {des}
          intro = {intro}
        />
        <View style={s.squareContainer}>
          <View style={{flexDirection:'row', marginBottom: 10}}>
            <TouchableOpacity onPress={()=>linkCheck(url1 || "")} style={s.cellLeft}>
              <Image style={{width, aspectRatio}} source={{uri: image1}}/>
              <Text style={{textAlign:'center', color: '#364247'}}>{this.props.text1}</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <TouchableOpacity onPress={()=>linkCheck(url2 || "")} style={s.cellRight}>
              <Image style={{width, aspectRatio}} source={{uri: image2}}/>
              <Text style={{textAlign:'center', color: '#364247'}}>{this.props.text2}</Text>
            </TouchableOpacity>  
          </View>
          <View style={{flexDirection:'row', marginBottom: 10}}>
            <TouchableOpacity onPress={()=>linkCheck(url3 || "")} style={s.cellLeft}>
              <Image style={{width, aspectRatio}} source={{uri: image3}}/>
              <Text style={{textAlign:'center', color: '#364247'}}>{this.props.text3}</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <TouchableOpacity onPress={()=>linkCheck(url4 || "")} style={s.cellRight}>
              <Image style={{width, aspectRatio}} source={{uri: image4}}/>
              <Text style={{textAlign:'center', color: '#364247'}}>{this.props.text4}</Text>
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
  container: {
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
    alignItems:'center'
  },
  cellRight: {
    alignItems:'center'
  }
});


