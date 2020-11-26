import { Component } from "react"
import Button from "./components/Button"
import Display from "./components/Display"
import "./App.css"

class App extends Component{
    clear = () => {
        console.log("limpar")
    }
    setOperation = () => {
        console.log("setar operação")
    }
    addDigit = (digit) => {
        console.log(digit)
    }
    render() {
        return (
            <div className="calculator">
                <Display value={0}/>
                <Button label="AC" width="3" action={this.clear} />
                <Button label="÷" type="operation" action={this.setOperation} />
                <Button label="7" action={this.addDigit} />
                <Button label="8" action={this.addDigit} />
                <Button label="9" action={this.addDigit} />
                <Button label="×" type="operation" action={this.setOperation} />
                <Button label="4" action={this.addDigit} />
                <Button label="5" action={this.addDigit} />
                <Button label="6" action={this.addDigit} />
                <Button label="-" type="operation" action={this.setOperation} />
                <Button label="1" action={this.addDigit} />
                <Button label="2" action={this.addDigit} />
                <Button label="3" action={this.addDigit} />
                <Button label="+" type="operation" action={this.setOperation} />
                <Button label="0" action={this.addDigit} />
                <Button label="." action={this.addDigit} />
                <Button label="" type="disabled" />
                <Button label="=" type="operation" action={this.setOperation} />
            </div>
        )
    }
}

export default App
