'use strict'
import React, { Component } from 'react';
import ReactNative, { Button, ScrollView, StyleSheet, View } from 'react-native';
import { SmallView, SpeakerCarousel, Footer, Header, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, DualSmallViews, Twitter} from './index'

export default class ConfigurableScroll extends Component {

  render() {
    const {componentConfigs} = this.props
    return (
      <View style={{ flex: 1, backgroundColor:'#E8E8E8' }}>
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
