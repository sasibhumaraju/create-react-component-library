import React from 'react'
import PropTypes from 'prop-types'
import './paragraph.css'

/** Paragraph UI component for user interaction */
export const Paragraph = ({paragraphList=[], listStyleType='none', fontFamily='Nunito Sans', color='black', lineHeight=1.2, gap=10, textAlign='start', marginTop=0, marginBottom=0, marginLeft=0, marginRight=0, horizontalMargin=10, verticalMargin=20}) => {
  
  const orderListShapes = new Set(['decimal', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman']);
  const unOrderListShapes = new Set(['circle', 'disc', 'square']);
  const paragraphListElements = <div>{
      paragraphList.map((paragraph,index)=>{
      return <li style={{marginBottom: gap}} key={index}>{paragraph}</li>
    })}</div>
  const paragraphListNormal = <div>{
      paragraphList.map((paragraph,index)=>{
      return <div style={{marginBottom: gap}} key={index}>{paragraph}</div>
  })}</div>
  const list = orderListShapes.has(listStyleType)? <ol style={{listStyleType: listStyleType}}>{paragraphListElements}</ol> : unOrderListShapes.has(listStyleType)? <ul style={{listStyleType: listStyleType}}>{paragraphListElements}</ul> : <>{paragraphListNormal}</>;

  return (
    <div
      style={{
        fontFamily: fontFamily,
        color: color,
        lineHeight: lineHeight,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        textAlign: textAlign,
        margin: `${verticalMargin}px ${horizontalMargin}px`,
        gap: `${gap}`
      }}
      className='paragraph'
    >
      {list}
    </div>
  )
}

Paragraph.propTypes = {
  /** List of paragraphs to display */
  paragraphList: PropTypes.array.isRequired,

  /** List style shapes */
  listStyleType: PropTypes.oneOf(['circle', 'disc', 'square', 'decimal', 'lower-alpha', 'upper-alpha', 'lower-roman', 'upper-roman', 'none']),

  /** Text Align for Paragraph */
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),

  /** Font family to used for paras */
  fontFamily: PropTypes.string,

  /** Color used for paras */
  color: PropTypes.string,

  /** Line Height between paras */
  lineHeight: PropTypes.number,

  /** Gap between paras */
  gap: PropTypes.number,

  /** Horizontal margin for the paragraph */
  horizontalMargin: PropTypes.number,

  /** Vertical margin for the paragraph */
  verticalMargin: PropTypes.number,

  /** Top margin for paragraph */
  marginTop: PropTypes.number,

  /** Bottom margin for paragraph */
  marginBottom: PropTypes.number,

  /** Left margin for paragraph */
  marginLeft: PropTypes.number,

  /** Right margin for paragraph */
  marginRight: PropTypes.number
}