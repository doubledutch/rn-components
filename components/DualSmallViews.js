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
import ReactNative, { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import Footer from './Footer'
import Header from './Header'
import { linkCheck } from './functionHelpers'

export default class DualSmallViews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aspectRatio: 1,
      aspectRatioBottom: 1
    }
  }

  componentDidMount() {
    this.getImageSize("aspectRatio", this.props.image1)
    this.getImageSize("aspectRatioBottom", this.props.image2)
  }

  getImageSize = (variable, image) => {
    Image.getSize(image, (width, height) => {
      let newAspectRatio = width/height
      this.setState({[variable]: newAspectRatio})
    })
  }

  render() {
    const { image1, title1, des1, image2, title2, des2, url1, url2, footer, buttonURL, buttonText, header, title, des, intro } = this.props
    return(
      <View style={s.container}>
        <Header
          header = {header}
          title = {title}
          des = {des}
          intro = {intro}
        />
        <TouchableOpacity onPress={()=>linkCheck(url1)} style={s.main}>
          <Image style={[s.image, {aspectRatio: this.state.aspectRatio}]} source={{uri: image1}} />
          <View style={s.info}>
            <Text style={s.title}>{title1}</Text>
            <Text style={s.description}>{des1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>linkCheck(url2)} style={s.main2}>
          <Image style={[s.image, {aspectRatio: this.state.aspectRatioBottom}]} source={{uri: image2}} />
          <View style={s.info}>
            <Text style={s.title}>{title2}</Text>
            <Text style={s.description}>{des2}</Text>
          </View>
        </TouchableOpacity>
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
    borderRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 25,
    overflow: 'hidden'
  },
  main: {
    padding: 0,
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    borderTopWidth:1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: "center"
  },
  main2: {
    padding: 0,
    borderColor:'#D8D8D8',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: "center"
  },
  image: {
    height: 90,
    resizeMode: 'contain'
  },
  info: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: '#364247'
  },
  description: {
    fontSize: 14,
    color: '#364247'
  }
})
