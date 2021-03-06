import React, { Fragment } from 'react'
import {PropTypes} from 'prop-types'

export default function MyComponent({props01, props02, props03}){
  return (
    <Fragment>
        <h2>Property Validation</h2>
        <span>props01 : {props01 ? props01 : "--- Not Set ---"} </span>
        <span>props02 : {props02 ? props02 : "--- Not Set ---"} </span>
        <span>props03 : {props03 ? `${props03}` : "--- Not Set ---"} </span>
    </Fragment>
  )
}

MyComponent.propTypes = {
    // ProTypes Validation
    props01: PropTypes.String,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired
}

// default value
MyComponent.defaultProps = {
    props01: '기본값',
    props02 : 10,
    props03 : false
}
