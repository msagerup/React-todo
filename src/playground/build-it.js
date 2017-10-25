console.log('build-it is running!')

const appRoot = document.getElementById('app');
let vis = false;

const showDetail = () => {
   vis = !vis;
   <p>Hello</p>
   render()
}



const render = () => {
   const template = (
      <div>
         <h2>Visablitly toggle</h2>

         <button onClick = {showDetail}>
            {vis ? 'Hide Details' : 'Show Details'}
         </button>
         {vis && (
            <div>
               <p>Hey these are some details you can see</p>
            </div>


            )}
      </div>
   )
   ReactDOM.render(template, appRoot);
};


render();



