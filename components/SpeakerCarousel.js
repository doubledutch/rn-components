import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Image, Dimensions, Linking } from 'react-native'
import client, {Color} from '@doubledutch/rn-client'
import Carousel from 'react-native-carousel'
import { Footer } from './Footer'
import { Header } from './Header'


export class SpeakerCarousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userColor: client.primaryColor
      }
    }

    carouselCells = () => {
        return(
            this.props.speakerInfo.map((item =>
                <TouchableOpacity onPress={()=>{Linking.openURL(item.URL)}} style={s.cell}>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <Avatar user={item} client={item} size={64} style={{margin: 10, marginTop: 0}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 24, marginLeft: 20, marginTop: 5}}>{item.name}</Text>
                            <Text style={{fontSize: 16, marginLeft: 20, marginTop: 0}}>{item.title}, {item.company}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={s.cellDes}>{item.des}</Text>
                    </View>
                </TouchableOpacity>     
            ))
        )
    }

    render() {
      const { footer, buttonURL, buttonText, header, title, des } = this.props
      return (
        <View style={s.container}>
            <View style={s.border}/>
            <Header
            header = {header}
            title = {title}
            des = {des}
            />
            <Carousel
            indicatorAtBottom={true}
            animate={false}
            indicatorOffset={0}
            >
            {this.carouselCells()}    
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
   container: {
       marginBottom: 0, 
       borderColor:'#D8D8D8', 
       borderBottomWidth:1, 
       backgroundColor: "#E8E8E8"},

    border: {
        borderColor:'#D8D8D8',
        borderBottomWidth:1, 
        height: 50, 
        flex: 1, 
        backgroundColor:'#E8E8E8'
    },
    cell: {
        width: Dimensions.get('window').width, 
        marginBottom: 50, 
        backgroundColor:'#E8E8E8'
    },
    cellDes: {
        flex: 1, 
        textAlign:'left', 
        marginLeft: 15, 
        marginRight: 15, 
        marginBottom: 15, 
        fontSize: 14
    }
   });




