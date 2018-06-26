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

'use strict'
import React, { Component } from 'react';
import ReactNative, { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import { SmallView, SpeakerCarousel, Footer, Header, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, DualSmallViews, Twitter, VideoView} from './index'

export default class ConfigurableScroll extends Component {

  render() {
    const {componentConfigs} = this.props
    return (
      <View style={{ flex: 1, backgroundColor:'#E8E8E8' }}>
        {(!componentConfigs.length) ? <Text>Loading...</Text> : null}
        <ScrollView style={styles.container}>
          { componentConfigs.map(this.getComponent) }
        </ScrollView>
      </View>
    )
  }

  getComponent = (details, i) => {
    switch(details.type) {
      case "Landing Page Cell" :
        return(
          <LandingPage {...details} excludeNativeComponents={this.props.excludeNativeComponents} key={i} />
        )
      case "Video Carousel" :
        return(
          <VideoCarousel {...details} excludeNativeComponents={this.props.excludeNativeComponents} key={i} />
        )
      case "Twitter Cell" :
        return(
          <Twitter {...details} key={i} />
        )
      case 'Details Cell':
        return( 
          <SmallView {...details} key={i} />
        )
      case "Dual Details Cell" :
        return(
          <DualSmallViews {...details} key={i}/>
      )
      case "Squares Cell":
        return(
          <ImageSquares {...details} key={i} />
        )
      case "Text Squares Cell":
        return(
          <Squares {...details} key={i} />
        )
      case "Image Carousel":
        return(
          <ImageCarousel {...details} key={i} />
        )
      case "Speaker Highlight Cell":
        return(
          <SpeakerCarousel {...details} key={i} />
        )
      case "Image Cell":
        return(
          <OneImage {...details} key={i} />
        )
      case "Dual Images Cell":
        return(
          <TwoImage {...details} key={i} />
        )
      case "Text Cell":
        return(
          <TextView {...details} key={i} />
        )
      case "Footer Cell":
        return(
          <ButtonFooter {...details} key={i} />
        )
      case "Video Cell":
        return(
          <VideoView {...details} key={i} />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
