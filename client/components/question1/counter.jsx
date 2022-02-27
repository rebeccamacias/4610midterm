import { Button } from '../common/button.jsx'
import { useState } from 'react';

export const Counter = ({ min, max }) => {
    const [displayed, setDisplayed] = useState(0);
    if (min > 0 && displayed == 0) {
        setDisplayed(min);
    } else if (max < 0 && displayed == 0) {
        setDisplayed(max);
    }

    const increment = () => {
        if (displayed == max) {
            return;
        } else {
            console.log('plussing');
            setDisplayed(displayed + 1);
        }
    }

    const decrement = () => {
        if (displayed == min) {
            return;
        } else {
            console.log('minussing')
            setDisplayed(displayed - 1);
        }
    }

    return (
        <span>
            <Button type="button" onClick={decrement}>-</Button>
            {displayed}
            <Button type="button" onClick={increment}>+</Button>
        </span>
    )
};