import {Component} from "react"
import "./Button.css"

class Button extends Component{
    render() {
        let classNames = 'button'
        if(this.props.operation){
            classNames += ' operation'
        }
        if(this.props.colspan){
            classNames += ` colspan${this.props.colspan}`
        }
        return (
            <button onClick={_ => this.props.action(this.props.label)} className={classNames}>{this.props.label}</button>
        )
    }
}

export default Button