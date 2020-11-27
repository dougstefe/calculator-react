import { Component } from "react"
import "./Display.css"

class Display extends Component{
    render() {
        return (
            <div className="display">
                <span>
                    {this.props.history}
                </span>
                {this.props.value}
            </div>
        )
    }
}

export default Display