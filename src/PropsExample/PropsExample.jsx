import React from 'react'

export const PropsExample = (props) => {
    const { flag, name, parentComponetHandler } = props
    return (

        <div>
            PropsExample {flag && name} <br />
            Welcome {flag ? name : 'Guest'}
            <button onClick={parentComponetHandler}>OnClick</button>
        </div>
    )
}
