

class IndecisionApp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         options: []
      }
   }
   render() {
      const title = 'Indecision';
      const subTitle = 'Put you life in the hands of a computer';
      
      return(
         <div id="container">
            <Header title={title} subTitle={subTitle} />
            <Action hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options}/>
            <AddOption />

         </div>

      );
   }
}

class Header extends React.Component {
   render() {
      
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
         </div>

      );
   }
}



class Action extends React.Component {
   handlePick() {
      alert('handlePick');
   }

   render() {
      return (
         <div>
            <button onClick={this.handlePick}
            disabled={!this.props.hasOptions}
            >
            What should I do?
            </button>
         </div>

      );
   }
}

class Options extends React.Component {
   constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
   }

   handleRemoveAll() {
      alert(this.props.options);
   }
   render() {
      return (
         <div>
           <button onClick={this.handleRemoveAll}>Remove All</button>
            {
               this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }

          
          </div>
         
      );
   }
}

class Option extends React.Component {
   render() {
      return (
         <div>
            {this.props.optionText}  
         </div>
      );
   }
}

class AddOption extends React.Component {
   handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      if (option) {
         alert(option);
      }
   }

   render() {
      return (
         <div>
           <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
               <button>Add Option</button>
           </form>
         </div>
         
      );
   }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));