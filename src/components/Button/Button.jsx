import React from 'react';

import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({ primary=false, backgroundColor='none', fontWeight="bold", size=null, fontSize=15, onClick=undefined, color="#000000", label, marginTop=0, marginBottom=0, marginLeft=0, marginRight=0, horizontalMargin=10, verticalMargin=20, verticalPadding=10, horizontalPadding=10  }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      style={{ 
        backgroundColor: backgroundColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        margin: `${verticalMargin}px ${horizontalMargin}px`,
        padding: size?? `${verticalPadding}px ${horizontalPadding}px`,
        color: size?? color,
        fontSize: size?? fontSize,
        fontWeight: fontWeight
      }}
      className={['button', `button--${size}`, mode].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {

  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,

  /** What background color to use */
  backgroundColor: PropTypes.string,

  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Button contents */
  label: PropTypes.string.isRequired,

  /** Optional click handler */
  onClick: PropTypes.func,

  /** Horizontal margin for the Button */
  horizontalMargin: PropTypes.number,

  /** Vertical margin for the Button */
  verticalMargin: PropTypes.number,

  /** Top margin for Button */
  marginTop: PropTypes.number,

  /** Bottom margin for Button */
  marginBottom: PropTypes.number,

  /** Left margin for Button */
  marginLeft: PropTypes.number,

  /** Right margin for Button */
  marginRight: PropTypes.number
};


