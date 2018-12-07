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


export default class TwoImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aspectRatio: 1,
      aspectRatioBottom: 1
    }
  }

  componentDidMount() {
    this.getImageSize("aspectRatio", this.props.imageInfo[0].image)
    this.getImageSize("aspectRatioBottom", this.props.imageInfo[1].image)
  }

  getImageSize = (variable, image) => {
    Image.getSize(image, (width, height) => {
      let newAspectRatio = width/height
      this.setState({[variable]: newAspectRatio})
    })
  }
  
  render(){
    const { footer, buttonURL, buttonText, header, title, des, imageInfo, intro } = this.props
    return(
      <View style={s.container}>
        <Header
        header = {header}
        title = {title}
        des = {des}
        intro = {intro}
        />
        <Image source={{uri: imageInfo[0].image}} style={[s.dimensionStyle, {aspectRatio: this.state.aspectRatio}]}/>
        <Image source={{uri: imageInfo[1].image}} style={[s.dimensionStyle1, {aspectRatio: this.state.aspectRatioBottom} ]}/>
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
  container : {
    borderRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 25,
    overflow: 'hidden',
    backgroundColor: "#FFFFFF"
  },
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor: "#E8E8E8"
  },
  dimensionStyle : {
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: "#FFFFFF"
  },
  dimensionStyle1 : {
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'contain',
    backgroundColor: "#FFFFFF"
  }
    
});

