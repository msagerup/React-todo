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

var removeAll = function removeAll() {
   app.options = [];
   renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
   var randomNum = Math.floor(Math.random() * app.options.length);
   var option = app.options[randomNum];
   alert(option);
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
      app.options.length > 0 ? 'Here are your options:' : 'No Options',
      React.createElement(
         'button',
         { disabled: app.options.length === 0, onClick: onMakeDecision },
         'What should I do?'
      ),
      React.createElement(
         'button',
         { onClick: removeAll },
         'Remove All'
      ),
      React.createElement(
         'ol',
         null,
         app.options.map(function (options) {
            return React.createElement(
               'li',
               { key: options },
               'Option: ',
               options
            );
         })
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
