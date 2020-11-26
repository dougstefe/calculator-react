import {Component} from "react"
import "./Button.css"

class Button extends Component{
    render() {
        return (
            <button onClick={_ => this.props.action(this.props.label)} className={`button${this.props.type ? ' '+this.props.type : ''}${this.props.width ? ' span'+this.props.width : ''}`}>{this.props.label}</button>
        )
    }
}

export default Button