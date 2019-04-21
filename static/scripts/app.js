class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { view: "home" }		
	}

	navSwitch(view) {
		this.setState({ view });
	}

	render() {

		View = (view) => {
			let display;
			switch(view) {
				case "login":
					display = ( <Login></Login>)
			}
		}

		return ( 

		)

	}





}