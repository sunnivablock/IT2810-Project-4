import React, {Component} from 'react';  
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';

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
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.addRatingOptions = this.addRatingOptions.bind(this);
    
  }

  /* This life cycle hook gets executed when the component mounts */
  addRatingOptions(){
      const ratingOptions = [];
      for(var i=1; i<101; i++){
        ratingOptions.push(i);
      }
      return ratingOptions;
    }

  handleFirstName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, firstName: value
         }
       }))
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

  /*handleFormSubmit = () => {
    let personData = this.state.newPerson;
    console.log(personData)
    console.log("submit button pushed")
    axios.post('http://it2810-09.idi.ntnu.no:8000/api/persons?', personData)
    console.log('Database-POST utprøvd')
    this.handleClearForm();
  }*/

  handleFormSubmit(){
    fetch('http://it2810-09.idi.ntnu.no:8000/api/persons', {
      method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ // Here's the fun part. Put your data here.
        "firstName": this.state.newPerson.firstName,
        "lastName": this.state.newPerson.lastName,
        "profession": this.state.newPerson.profession,
        "year": this.state.newPerson.year,
        "rating": this.state.newPerson.rating,
      })
    })
    .then(response => response.json()) 
    .then(serverResponse => console.warn(serverResponse))
    .then(this.handleClearForm())
  }

  handleClearForm() {
    // Logic for resetting the form
    console.log("clear called")
    this.setState({ 
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        age: '',
        rating: ''
      },
    })
}

render() {
  const { firstName, lastName, profession, year, rating } = this.state.newPerson;
  const isEnabled = (firstName !=="" && lastName !=="" && profession !=="" && year !=="" && rating !=="");
  
  const ratingOptions = [];
  for(var i=1; i<101; i++){
    ratingOptions.push(i.toString());
  }

  return (
      <View style={styles.container}>
        <Text style={styles.newPersonHeadline}>ADD NEW PERSON</Text>
        <View style={styles.inputContainer}>
        
        <Text style={styles.textHeader}>FIRST NAME</Text>
          <TextInput style={styles.textInput}
            title= {'First name '} 
            name= {'firstName'}
            value={this.state.newPerson.firstName} 
            placeholder = {'John'}
            onChange = {this.handleFirstName}/> 
          
          <Text style={styles.textHeader}>LAST NAME</Text>
          <TextInput style={styles.textInput}
            title= {'Last name '} 
            name= {'lastName'}
            value={this.state.newPerson.lastName} 
            placeholder = {'Smith'}
            onChange = {this.handleLastName}/> 
         
          <Text style={styles.textHeader}>BIRTH YEAR</Text>
          <TextInput style={styles.textInput}
            name = {'age'}
            title = {'Birth year '} 
            maxLength = {4}
            value = {this.state.newPerson.age} 
            placeholder = {'1900'}
            onChange ={this.handleAge} />
          
          <Text style={styles.textHeader}>PROFESSION</Text>
          <TextInput style={styles.textInput}
            name={'profession'}
            title= {'Profession '} 
            value={this.state.newPerson.profession} 
            placeholder = {'Pimp'}
            onChange ={this.handleProfession} /> 

          <Text style={styles.textHeader}>RATING</Text>
          <TextInput style={styles.textInput}
            name = {'rating'}
            title= {'Rating '} 
            maxLength = {3}
            value = {this.state.newPerson.rating} 
            placeholder = {'1-100'}
            onChange = {this.handleRating}/> 

          <Button 
            style={styles.button}
            title={'SUBMIT'}
            onPress={this.handleFormSubmit}
            disabled={!isEnabled}
          />
        
        </View>
      </View>
  );
}
}
const styles = StyleSheet.create({
  
  button: {
    borderRadius: 10,
    margin: 20,
    marginTop: 20,
    padding: 20,
    color: 'black',
    borderColor: '#282c34',
    borderWidth: 1
  },

  textInput: {
    textAlign: 'center',
    alignContent: 'center',
    flex: 1,
    height: 40,
    color: 'black',
    borderBottomColor: '#282c34',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 8
  },

  textHeader: {
    color: 'black',
    textAlign: 'center',
    //fontFamily: 'Georgia',
    letterSpacing: 2,

  },

  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#282c34', 
    height: 600,
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
    //fontFamily: 'Georgia',
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
    //fontFamily: 'Georgia',
    fontSize: 25,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'white',
    textAlign: 'center'
  }
});

export default FormContainer;

