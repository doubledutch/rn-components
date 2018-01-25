import React, { Component } from 'react'
import ReactNative, { Text, View, Image } from 'react-native'

export default class SmallView extends Component {
  render() {
    const { image, title, description } = this.props
    return(
      <View>
        <View style={s.top} />
        <View style={s.main}>
          <Image style={s.image} source={{uri: image}} />
          <View style={s.info}>
            <Text style={s.title}>{title}</Text>
            <Text style={s.description}>{description}</Text>
          </View>
        </View>
      </View>
    )
  }
}
    
const s = ReactNative.StyleSheet.create({
  top: {
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    height: 50,
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
  main: {
    padding: 0,
    borderColor:'#D8D8D8',
    borderBottomWidth:1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    height: 110,
    width: 110
  },
  info: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  description: {
    fontSize: 14
  }
})
    