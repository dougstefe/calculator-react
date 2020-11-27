import { Component } from "react"
import Button from "./components/Button"
import Display from "./components/Display"
import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.initialState = {
            history: '',
            display: '0',
            operation: '',
            labelOperation: '',
            result: 0,
            value: 0,
            clearDisplay: false,
            clearHistory: false
        }
        
        this.state = {...this.initialState}
    }

    clear = () => {
        this.setState(this.initialState)
    }
    setOperation = (operation, label) => {
        if(operation){
            let history = this.state.history
            let display = this.state.display
            if(this.state.clearDisplay){
                if(operation !== '='){
                    history = `${this.state.display} ${label}`
                }
                else if(this.state.clearHistory){
                    history = `${this.state.result} ${this.state.labelOperation} ${this.state.value} ${label}`
                }
                else{
                    history = this.state.history.substring(0, this.state.history.length - 1) + label
                }
            }
            else{
                history = `${this.state.history} ${this.state.display} ${label}`
            }
            let result = this.state.value
            
            if(this.state.operation){
                switch(this.state.operation){
                    case '/':
                        result = this.state.result/this.state.value
                    break;
                    case '*':
                        result = this.state.result*this.state.value
                    break;
                    case '+':
                        result = this.state.result+this.state.value
                    break;
                    case '-':
                        result = this.state.result-this.state.value
                    break;
                    default:
                        result = this.state.result
                        break;
                }
                display = result.toString()
            }
            const state = {
                operation: operation !== '=' ? operation : this.state.operation,
                labelOperation: operation !== '=' ? label : this.state.labelOperation,
                result,
                display,
                history,
                clearDisplay: true,
                clearHistory: operation === '=' ? true : false
            }
            this.setState(state)
            console.log(state)

        }
    }
    addDigit = (digit) => {
        if(digit === '.' && this.state.display.indexOf('.') > -1){
            return
        }
        if(digit === '0' && this.state.display === '0'){
            return
        }
        let display = this.state.clearDisplay ? digit : this.state.display + digit
        if(display.length > 1 && display.startsWith('0')){
            display = display.replace(/^0/, '')
        }
        const history = this.state.clearHistory ? '' : this.state.history
        const result = this.state.clearHistory && this.state.clearDisplay ? 0 : this.state.result
        this.setState({
            display,
            value: display.indexOf('.') > -1 ? parseFloat(display) : parseInt(display),
            history: history,
            clearDisplay: false,
            clearHistory: false,
            result
        })
    }
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.display} history={this.state.history} />
                <Button label="AC" operation="" colspan="3" action={this.clear} />
                <Button label="÷" operation="/" action={this.setOperation} />
                <Button label="7" action={this.addDigit} />
                <Button label="8" action={this.addDigit} />
                <Button label="9" action={this.addDigit} />
                <Button label="×" operation="*" action={this.setOperation} />
                <Button label="4" action={this.addDigit} />
                <Button label="5" action={this.addDigit} />
                <Button label="6" action={this.addDigit} />
                <Button label="-" operation="-" action={this.setOperation} />
                <Button label="1" action={this.addDigit} />
                <Button label="2" action={this.addDigit} />
                <Button label="3" action={this.addDigit} />
                <Button label="+" operation="+" action={this.setOperation} />
                <Button label="0" action={this.addDigit} />
                <Button label="." action={this.addDigit} />
                <Button disabled />
                <Button label="=" operation="=" action={this.setOperation} />
            </div>
        )
    }
}

export default App
