import { React, useEffect } from 'react'

export default function Timer(props) {

    const minutes = Math.floor(props.time.seconds % (3600) / 60)
    const seconds = Math.ceil((props.time.seconds % 3600) % 60)


    function format(time) {
        if (time.toString().length === 1) {
            let formattedTime = '0' + time.toString()
            return formattedTime
        } else {
            return time
        }
    }

    useEffect(() => {
        if (props.active) {
            const id = setInterval(() => {
                props.setTime(time => {
                    const newSeconds = time.seconds - 1;
                    return {...time, seconds: newSeconds }
                })

                if (props.time.seconds === 0) {
                    if (props.time.status === 'work') {
                        props.setActive(false)
                        props.setTime({...props.time, seconds: 1500 })
                        alert(`Work ends now!!`)
                    } else if (props.time.status === 'short') {
                        props.setActive(false)
                        props.setTime({...props.time, seconds: 300 })
                        alert(`Short break ends now!!`)
                    }
                    else if (props.time.status === 'long') {
                        props.setActive(false)
                        props.setTime({...props.time, seconds: 900 })
                        alert(`Long break ends now!!`)
                    }
                }
            }, 1000);
            return () => clearInterval(id)
        }
    }, [props, props.active, props.time])




    return (
        <>
        <div className="">
            <h4>{format(minutes)}:{format(seconds)} {props.time.status}</h4>
        </div>
        </>
    )
}
