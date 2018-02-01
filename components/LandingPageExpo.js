import React, { Component } from 'react';
import ReactNative, {Button, NativeEventEmitter, Platform} from 'react-native';
import client, { Color } from '@doubledutch/rn-client'
const { TouchableOpacity, TouchableHighlight, Text, View, Image, WebView, Dimensions, Linking } = ReactNative

export default class LandingPageExpo extends Component {
  constructor(props) {
    super()
    this.state = {
      userColor: client.primaryColor 
    }
  }

  render() {
    let customColor = this.state.userColor
    if (this.props.color !== undefined) {
      customColor = this.props.color
    }
    const colorStyle = {
      color: customColor
    }
    const { video, headline, title, des } = this.props
    const dimensionStyle = {
    height : Dimensions.get('window').width * .5625,
    width : Dimensions.get('window').width 
    }

    return (
      <View>
        <View style={{backgroundColor:'#00B9C2'}}>
          <Text style={[s.headlineText, colorStyle]}>{headline}</Text>
        </View>
        <View style={dimensionStyle}>
          {/* {this.renderPlayer(video)} */}
        </View>
        <View style={s.box}>
          <Text style={{textAlign:'center',fontSize:25}}>Welcome To</Text>
          <Text style={{textAlign:'center',fontSize:25}}>{title}</Text>
          <Text style={{textAlign:'center',fontSize:16,padding:20}}>{des}</Text>
          <TouchableOpacity onPress={()=>{
          }}>
            <View style={{backgroundColor:customColor,borderRadius:4,padding:10}}>
              <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:16}}>Go to the Activity Feed</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
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
    padding:20, 
    borderColor:'#D8D8D8',
    borderBottomWidth:1
  },
});



