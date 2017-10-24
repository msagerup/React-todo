console.log('app.js is running!')

const app = {
   title: 'Indecision App',
   subTitle: 'Put your life in the hands of a computer',
   options: []
};

const onFormSubmit = (e) => {
   e.preventDefault();

   const option = e.target.elements.option.value;

   if(option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      renderTemplate();
   }


}



const appRoot = document.getElementById('app');



const renderTemplate = () => {

   const template = (
   <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.options.length > 0 ? 'Here are your options:  ' + app.options : 'No Options' }
      <p>{app.options.length}</p>
      <ol>
         <li>Item One</li>
         <li>Item Two</li>
      </ol>
      <form onSubmit = {onFormSubmit}>
         <input type="text" name="option" />
         <button>Add Option</button>


      </form>
   </div>
   );
   ReactDOM.render(template, appRoot);
}

renderTemplate();