import React from 'react'
import { PropsExample } from '../PropsExample/PropsExample'

export const FunctionalArrowComponent = () => {

    const parentComponetHandler = () => {
        console.log("Button clicked, Data coming from parent component as function")
    }

    return (
        <div>
            FunctionalArrowComponent
            <PropsExample parentComponetHandler={parentComponetHandler} flag={false} name="Vikas" />

        </div>

    )
}

