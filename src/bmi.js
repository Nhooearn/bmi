import { useRef, useState } from 'react';
import './bmi.css'
const BmiText = ({ bmi }) => {
    let textColor;

    if (bmi === 0 || bmi === null) {
        textColor = 'red';
        return (<h1 style={{ color: textColor }}>กรุณากรอกข้อมูล</h1>);
    }

    if (bmi < 18.5) {
        textColor = 'blue';
        return (<h1 style={{ color: textColor }}>ผอม</h1>);
    }

    if (bmi > 30) {
        textColor = 'purple';
        return (<h1 style={{ color: textColor }}>อ้วน</h1>);
    }

    textColor = 'green';
    return (<h1 style={{ color: textColor }}>ปรกติ</h1>);
}


export default function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi, setBmi] = useState(0);

    const calBmi = () => {
        let w = w_inputRef.current.value;
        let h = h_inputRef.current.value / 100;
        setBmi(w / Math.pow(h, 2));
    }

    const reset = () => {
        w_inputRef.current.value = '';
        h_inputRef.current.value = '';
        setBmi(0);
    }

    return (
        <>
            <div className='container'>
                <h2>BMI Calculator</h2>

                <div className='text-input'>
                    Weight : <input
                        type="text"
                        ref={w_inputRef} /> kg.<br />
                    Height : <input
                        type="text"
                        ref={h_inputRef} /> cm.<br />
                </div>

                <div className='bt'>
                    <button onClick={calBmi}>Calculate!</button>
                    <button onClick={reset}>Reset</button><br />
                </div>

                Bmi value : {Bmi.toFixed(2)}
                <BmiText bmi={Bmi} />
            </div>
        </>
    );
}
