var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var NavLink = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;


var MenuContainer = React.createClass({
	render() {
        return (
            <div id="menu_container">
				<div name="menu" id="menu">
					<a href="#home_div"><button id="home_link">Home</button></a>
					<a href="#details_div"><button id="details_link">Details</button></a>
					<a href="#more_info_div"><button id="more_info_link">More info</button></a>
				</div>
			</div>
        );
    }
});

var HomeModule = React.createClass({
    render() {
        return (
            <div id="home_module">
            	<a name="home_div"></a>
            	<h2 id="home_module_header">The Future of Cars</h2>
				<p id="home_module_description">laborum velit proident qui sunt et magna laboris proident 
				aliqua ad anim duis incididunt excepteur reprehenderit commodo excepteur velit dolore sit
				Lorem laboris pariatur do incididunt ut minim dolor Lorem eiusmod proident eu aliqua nulla 
				do minim ut incididunt veniam qui ea eu voluptate commodo et nulla duis pariatur laborum</p>
            </div>
        );
    }
});

var DetailsImageContainer = React.createClass({
    render() {
        return (
            <div id="details_image_container">
            	<img id="details_image" src="http://www.wired.com/images_blogs/autopia/2014/01/01-toyota-hydrogen.jpg" />
            </div>
        );
    }
});

var DetailsDescriptionContainer = React.createClass({
    render() {
        return (
            <div id="details_description_container">
            <p id="details_description">laborum velit proident qui sunt et magna laboris 
            proident aliqua ad anim duis incididunt excepteur reprehenderit commodo excepteur 
            velit dolore sit Lorem laboris pariatur do incididunt ut minim dolor Lorem eiusmod 
            proident eu aliqua nulla do minim ut incididunt veniam qui ea eu voluptate commodo
            et nulla duis pariatur laborum</p>
            </div>
        );
    }
});

var DetailsModule = React.createClass({
    render() {
        return (
        	<div id="details_module">
        		<a name="details_div"></a>
	            <DetailsImageContainer />
	            <DetailsDescriptionContainer />
            </div>
        );
    }
});

var MoreInfoModule = React.createClass({
	getInitialState() {
	    return {
	        email: ''  
	    }
	},
	handleSubmit: function(e) {
		e.preventDefault()
		var email = document.getElementById('email_input').value;
		console.log(email);
	},
	render: function() {
		return (
			<div id="more_info_module">
				<a name="more_info_div"></a>
				<p>Enter your email to get more information:</p>
				<form id="email_form">
					<input id="email_input" placeholder="Email Address" /> <br />
					<button id="subscribe_button" onClick={this.handleSubmit}>Subscribe</button>
				</form>
			</div>
		)
	}
});

var ComplexApp = React.createClass({
	render() {
        return (
        	<div>
        		<MenuContainer />
        		<HomeModule />
        		<DetailsModule />
        		<MoreInfoModule />
            </div>
        );
    }
});

var SimpleApp = React.createClass({
	render() {
        return (
        	<div>
        		<HomeModule />
        		<MoreInfoModule />
            </div>
        );
    }
});

var App = React.createClass({
	render() {
		return <div>Hello there, welcome to the project</div>
	}
});

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route path="/" component={App} />
  	<Route path="/complex" component={ComplexApp} />
  	<Route path="/simple" component={SimpleApp} />
  </Router>
), document.getElementById('app'));

