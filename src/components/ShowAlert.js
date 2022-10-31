import React from 'react'


export default function Show_alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <>

            <div className='historycomponent my-1' style={{ height: "50px", width: "100%", position: "absolute" }}>
                {
                    props.alert &&
                    <div className={`alert alert-${props.alert.type}`} role="alert">
                        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.smg}
                    </div>
                }
            </div>

        </>
    )
}
