import React, { Component } from 'react'
import ReactNative, { Text, View, Image, Dimensions, WebView, Platform, TouchableHighlight } from 'react-native'
import Carousel from 'react-native-carousel-view';
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube'
import Video from 'react-native-video'
import Footer from './Footer'
import Header from './Header'


export default class VideoCarousel extends Component {
  constructor(props) {
    super(props)
  }

  carouselCells = (width) => {
    const dimensionStyle = {
      width : width,
      height : width * .931
    }
    return(
      this.props.videoInfo.map(((item, i) =>                
        <View key={i} style={[s.cell, dimensionStyle]} activeOpacity={1.0}>
          {this.renderImage(item)}
       </View> 
      ))
    )
  }

  renderImage = (item) => {
    return (
      <View style={s.dimensionStyle}>
        { this.props.excludeNativeComponents ? null : this.renderPlayer(item.video)}
      </View>
    )
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
            lightboxMode: true,
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
      console.log("ios")
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
  
  render() {
    const width = Dimensions.get('window').width
    const { footer, buttonURL, buttonText, header, title, des, intro } = this.props
    return (
      <View style={s.component}>
        <View style={s.top}/>
        <Header
        header = {header}
        title = {title}
        des = {des}
        intro = {intro}
        />
        <Carousel
        indicatorAtBottom={true}
        animate={false}
        indicatorOffset={0}
        height={ width * .5625 + 25 }
        >
          {this.carouselCells(width)}    
        </Carousel>
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
  cell: {
    marginBottom: 25, 
    backgroundColor:'#E8E8E8',
  },
  component: {
    marginBottom: 0, 
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    backgroundColor: "white"
  },
  top: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1, 
    height: 25, 
    flex: 1, 
    backgroundColor:'#E8E8E8'
  },
  container: {
    flex: 1
  }, 
  videoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  playButton: {
    height: 80,
    width: 80,
    backgroundColor: 'rgba(170,170,170,0.6)',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
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
    backgroundColor: '#000000',
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
    justifyContent: 'center',
  }

});



