import React, { Component } from 'react';
import ReactNative, {Button, NativeEventEmitter, Platform} from 'react-native';
import client, { Color } from '@doubledutch/rn-client'
import Footer from './Footer'
const { TouchableOpacity, TouchableHighlight, Text, View, Image, WebView, Dimensions, Linking } = ReactNative

export default class StaticLandingPage extends Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      this.viewPage()
    )
  }

  viewPage = () => {
    const color = this.props.color || client.primaryColor
    const { headline, title, des, excludeNativeComponents, image, bold, footer, buttonURL, buttonText} = this.props
    if (bold){
      return(
      <View style={{borderBottomWidth:1, borderColor:'#D8D8D8'}}>
        <View style={s.border}/>
        <View style={{backgroundColor:'#00B9C2'}}>
          <Text style={[s.headlineText, {color}]}>{headline}</Text>
        </View>
        <View style={s.dimensionStyle}>
          <Image source={{uri: image}} style={s.dimensionStyle}/>
        </View>
        <View style={s.box}>
          <Text style={{textAlign:'center',fontSize:25}}>Welcome to</Text>
          <Text style={{textAlign:'center',fontSize:25}}>{title}</Text>
          <Text style={{textAlign:'center',fontSize:16,padding:20}}>{des}</Text>
        </View>
        <Footer
          footer={footer}
          buttonURL={buttonURL}
          buttonText={buttonText}
        />
      </View>
      )
    }
    else {
      return (
      <View style={{borderBottomWidth:1, borderColor:'#D8D8D8'}}>
        <View style={s.border}/>
        <View style={s.box}>
          <Text style={{textAlign:'center',fontSize:25}}>Welcome to</Text>
          <Text style={{textAlign:'center',fontSize:25}}>{title}</Text>
          <Text style={{textAlign:'center',fontSize:16,padding:20}}>{des}</Text>
        </View>
        <View style={s.dimensionStyle}>
          <Image source={{uri: image}} style={s.dimensionStyle}/>
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

}

const s = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }, 
  videoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  playButtonText: {
    fontSize: 40,
    lineHeight: 32,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.5)',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200,
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headlineText: {
    fontSize:32,
    textAlign:'center',
    padding:20,
    fontWeight:'bold',
    backgroundColor: '#FFFFFF'
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  box: {
    backgroundColor:'#FFFFFF',
    padding:20
  },
  border : {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1  
  },
  dimensionStyle : {
    flexDirection: 'row', 
    flexGrow: 1,
    aspectRatio: 1.777,
    justifyContent: 'center'
  }
})
