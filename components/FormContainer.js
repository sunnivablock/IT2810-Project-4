import React, {Component} from 'react';  
import {
  Image,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  Picker,
  TextInput,
  TouchableOpacity,
  View,
  
} from 'react-native';

//import axios from 'axios';

/* Import Components; These are our dumb components. They are stateless functional components. */
//import Button from './Button'
//import InputField from './TextInput'; 
import { DropDownMenu } from 'material-ui';
//import Picker from './Picker';


class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        year: '',
        rating: '',
      },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.addRatingOptions = this.addRatingOptions.bind(this);
    
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFirstName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, firstName: value
         }
       }))
   }
   
   addRatingOptions(){
     const ratingOptions = [];
     for(var i=1; i<101; i++){
       ratingOptions.push(i);
     }
     return ratingOptions;
   }

   handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, lastName: value
         }
       }))
   }
   
  handleAge(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, year: value
        }
      }))
  }

  handleRating(e) {
    let value = e;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, rating: value
        }
      }))
  }

  handleProfession(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, profession: value
        }
      }))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newPerson : 
      {...prevState.newPerson, [name]: value
      }
    }))
  }

  handleFormSubmit = () => {
    let personData = this.state.newPerson;
    console.log(personData)
    console.log("submit button pushed")
    //axios.post('http://it2810-09.idi.ntnu.no:8000/api/persons?', personData)
      //.then(response => {
        //response.then(data =>{
        //console.log("Successful" + data);
      //})
     // })
      
  }

  /*handleClearForm() {
    // Logic for resetting the form
    console.log("clear button pushed")
    this.setState({ 
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        age: '',
        rating: ''
      },
    })
}*/

render() {
  const { firstName, lastName, profession, year, rating } = this.state.newPerson;
  const isEnabled = (firstName !=="" && lastName !=="" && profession !=="" && year !=="" && rating !=="");
  console.log("inni render til formcontainer")
  
  const ratingOptions = [];
  for(var i=1; i<101; i++){
    ratingOptions.push(i.toString());
  }

  return (
      <View style={styles.container}>
        <Text style={styles.newPersonHeadline}>ADD NEW PERSON</Text>
        <Text style={styles.inputContainer}>
          
          <Text>FIRST NAME</Text>
          <TextInput style={styles.textInput}
            title= {'First name '} 
            name= {'firstName'}
            value={this.state.newPerson.firstName} 
            placeholder = {'John'}
            onChange = {this.handleFirstName}/> {/* First name of the user */}
          
          <Text>LAST NAME</Text>
          <TextInput style={styles.textInput}
            title= {'Last name '} 
            name= {'lastName'}
            value={this.state.newPerson.lastName} 
            placeholder = {'Smith'}
            onChange = {this.handleLastName}/> {/* Last name of the user */}
          
          <Text>BIRTH YEAR</Text>
          <TextInput style={styles.textInput}
            name={'age'}
            title= {'Birth year '} 
            maxLength = {4}
            value={this.state.newPerson.age} 
            placeholder = {'1900'}
            onChange ={this.handleAge} /> {/* Age */} 
          
          <Text>PROFESSION</Text>
          <TextInput style={styles.textInput}
            name={'profession'}
            title= {'Profession '} 
            value={this.state.newPerson.profession} 
            placeholder = {'Pimp'}
            onChange ={this.handleProfession} /> {/* Profession */} 
          
          <Text>RATING</Text>
          <Picker
            selectedValue={this.state.newPerson.rating}
            onValueChange={this.handleRating}
            >
            {ratingOptions.map((item, index) => {
            return (<Picker.Item style={styles.textInput} label={item} value={index} key={index}/>) 
            })}
          </Picker> 

          <Button style={styles.button}
            title={'SUBMIT'}
            onPress={this.handleFormSubmit}
            color={'#696969'}
           /> {/* Submit button */}
          
        </Text>
      </View>
  );
}
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 20,
    marginTop: 20,
    padding: 20
  },
  textInput: {
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: 10
  },
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#282c34' 
  },

  head: { 
    height: 40, 
    backgroundColor: 'grey' 
  },

  text: { 
    margin: 6 , 
    color:'white'
  },

  inputContainer: 
  {
    fontFamily: 'Georgia',
    fontSize: 15,
    lineHeight: 40,
    borderRadius: 4,
    letterSpacing: 2,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    padding: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  newPersonHeadline:
  {
    fontFamily: 'Georgia',
    fontSize: 25,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'white',
    textAlign: 'center'
  }
});

export default FormContainer;

/*
<Button style={styles.button}
          title="CLEAR"
          onPress={this.handleClearForm}
          color="#696969" />*/