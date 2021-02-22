import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            /*isSearchPressed:true,
            word:"",
            lexicalCategory:'',
            examples:[],
            definition:""*/
        }
    }
    render(){
        return(
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
           /* <TouchableOpacity 
            style={styles.searchButton}
            onPress=(()=>{
                this.setState({isSearchPressed:true});
                this.getWord(this.state.text):
            })>

            </TouchableOpacity>
            getWord=(word)=>{
                var searchKeyword=word.toLowerCase()
                var url="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
                //console.log(url)
                return fetch(url).then((data)=>{
                    if(data.status === 200)
                    {
                        return data.json()
                    }
                    else{
                        return null
                    }
                })
            }*/
        )
        }
          }


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    inputBoxContainer:{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:'80%',
        alignSelf:'center',
        height:40,
    }
})