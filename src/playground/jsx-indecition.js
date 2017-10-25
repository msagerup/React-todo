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

const removeAll = () => {
   app.options = [];
   renderTemplate();
}

const onMakeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option)
}

const appRoot = document.getElementById('app');






const renderTemplate = () => {
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subTitle && <p>{app.subTitle}</p>}
         {app.options.length > 0 ? 'Here are your options:' : 'No Options' }
         <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

         <button onClick = {removeAll}>Remove All</button>
         <ol>
            {
               app.options.map((options) =>{
                  return <li key={options}>Option: {options}</li>
               })
            }
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