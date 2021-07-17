// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

const CHANGE = 'CHANGE';

const changeMarkdown = markdown => {
  return {
    type: CHANGE,
    markdown };

};

const markdownReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE:
      return action.markdown;
    default:
      return state;}

};

const store = Redux.createStore(
markdownReducer);


class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let outputText = marked(event.target.value);
    this.props.submitMarkdown(this.state.output);
    this.setState({
      input: event.target.value,
      output: outputText });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("h3", { class: "title" }, "Markdown:"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", rows: "10", onChange: this.handleChange,
        value: this.state.input })), /*#__PURE__*/

      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("h3", { class: "title" }, "Preview:"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.state.output } }))));



  }}
;

const mapStateToProps = state => {
  return { markdown: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitMarkdown: markdown => {
      dispatch(changeMarkdown(markdown));
    } };

};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);

class AppWrapper extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.getElementById('root'));