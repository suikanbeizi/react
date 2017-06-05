import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Computer extends Component {
    constructor(props){
        super(props)
        this.state = {
            status:false,
            content:'显示器关了'
        }
    }
    handleClick(){
        this.setState({
            status:!this.state.status
        })
        if(this.state.status){
            this.setState({
                content:'显示器亮了'
            })
        }else{
            this.setState({
                content:'显示器灭了'
            })
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>开关</button>
                <Screen showContent={this.state.content} />
            </div>
        )
    }
}
class Screen extends Component {
    constructor(props){
        super(props)
        this.state = {
            content:'无内容'
        }
    }
    render () {
        return (
            <div className='screen'>
                {this.state.content = this.props.showContent ? this.props.showContent : this.state.content }
            </div>
        )
    }
}