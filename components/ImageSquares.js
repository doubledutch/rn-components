import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, {Color} from '@doubledutch/rn-client'
import { Footer, Header } from '@doubledutch/rn-components'


export default class ImageSquares extends Component {
  constructor(props) {
      super(props)
  }

  render(){
    const width = Dimensions.get('window').width / 2 - 20
    const height = width
    const { footer, buttonURL, buttonText, header, title, des, image1, image2, image3, image4 } = this.props
      return (
        <View style={s.component}>
          <View style={s.top}/>
          <Header
          header = {header}
          title = {title}
          des = {des}
          />
          <View style={s.box}>
            <View style={{flexDirection:'row'}}>
              <View style={s.imageBoxLeft}>
                <Image style={{width, height}} source={{uri: image1}}/>
              </View>
              <View style={s.imageBoxRight}>
                <Image style={{width, height}} source={{uri: image2}}/>
              </View>   
            </View>
            <View style={s.lowerRow}>
              <View style={s.imageBoxLeft}>
                <Image style={{width, height}} source={{uri: image3}}/>
              </View>
              <View style={s.imageBoxRight}>
                <Image style={{width, height}} source={{uri: image4}}/>
              </View>
            </View>
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


const s = ReactNative.StyleSheet.create({
    component: {
        padding: 0, 
        borderColor:'#D8D8D8',
        borderBottomWidth: 1
    },

    top: {
        borderColor:'#D8D8D8',
        borderBottomWidth:1, 
        height: 50, 
        flex: 1
    },

    box: {
        backgroundColor:'#FFFFFF',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#D8D8D8'
    },

    imageBoxLeft: {
        borderRightWidth:1,
        borderColor:'#D8D8D8',
        flex:1,
        padding:10,
        alignItems:'center'
    },

    lowerRow: {
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'#D8D8D8'
    },
    imageBoxRight: {
        flex:1,
        padding:10,
        alignItems:'center'
    }
  
  });