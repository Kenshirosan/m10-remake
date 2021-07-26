import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// 1. Une string arrive en props, la mettre dans une balise p
// 2. PropTypes : La string est une string obligatoire

// Les base de l'Accordion :
// Exemple ici : https://getbootstrap.com/docs/5.0/components/accordion/
// Dans l'avenir, implémenter cette fonctionnalité
const Accordion = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [btnText, setBtnText] = useState('Read More');

    const maybeIsVisible = () => {
        btnText === 'Read More' ? setBtnText('Hide') : setBtnText('Read More');
        setIsVisible(!isVisible);
    };

    return (
        <Fragment>
            <p>{isVisible ? text : text.substr(0, 50)}</p>
            <button onClick={maybeIsVisible}>{btnText}</button>
        </Fragment>
    );
};

Accordion.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Accordion;
