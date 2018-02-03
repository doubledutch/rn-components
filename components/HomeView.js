"use strict";
import React, { Component } from 'react';
import ReactNative, { Button, ScrollView } from 'react-native';
import client, { TitleBar, Avatar, Color } from '@doubledutch/rn-client'
import FirebaseConnector from '@doubledutch/firebase-connector'
import { SmallView, SpeakerCarousel, Footer, Header, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, LandingPageExpo} from './index'
const { View } = ReactNative

export default class HomeView extends Component {
  constructor() {
    super()
  }

  render() {
    const dataInput = this.props.dataInput
    return (
      <View title="" style={{ flex: 1,backgroundColor:'#E8E8E8' }}>
          <TitleBar title="Welcome" client={client} signin={this.signin} />
          <ScrollView style={styles.container}>
              { dataInput.map((details) => {  
                  return(
                  this.getComponent(details)
                  )
              }) }
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


const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }, 
  
});



export default HomeView