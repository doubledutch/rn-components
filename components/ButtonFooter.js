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

import React, { Component } from 'react'
import ReactNative, { TouchableOpacity, Text, View, Linking, Alert } from 'react-native'
import client, {Color} from '@doubledutch/rn-client'

export default class ButtonFooter extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const { buttons } = this.props
    return(
      <View style={s.container}>
        <TouchableOpacity onPress={()=>{
          this.linkCheck(buttons[0].buttonURL)
        }}>
          <View style={s.buttonBox}>
            <Text style={s.button}>{buttons[0].buttonTitle.trim()}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>
          this.linkCheck(buttons[1].buttonURL)
        } style={{marginTop:20}}>
          <View style={s.buttonBox}>
            <Text style={s.button}>{buttons[1].buttonTitle.trim()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  linkCheck = (string) => {
    var link = string.trim()
    if (link) {
      Linking.canOpenURL(link).then(supported => {
        if (!supported) {
          Alert.alert('This link is unavailable')
        } else {
          Linking.openURL(link)
        }
      }).catch(err => Alert.alert('This link is unavailable'))
    }
    else Alert.alert('This link is unavailable')
  }

}

const s = ReactNative.StyleSheet.create({
  container: {
    padding: 20
  },
  buttonBox: {
    backgroundColor: client.primaryColor,
    borderRadius:4,
    padding:10
  },
  button: {
    color: "#FFFFFF",
    textAlign:'center',
    fontSize:16
  }

})