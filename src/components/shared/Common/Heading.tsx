import React, { useEffect, useState } from 'react';

var classNames = require('classnames');

const Heading = (props) => {

    const [align, setAlign] = useState('')

    useEffect(() => {
        setAlignment(props)
    }, [props])

    const setAlignment = (props) => {
        //setAlign(props.align)
        switch (props.align) {
            case 'right':
                setAlign('text-right')
                return;
            case 'center':
                setAlign('text-center')
                return;
            default:
                setAlign('text-left')
                return;
        }
    }
    console.log("props", props.align)


    return (
        <div className={classNames(align, 'text-black', 'text-xl')}>
            {props.title}
        </div>
    )
}

export default Heading
