import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component{
    static contextType = FieldContext
    getControlled = () => {
        const { getFieldValue, setFieldValue } = this.context
        const { name } = this.props
        return{
            value: getFieldValue(name),
            onChange: (e) => {
                const newValue = e.target.value
                setFieldValue({[name]: newValue})
            }
        }
    }
    render() {
        const returnChildNode = React.cloneElement(this.props.children, this.getControlled())
        return returnChildNode
    }
}