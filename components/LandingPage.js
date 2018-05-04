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

import React, { Component } from 'react';
import ReactNative, {Button, NativeEventEmitter, Platform} from 'react-native';
import client, { Color } from '@doubledutch/rn-client'
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube'
import Video from 'react-native-video'
import Footer from './Footer'
const { TouchableOpacity, TouchableHighlight, Text, View, Image, WebView, Dimensions, Linking } = ReactNative

export default class LandingPage extends Component {
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
    const fontColor = "#364247"
    const { headline, title, des, excludeNativeComponents, video, bold, footer, buttonURL, buttonText, intro } = this.props
    if (bold){
      return(
      <View style={{borderBottomWidth:1, borderColor:'#D8D8D8'}}>
        <View style={s.border}/>
        <View style={{backgroundColor:'#00B9C2'}}>
          <Text style={[s.headlineText, {color}]}>{headline}</Text>
        </View>
        {this.renderImage()}
        <View style={s.box}>
          {intro.length ? <Text style={{textAlign:'center',fontSize:25, color: '#364247'}}>{intro}</Text> : null}
          {title.length ? <Text style={{textAlign:'center',fontSize:25, color: '#364247'}}>{title}</Text> : null}
          {des.length ? <Text style={{textAlign:'center',fontSize:16,padding:20, color: '#364247'}}>{des}</Text> : null}
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
          {intro.length ? <Text style={{textAlign:'center',fontSize:25, color: '#364247'}}>{intro}</Text> : null}
          {title.length ? <Text style={{textAlign:'center',fontSize:25, color: '#364247'}}>{title}</Text> : null}
          {des.length ? <Text style={{textAlign:'center',fontSize:16,padding:20, color: '#364247'}}>{des}</Text> : null}
        </View>
        {this.renderImage()}
        <Footer
        footer={footer}
        buttonURL={buttonURL}
        buttonText={buttonText}
        />
      </View>
      )
    }
  }

  renderImage = () => {
    if (this.props.video){
      return (
        <View style={s.dimensionStyle}>
          { this.props.excludeNativeComponents ? null : this.renderPlayer(this.props.video)}
        </View>
      )
    }
    if (this.props.image) {
      return (
      <View style={s.dimensionStyle}>
          <Image source={{uri: this.props.image}} style={{flex:1, resizeMode: 'contain'}}/>
      </View>
      )
    }
  }

  onPressVideo = () => this.setState({paused: !this.state.paused })

  renderYouTubePlayer(videoId) {
    // Android has special rendering because the youtube component uses fragments
    // which don't play nice in list views. I'm sure someone smarter can figure out
    // how to make that work, but I could not.
    if (Platform.OS === 'android') {
      return (
        <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => {
        YouTubeStandaloneAndroid.playVideo({
            apiKey: 'AIzaSyDO5L4KzrzG_2aiX6HWpTAR23xk5UcKTf8',
            videoId: videoId,
            autoplay: true
        })
        }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
                resizeMode='cover'
                style={ s.video }
                />
                <View style={ s.playButton }>
                    <Text style={ s.playButtonText }>▶</Text>
                </View>
            </View>
        </TouchableHighlight>
      )
    } else {
      return (
        <YouTube
          videoId={videoId}        // The YouTube video ID
          play={false}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={false}             // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style = {s.video}
        />
      )
    }
  }

  renderVimeoPlayer(url) {
    return (
      <WebView
        source={url}
        style={s.video}
      />
    )
  }

  renderVideoPlayer(url) {
    return (
      <TouchableHighlight style={{ flex: 1 }} onPress={() => this.videoRef.presentFullscreenPlayer()}>
        <Video
          source={{ uri: url }}
          style={s.video}
          paused={true}
        />
      </TouchableHighlight>
    )
  }

  renderPlayer(videoUrl) {
    if (videoUrl) {
      if (videoUrl.toLowerCase().indexOf('youtube.com') >= 0) {
        const match = videoUrl.match(/(\?|&)v=([^&]+)/)
        if (match && match[2]) {
          return this.renderYouTubePlayer(match[2])
        }
      } else if (videoUrl.toLowerCase().indexOf('youtu.be') >= 0) {
        const match = videoUrl.match(/youtu\.be\/([^\?\/]+)/)
        if (match && match[1]) {
          return this.renderYouTubePlayer(match[1])
        }        
      } else if (videoUrl.toLowerCase().indexOf('vimeo.com') >= 0) {
        return this.renderVimeoPlayer(videoUrl)
      }
    }
    return this.renderYouTubePlayer('-xAFnaYDQa4')
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
