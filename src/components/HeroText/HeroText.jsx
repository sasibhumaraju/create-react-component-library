import React from 'react';
import PropTypes from 'prop-types';
import './herotext.css'


/** Hero Text UI component for user interaction */
export const HeroText = ({size='medium', text, fontFamily='Nunito Sans', color='black', textAlign='center',  marginTop=0, marginBottom=0, marginLeft=0, marginRight=0, horizontalMargin=0, verticalMargin=0}) => {
  const fontSize = size === 'medium'? '65px' : size === 'small'? '55px' : '80px'
  return (
    <div
      style={{
        fontFamily: fontFamily,
        color: color,
        fontSize: fontSize,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        textAlign: textAlign,
        margin: `${verticalMargin}px ${horizontalMargin}px`,
      }}
      className='hero_text'
    >
      {text}
    </div>
  );
};

HeroText.propTypes = {
  /** What font family to use */
  fontFamily: PropTypes.string,

  /** Which text color to be use */
  color: PropTypes.string,

  /** How large should the button be? */
  size: PropTypes.oneOf(['small','medium','large']),

  /** What text is shown? */
  text: PropTypes.string.isRequired,

  /** Text Align for Hero Text */
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),

  /** Horizontal margin for the Hero Text */
  horizontalMargin: PropTypes.number,

  /** Vertical margin for the Hero Text */
  verticalMargin: PropTypes.number,

  /** Top margin for Hero Text */
  marginTop: PropTypes.number,

  /** Bottom margin for Hero Text */
  marginBottom: PropTypes.number,

  /** Left margin for Hero Text */
  marginLeft: PropTypes.number,

  /** Right margin for Hero Text */
  marginRight: PropTypes.number
}