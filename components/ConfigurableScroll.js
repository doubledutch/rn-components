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
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SmallView, SpeakerCarousel, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, DualSmallViews, Twitter, VideoView, VideoCarousel, SquaresRow} from './index'

export default class ConfigurableScroll extends Component {

  render() {
    const {componentConfigs} = this.props
    return (
      <View style={{ flex: 1, backgroundColor:'#E8E8E8', paddingLeft: 10, paddingRight: 10 }}>
        {(!componentConfigs.length && !this.props.isLaunch) ? <Text>Loading...</Text> : null}
        <ScrollView style={styles.container} onScroll={this.props.handleScroll}>
          { componentConfigs.map(this.getComponent) }
        </ScrollView>
      </View>
    )
  }

  getComponent = (details, i) => {
    const color = this.props.color || "#000000"
    switch(details.type) {
      case "Landing Page Cell" :
        return(
          <LandingPage {...details} color={color} excludeNativeComponents={this.props.excludeNativeComponents} key={i} youTubeApiKey={this.props.youTubeApiKey} />
        )
      case "Video Carousel" :
        return(
          <VideoCarousel {...details} color={color} excludeNativeComponents={this.props.excludeNativeComponents} key={i} />
        )
      case "Twitter Cell" :
        return(
          <Twitter {...details} color={color} key={i} />
        )
      case 'Details Cell':
        return( 
          <SmallView {...details} color={color} key={i} />
        )
      case "Dual Details Cell" :
        return(
          <DualSmallViews {...details} color={color} key={i}/>
      )
      case "Squares Cell":
        return(
          <ImageSquares {...details} color={color} key={i} />
        )
      case "Squares Row":
        return(
          <SquaresRow {...details} color={color} key={i} />
        )
      case "Text Squares Cell":
        return(
          <Squares {...details} color={color} key={i} />
        )
      case "Image Carousel":
        return(
          <ImageCarousel {...details} color={color} key={i} />
        )
      case "Speaker Highlight Cell":
        return(
          <SpeakerCarousel {...details} color={color} key={i} />
        )
      case "Image Cell":
        return(
          <OneImage {...details} color={color} key={i} />
        )
      case "Dual Images Cell":
        return(
          <TwoImage {...details} color={color} key={i} />
        )
      case "Text Cell":
        return(
          <TextView {...details} color={color} key={i} />
        )
      case "Footer Cell":
        return(
          <ButtonFooter {...details} color={color} key={i} />
        )
      case "Video Cell":
        return(
          <VideoView {...details} key={i} color={color} youTubeApiKey={this.props.youTubeApiKey} />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
