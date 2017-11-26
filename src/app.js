import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './components/AddOptions';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';

class IndecisionApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
         options: []
      }
   }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
         const json = JSON.stringify(this.state.options)
         localStorage.setItem('options', json); 
      }
    }

   componentWillUnmount () {
      console.log('Component unmouted');
   }


   handleDeleteOptions() {
      this.setState (() => ({ options: [] }))
   }




  handleDeleteOption (optionToRemove) {
   this.setState ((prevState) => ({
      options : prevState.options.filter ((option) => optionToRemove !== option)
   }));
  }

   handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
   };

   handleAddOption(option) {
      if(!option) {
         return 'Please enter a value to add a option!';
      } else if (this.state.options.indexOf(option) > -1) {
         return 'This options already exists';
      }

      this.setState ((prevState) => 
         ({ options: prevState.options.concat(option) 
         }));
      }

      // this.setState((prevState) => {
      //    return {
      //       options: prevState.options.concat(option)
      //    }
      // })
   

   render() {
      const subTitle = 'Put you life in the hands of a computer';
      
      return(
         <div id="container">
            <Header subTitle={subTitle} />
            <Action
            handlePick = {this.handlePick} 
            hasOptions={this.state.options.length > 0}

             />
            <Options 
            options={this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}

            />
            <AddOption 
            handleAddOption = {this.handleAddOption}
            />

         </div>

      );
   }
}







// class Header extends React.Component {
//    render() {
      
//       return (
//          <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//          </div>

//       );
//    }
// }



// class Action extends React.Component {
   
//    render() {
//       return (
//          <div>
//             <button onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//             What should I do?
//             </button>
//          </div>

//       );
//    }
// }




// class Options extends React.Component {

//    render() {
//       return (
//          <div>
//            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                this.props.options.map((option) => <Option key={option} optionText={option}/>)
//             }

          
//           </div>
         
//       );
//    }
// }



// class Option extends React.Component {
//    render() {
//       return (
//          <div>
//             {this.props.optionText}  
//          </div>
//       );
//    }
// }




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));