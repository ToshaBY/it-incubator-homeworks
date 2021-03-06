import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.main}>
            <img src={props.avatar} className={s.avatar} alt='avatar'/>
            <div className={s.tongue}/>
            <div className={s.text_area}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}
