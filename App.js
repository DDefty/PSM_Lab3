import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import _ from 'lodash';


export default class App extends Component<Props> {
constructor(props) {
        super(props);
        this.state= {
            isHidden:true
        };
    }
       onPress = () =>{
        this.setState({
            isHidden: !this.state.isHidden
        });
      }


  render(){
      return (
          <View style={styles.container}>
            <View style={styles.text}>
              <Text>Lab 2</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
              <View>
                    {this.state.isHidden ? <Text>Pokaż!</Text> : <Text>Ukryj</Text>}
                  </View>
            </TouchableOpacity>
            {
              this.state.isHidden ? <View/> :
                  <View style={styles.text}>
                      <Text>Nazywam się</Text>
                  </View>
            }
          </View>
        );
        }


};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  text: {
    alignItems: "center",
    padding: 10
  }
});