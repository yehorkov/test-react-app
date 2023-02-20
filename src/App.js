import { Component } from 'react';
import './App.css';

// const Header = () => {
//   return <h2>Hello world!</h2>
// }

// const Field = () => {
//     const holder = 'Enter here';
//     const styledField = {
//         width: '300px'
//     }
//     return <input placeholder={holder} type='text' style={styledField}/>
// }

// class Field extends Component {
//     render () {
//         const holder = 'Enter here';
//         const styledField = {
//             width: '300px'
//         }

//         return <input placeholder={holder} type='text' style={styledField}/>
//     }
// }

// const Btn = () => {
//     const text = 'Log in';
//     const logged = false;

//     return <button>{logged ? 'Enter' : text}</button>
// }

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 30,
            text: '+++'
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render () {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
  return (
    <div className="App">
        {/* <Header/>
        <Field/>
        <Btn/> */}
        <WhoAmI name='Yehor' surname='Koval' link='facebook.com'/>
        <WhoAmI name='John' surname='Smith' link='instagram.com'/>
    </div>
  );
}

// export {Header};
export default App;
