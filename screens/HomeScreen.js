import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
//import {Header} from 'react-native-elements';
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            isSearchPressed: true,
            word:"",
            lexicalCategory:'',
            examples:[],
            defination:""
        }
    }
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        //console.log(url);
        return fetch(url)
        .then((data)=>{
            if(data.status === 200){
                return data.json()
            }
            else{
                return null
            }
        })
        .then((response)=>{
            //console.log(response);
            var responseObject=response
            //var word=responseObject.word;
            //var lexicalCategory=responseObject.results[0].lexicalEntries[0].lexicalCategory.text
            if(responseObject){
                var wordData=responseObject.definitions[0]
                //console.log(responseObject.definitions[0])
                var definition=wordData.description
                var lexicalCategory=wordData.wordtype
                //console.log(lexicalCategory)
                this.setState({
                    "word":this.state.text,
                    "definition":definition,
                    "lexicalCategory":lexicalCategory
                })
            }
            else{
                this.setState({
                    "word":this.state.text,
                    "definition":"Not Found"
                })
            }
        })
    }
    render(){
        return(
            <View>
                <TextInput
                style={styles.inputBox}
                onChangeText={text => {
                this.setState({ 
                    text: text,
                    isSearchPressed:false,
                    word:"Loading...",
                    lexicalCategory:'',
                    examples:[],
                    defination:"" 
                });
                }}
                value={this.state.text}
                />
                <TouchableOpacity style={styles.searchButton} onPress={()=>{
                    this.setState({isSearchPressed:true})
                    this.getWord(this.state.text)
                }}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Word:{""}</Text>
                    <Text style={{fontSize:18}}>{this.state.word}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Type:{""}</Text>
                    <Text style={{fontSize:18}}>{this.state.lexicalCategory}</Text>
                </View>
                <View style={{flexDirection:'row',flexWrap:'Wrap'}}>
                    <Text style={styles.detailsTitle}>Definition:{""}</Text>
                    <Text style={{fontSize:18}}>{this.state.definition}</Text>
                </View>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    inputBox:{
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    searchButton:{
        width: '50%',
        height: 40,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth:2,
        justifyContent:'center'
    },
    detailsContainer:{
        fontSize:30,
        flex:1
    },
    detailsTitle:{
        color:'red',
        fontSize:30
    }
});