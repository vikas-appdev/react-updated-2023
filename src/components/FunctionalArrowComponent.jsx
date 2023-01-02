import React from 'react'
import { PropsExample } from '../PropsExample/PropsExample'

export const FunctionalArrowComponent = () => {

    const parentComponetHandler = () => {
        console.log("Button clicked, Data coming from parent component as function")
    }

    const getValueFromChild = (value) => {
        console.log(value)
    }

    return (
        <div>
            FunctionalArrowComponent
            <PropsExample getValueFromParent={getValueFromChild} parentComponetHandler={parentComponetHandler} flag={false} name="Vikas" />

        </div>

    )
}

