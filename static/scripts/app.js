class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { view: "home" }		
	}

	navigate(view) {
		this.setState({ view });
	}

	render() {
		return ( 
			
			<div style="margin: auto">
				<h1>Welcome to Vote!</h1>
				<Home></Home> 
			</div>
			
		)
	}
}

export default VoteApp;