import {Component} from "react"
import "./Button.css"

class Button extends Component{
    clickAction = () => {
        if(this.props.operation){
            this.props.action(this.props.operation, this.props.label)
        }
        else{
            this.props.action(this.props.label);
        }
    }
    render() {
        const disabled = this.props.disabled ? 'disabled' : '';
        let classNames = 'button'
        if(this.props.operation){
            classNames += ' operation'
        }
        if(this.props.colspan){
            classNames += ` colspan${this.props.colspan}`
        }
        return (
            <button disabled={disabled} onClick={_ => this.clickAction()} className={classNames}>{this.props.label}</button>
        )
    }
}

export default Button