const appRoot = document.getElementById('app');

class VisablitlyToggle extends React.Component {
   constructor(props){
      super(props);
      this.handleVisabilityToggle = this.handleVisabilityToggle.bind(this);
      this.state = {
         visability: false
      }
   }

   handleVisabilityToggle() {
      this.setState((prevState) => {
         return {
            visability: !prevState.visability
            
         };
      });
      console.log(this.state)

   }

   render() {
      return (

         <div>
            <h2>Visablitly Toggle</h2>
            <button onClick={this.handleVisabilityToggle}>
            {this.state.visability ? 'Hide' : 'Show'}
            </button>
            {this.state.visability && (
               <div>
               <p>Hello, this is some info</p>
               </div>
               )}
         </div>
      );
   }
}

ReactDOM.render(<VisablitlyToggle />, appRoot);


