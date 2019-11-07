import React, {Component} from 'react';
import { connect } from 'react-redux';
import {SearchSuccess} from '../components/actions/index'


class Search extends Component {
 
 constructor(props){
    super(props);
       
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSorting=this.handleSorting.bind(this);
    this.handleSortDirection=this.handleSortDirection.bind(this);
    this.state = {
      values:{
      rating: '',
      firstName: '',
      lastName: '',
      year: '',
      Sorting:'',
      SortDirection:''
  }
  } 
}
      handleFirstName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
             {...prevState.values, firstName: value
             }
           }) )
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: value,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleLastName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
             {...prevState.values, lastName: value
             }
           }))
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: value,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleYear(e) {
        let value = e.target.value;
        
        this.setState( prevState => ({ values : 
             {...prevState.values, year: value
             }
           }))
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: value,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }
    
       handleRating(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
             {...prevState.values, rating: value
             }
           }))

           let object = {
            Rating: value,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }

       handleSorting(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
          {...prevState.values, Sorting: value
          }
        }))
      
           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: value,
            SortDirection:this.props.values.SortDirection
           }
        this.props.dispatch(SearchSuccess(object))
       }

       handleSortDirection(e) {
        let value = e.target.value;
        this.setState( prevState => ({ values : 
          {...prevState.values, SortDirection: value
          }
        }))

           let object = {
            Rating: this.props.values.Rating,
            Fornavn: this.props.values.Fornavn,
            Etternavn: this.props.values.Etternavn,
            Født: this.props.values.Født,
            Sorting: this.props.values.Sorting,
            SortDirection:value
           }
        this.props.dispatch(SearchSuccess(object))
       }
      
       render() {
      
         return (
          
            <div className="searchContainer">
              <p className='searchHead'>SEARCH FOR PERSON</p>
              <img src={searchLogo} className="search-logo" alt="logo"/>
                
              <TextInput
                style={{height: 40}}
                className={'searchFirstName'}
                id="Fornavn"
                placeholder="First Name"
                value={this.state.values.firstName}
                onChangeText={this.handleFirstName}
                />


              </div>
            
         )
     }
   }
   
   
   const mapStateToProps = state => ({
     values: state.values.values
   })


   export default connect(mapStateToProps)(Search)