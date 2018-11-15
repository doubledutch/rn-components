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
import { linkCheck } from './functionHelpers'

export default class ButtonFooter extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const { buttons, color } = this.props
    const background = {backgroundColor: color}
    return(
      <View style={s.container}>
        <TouchableOpacity onPress={()=>{
          linkCheck(buttons[0].buttonURL)
        }}>
          <View style={[s.buttonBox, background]}>
            <Text style={s.button}>{buttons[0].buttonTitle.trim()}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>
          linkCheck(buttons[1].buttonURL)
        } style={{marginTop:20}}>
          <View style={[s.buttonBox, background]}>
            <Text style={s.button}>{buttons[1].buttonTitle.trim()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const s = ReactNative.StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonBox: {
    borderRadius:20,
    padding:15
  },
  button: {
    color: "#FFFFFF",
    textAlign:'center',
    fontSize:16
  }

})