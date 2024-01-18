import React from 'react';
import Button from './Button';

const Keyboard = ({ onButtonClick }) => {
const alphabet = 'qwertyuiopasdfghjklñzxcvbnm';

return (
    <div>
    {alphabet.split('').map(letter => (
        <Button key={letter} text={letter} onClick={onButtonClick} />
    ))}
    <Button text="    "  onClick={onButtonClick} />
    <Button text="Borrar" onClick={() => onButtonClick('Borrar')} />
    </div>
);
}

export default Keyboard;
