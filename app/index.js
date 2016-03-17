var React = require('react');
var ReactDOM = require('react-dom');

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
			<div>
				<a name="more_info_div"></a>
				<p>Enter your email to get more information:</p>
				<form id="email_form">
					<input id="email_input" placeholder="Email Address" /> <br />
					<button id="subscribe_button" onClick={this.handleSubmit}>Subscribe</button>
				</form>
			</div>
		)
	}
})

ReactDOM.render(<MoreInfoModule />, document.getElementById('more_info_module'));

var DetailsImageContainer = React.createClass({
    render() {
        return (
            <div id="details_image_container">
            	<img id="details_image" src="http://www.wired.com/images_blogs/autopia/2014/01/01-toyota-hydrogen.jpg" />
            </div>
        );
    }
});

//ReactDOM.render(<DetailsImageContainer />, document.getElementById('details_image_container'));

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

//ReactDOM.render(<DetailsDescriptionContainer />, document.getElementById('details_description_container'));

var DetailsModule = React.createClass({
    displayName: '',
    render() {
        return (
        	<div>
	            <DetailsImageContainer />
	            <DetailsDescriptionContainer />
            </div>
        );
    }
});

ReactDOM.render(<DetailsModule />, document.getElementById('details_module'));
