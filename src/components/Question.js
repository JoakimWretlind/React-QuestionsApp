import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
    Questions,
    QuestionHeader,
    QuestionHeaderH4,
    Btn,
    QuestionP
} from './styling';

const Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        gsap.to(".questions", {
            delay: .3,
            opacity: 1,
            stagger: .3,
            rotationX: 360,
        })
    }, [])

    return (
        <>
            <Questions className="questions">
                <QuestionHeader>
                    <QuestionHeaderH4>{title}</QuestionHeaderH4>
                    <Btn className="btn" onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </Btn>
                </QuestionHeader>
                {showInfo && <QuestionP>{info}</QuestionP>}
            </Questions>

        </>
    )

}

export default Question
