'use strict';

console.log('app.js is running!');

var app = {
   title: 'Indecision App',
   subTitle: 'Put your life in the hands of a computer',
   options: []
};

var onFormSubmit = function onFormSubmit(e) {
   e.preventDefault();

   var option = e.target.elements.option.value;

   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      renderTemplate();
   }
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {

   var template = React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         app.title
      ),
      app.subTitle && React.createElement(
         'p',
         null,
         app.subTitle
      ),
      app.options.length > 0 ? 'Here are your options:  ' + app.options : 'No Options',
      React.createElement(
         'p',
         null,
         app.options.length
      ),
      React.createElement(
         'ol',
         null,
         React.createElement(
            'li',
            null,
            'Item One'
         ),
         React.createElement(
            'li',
            null,
            'Item Two'
         )
      ),
      React.createElement(
         'form',
         { onSubmit: onFormSubmit },
         React.createElement('input', { type: 'text', name: 'option' }),
         React.createElement(
            'button',
            null,
            'Add Option'
         )
      )
   );
   ReactDOM.render(template, appRoot);
};

renderTemplate();
