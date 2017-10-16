////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var assign = require('react/lib/Object.assign');

var DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

var App = React.createClass({
  getInitialState (){
    return {
      currentTab: 0
    }
  },
  activateTab(index){
    this.setState({
      currentTab: index
    });
  },
  renderTabs () {

    return this.props.countries.map((country, index) => {
      return (
        <div style={ index === this.state.currenTab ? styles.activeTab : styles.tab} 
          onClick={_ => this.activateTab(index)}
        >
          {country.name}
        </div>
      );
    });
  },

  renderPanel () {
    var country = this.props.countries[this.state.currentTab];
    return (
      <div>
        <p>{country.description}</p>
      </div>
    );
  },

  render () {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );

  }
});

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.tabPanels = {
  padding: 10
};

var alertStuff  = (msg) => {
  alert(msg);
}

var ContentToggle = React.createClass({
  getInitialState () {
      return {
        showStuff: false
      }
  },
  renderDetails() {
    var showStuff = this.state.showStuff;
    if (showStuff){
      return this.props.children;
    } else {
      return null;
    }
  },
  toggle() {
    this.setState({
      showStuff: !this.state.showStuff
    })
  },
  render(){
    return (
      <div className = "ContentToggle">
        <div clasName = "ContentToggle__Summary" onClick= {this.toggle}>{this.props.summary} </div>
        <div className = "ContentToggle__Details">
            {this.renderDetails()}
        </div>
      </div>
    );
  }

})

var App2 = React.createClass({
  render(){
    return (
      <div> 
        <button onClick={alertStuff.bind(this, 'hi')}>hi </button>
        <button onClick={alertStuff.bind(this,' hello')}> hello </button>
      <ContentToggle summary="Jerk Chiken" >
        <p> Lorem ipsum</p>
      </ContentToggle>
      </div>
    );
  }
});


React.render(<App countries={DATA}/>, document.body);

