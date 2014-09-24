var React = require('react');

module.exports = React.createClass({
  render: function() {
    var value = this.props.value;
    var shown = [];
    var children = this.props.children instanceof Array ? this.props.children : [this.props.children];
    children.forEach(function(child) {
      var show = true;
      if (show && child.props.showIfDefined) {
        show = typeof value !== 'undefined';
      }
      if (show && child.props.showIfUndefined) {
        show = typeof value === 'undefined';
      }
      if (show && child.props.showIfTrue) {
        show = value === true;
      }
      if (show && child.props.showIfTruthy) {
        show = !!value;
      }
      if (show && child.props.showIfFalse) {
        show = value === false;
      }
      if (show && child.props.showIfFalsy) {
        show = !value;
      }
      if (show && typeof child.props.showIfEquals !== 'undefined') {
        show = value == child.props.showIfEquals;
      }
      if (show && typeof child.props.showIfStrictlyEquals !== 'undefined') {
        show = value === child.props.showIfStrictlyEquals;
      }
      if (show && typeof child.props.showIfLte !== 'undefined') {
        show = value <= child.props.showIfLte;
      }
      if (show && typeof child.props.showIfLt !== 'undefined') {
        show = value < child.props.showIfLt;
      }
      if (show && typeof child.props.showIfGte !== 'undefined') {
        show = value >= child.props.showIfGte;
      }
      if (show && typeof child.props.showIfGt !== 'undefined') {
        show = value > child.props.showIfGt;
      }

      if (show) {
        shown.push(child);
      }
    });

    return <div>{shown}</div>;
  }
});