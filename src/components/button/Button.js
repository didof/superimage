import React from 'react'
import './style.css'

const Label = ({ children, isLabel = false }) => {
    console.info('Label isLabel', isLabel)
    return <label>{children}</label>
}

const Icon = ({ src }) => {
    return <img src={src} className="icon" />
}

class Button extends React.Component {
    static Icon = Icon
    static Label = Label

    state = {
        children: this.props.children
    }

    componentDidMount() {
        this.setState({ children: this.enhanceChildren()}, () => {
            console.log(this.state.children)
        })

        let labelCount = 0
        React.Children.forEach(this.props.children, child => {
            if(child.type.name === 'Label') labelCount++
            console.log(labelCount)
        })

        if(labelCount > 1) throw new Error('Una label al massimo, please')
    }

    enhanceChildren() {
        return React.Children.map(this.props.children, child => {
            const { name } = child.type

            let childProps

            switch(name) {
                case 'Icon':
                    childProps = { ...childProps, isLabel: false }
                    break;
                case 'Label':
                    childProps = { ...childProps, isLabel: true }
                    break;
            }
            return React.cloneElement(child, childProps)
        })
    }

    render() {
        return <button className="button">{this.state.children}</button>
    }
}



export default Button

/**
 * 1. sposta icona
 * 2. passa props al child
 * 3. limita numero di child
 * 4. BONUS: Context API se vuoi sare normal tags internamente
 */