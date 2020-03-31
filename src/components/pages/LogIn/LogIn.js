import React, {Component} from 'react';
import { Input, Button, Loader} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import main_logo from '../../../assets/main_logo.png'


class LogIn extends Component {
    state = {
        mailErrorColor: 'black',
        pwErrorColor: 'black'
    }

    onTextChange = e => {
        let text = e.target.value
        let regex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

        if(!regex.test(text))
        {
//            this.setState({mailErrorColor: 'red'})
            console.log("red")
        }
        else
        {
            console.log("black")
        }
    }

    render() {
        return (
        <div>
            <div>
            <br/> <br/>
               <img src={main_logo} style={{minWidth: '10%', maxWidth: '50%'}}/>
               <br/>
               Wanderlust
                <br/><br/>
                <Input icon='mail' placeholder='Email Address' style={{borderColor: this.state.mailErrorColor}} onChange={e => this.onTextChange}/>
                <br/><br/>
                <Input icon='lock' placeholder='Password' />
                <br/><br/>
                <Button color='purple'>Log In</Button>
            </div>
        </div>
        )
    }
}

export default LogIn