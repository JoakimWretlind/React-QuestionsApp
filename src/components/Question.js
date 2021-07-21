import React, { useState } from 'react';
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

    return (
        <>
            <Questions>
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
