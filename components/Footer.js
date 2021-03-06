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
import ReactNative, { TouchableOpacity, Text, View, Image, Linking, Alert } from 'react-native'
import { linkCheck } from './functionHelpers'


export default class Footer extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { footer, buttonURL, buttonText, color } = this.props
    const background = {backgroundColor: color}
    if (footer) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <TouchableOpacity onPress={()=>linkCheck(buttonURL)} style={{marginTop:0}}>
            <View style={[s.footerButton, background]}>
              <Text style={s.footerButtonText}>{buttonText.trim()}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <View/>
      )
    }
  }
}


const s = ReactNative.StyleSheet.create({
  footerButton : {
    borderRadius:20,
    padding:15, 
    margin: 20, 
  },
  footerButtonText : {
    color:'white',
    textAlign:'center',
    fontSize:16
  }
  
});
