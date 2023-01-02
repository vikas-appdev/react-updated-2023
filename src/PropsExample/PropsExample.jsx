import React from 'react'

export const PropsExample = (props) => {
    const { flag, name, parentComponetHandler, getValueFromParent } = props

    const handleClick = () => {
        getValueFromParent(5);
    }

    return (
        <div>
            PropsExample {flag && name} <br />
            Welcome {flag ? name : 'Guest'}
            <button onClick={parentComponetHandler}>OnClick</button>
            <button onClick={handleClick}>Send Data</button>

        </div>
    )
}
