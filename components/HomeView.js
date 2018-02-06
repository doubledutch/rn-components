'use strict'
import React, { Component } from 'react';
import ReactNative, { Button, ScrollView, StyleSheet, View } from 'react-native';
import { SmallView, SpeakerCarousel, Footer, Header, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, LandingPageExpo} from './index'

export default class HomeView extends Component {

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

  getComponent = (details) => {
    switch(details.type) {
      case "Landing Page Cell" :
        return(
          <LandingPage {...details} excludeNativeComponents={this.props.excludeNativeComponents} />
        )
      case 'Details Cell':
        return( 
          <SmallView {...details} />
        )
      case "Squares Cell":
        return(
          <ImageSquares {...details} />
        )
      case "Text Squares Cell":
        return(
          <Squares {...details} />
        )
      case "Image Carousel":
        return(
          <ImageCarousel {...details} />
        )
      case "Speaker Highlight Cell":
        return(
          <SpeakerCarousel {...details} />
        )
      case "Image Cell":
        return(
          <OneImage {...details} />
        )
      case "Dual Images Cell":
        return(
          <TwoImage {...details} />
        )
      case "Text Cell":
        return(
          <TextView {...details} />
        )
      case "Footer Cell":
        return(
          <ButtonFooter {...details} />
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
