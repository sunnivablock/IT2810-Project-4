import React, {Component} from 'react';  
import {
  Image,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  Picker,
  TouchableOpacity,
  View,
  
} from 'react-native';

//import axios from 'axios';

/* Import Components; These are our dumb components. They are stateless functional components. */
//import Button from './Button'
import InputField from './TextInput'; 
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
    let value = e.target.value;
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
/*
  handleClearForm(e) {
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
  return (
      <View style={styles.container}>
      <Text style={styles.newPersonHeadline}>ADD NEW PERSON</Text>
      <Text style={styles.inputContainer}>
        
        <InputField 
          title= {'First name '} 
          name= {'firstName'}
          value={this.state.newPerson.firstName} 
          placeholder = {'John'}
          onChange = {this.handleFirstName}/> {/* First name of the user */}
        
        <InputField 
          title= {'Last name '} 
          name= {'lastName'}
          value={this.state.newPerson.lastName} 
          placeholder = {'Smith'}
          onChange = {this.handleLastName}/> {/* Last name of the user */}

        <InputField 
          name={'age'}
          title= {'Birth year '} 
          maxLength = {4}
          value={this.state.newPerson.age} 
          placeholder = {'1900'}
          onChange={this.handleAge} /> {/* Age */} 
        
        <InputField 
          name={'profession'}
          title= {'Profession '} 
          value={this.state.newPerson.profession} 
          placeholder = {'Pimp'}
          onChange={this.handleProfession} /> {/* Profession */} 
        
        <Picker
          selectedValue={this.state.newPerson.rating}
          onValueChange={this.handleRating}
          >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> 

        <Button style={styles.button}
          title="SUBMIT"
          onPress={this.handleFormSubmit}
          color="#696969"
          />

      </Text>
      </View>
  );
}
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 20,
    paddingTop: 20
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
    fontStyle: '#282c34',
    textAlignVertical: 'top',
    padding: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: 4,
  },
  newPersonHeadline:
  {
    fontFamily: 'Georgia',
    fontSize: 15,
    lineHeight: 40,
    letterSpacing: 2,
    color: 'white',
    textAlign: 'center'
  }
});

export default FormContainer;

