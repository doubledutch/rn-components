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
import ReactNative, { TouchableOpacity, Text, View, Image, Linking } from 'react-native'
import client, { Color } from '@doubledutch/rn-client'

export default class Header extends Component {
  constructor(props) {
      super(props)
    }

    render() {
      const { header, title, des, intro } = this.props
      if (header) {
        return (
          <View style={{backgroundColor: 'white'}}>
            <View style={s.headerBox}>
              {intro.length ? <Text style={s.header}>{intro}</Text> : null}  
              {title.length ? <Text style={s.subHeader}>{title}</Text> : null}
            </View>
            {des.length ? <Text style={s.description}>{des}</Text> : null}
          </View>
        )
      }
      else {
        return (
          <View style={{backgroundColor: 'white'}}>
            {title.length ? <Text style={s.header2}>{title}</Text> : null}
          </View>
        )
      }
    }
}

const s = ReactNative.StyleSheet.create({
  headerBox : {
    marginTop: 20,
    marginBottom: 20,
  },
  header : {
    textAlign: "center",
    fontSize: 26,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 0
  },
  subHeader : {
    textAlign: "center",
    fontSize: 26,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom:0,
    marginTop: 0
  },
  description : {
    textAlign: "center",
    fontSize: 14,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 25
  },
  header2: {
    textAlign: "left",
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
    marginTop: 5,
    marginBottom:5
  }

});