"use strict";
import React, { Component } from 'react';
import ReactNative, { Button, ScrollView } from 'react-native';
import client, { TitleBar, Avatar, Color } from '@doubledutch/rn-client'
import FirebaseConnector from '@doubledutch/firebase-connector'
import { SmallView, SpeakerCarousel, Footer, Header, LandingPage, ButtonFooter, ImageSquares, ImageCarousel, TwoImage, OneImage, Squares, TextView, LandingPageExpo} from './index'
const { View } = ReactNative
const fbc = FirebaseConnector(client, 'customskins')
fbc.initializeAppWithSimpleBackend()

export default class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      dataInput = this.props.dataInput
    }

    this.signin = fbc.signin()
      .then(user => this.user = user)
      .catch(err => console.error(err))
  }
  

  componentDidMount() {
    this.signin.then(() => {
      if (client.currentUser.id !== '24601'){
        const customRef = fbc.database.public.adminRef('custom')
        customRef.on('child_added', data => {
          this.setState({ danaInput: data.val() })
        })
      }
    })
  }

  render() {
    return (
      <View title="" style={{ flex: 1,backgroundColor:'#E8E8E8' }}>
          <TitleBar title="Welcome" client={client} signin={this.signin} />
          <ScrollView style={styles.container}>
              { this.state.dataInput.map((details) => {  
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