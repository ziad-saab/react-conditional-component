# [React](http://facebook.github.io/react/)-conditional-component

This component displays its children only if they satisfy their predicate:

```html
<Conditional value={someValue}>
  <span showIfEquals={10}>The value is 10 or "10"</span>
  <span showIfStrictlyEquals={10}>The value is 10</span>
  <span showIfLte={10}>The value is lower than or equal to 10</span>
  ...
</Conditional>
```

## Install

```sh
bower install react-conditional-component
or
npm install react-conditional-component
```

Simply require it to use it:

```javascript
var Conditional = require('react-conditional-component');
```

## Example

```html
/**
* @jsx React.DOM
*/
var Demo = React.createClass({
  getInitialState: function() {
    return {someValue: 10};
  },

  componentDidMount: function() {
    // Change the value after 1 second
    setTimeout(function() {
      this.setState({value: 0});
    }.bind(this), 1000);
  },

  render: function() {
    return (
      <Conditional value={this.state.someValue}>
        <span showIfEquals={10}>The value is 10 or "10"</span>
        <span showIfStrictlyEquals={10}>The value is 10</span>
        <span showIfLte={10}>The value is lower than or equal to 10</span>
        <span showIfTrue>The value is true</span>
        <span showIfTruthy>The value is truthy</span>
      </Conditional>
    );
  }
});

React.renderComponent(<Demo/>, document.body);
```

## Predicates

The available predicates are: `showIfDefined`,`showIfUndefined`,`showIfTrue`,`showIfTruthy`,`showIfFalse`,`showIfFalsy`,`showIfEquals`,`showIfStrictlyEquals`,`showIfLte`,`showIfLt`,`showIfGte`,`showIfGt`.

## License

MIT.
