import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { PropTypes } from 'react'
import FormField from 'zooid-form-field'
import FormLabel from 'zooid-form-label'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  required: false,
}

const Radio = (props) => {
  const { className, description, label, name, required } = props
  const classes = classNames(
    styles.root,
    className
  )

  const sanitizedProps = blacklist(
    props,
    'className',
    'description',
    'label',
    'type'
  )

  return (
    <FormField className={classes}>
      <input {...sanitizedProps} type="radio" className={styles.radio} />

      <span className={styles.fauxRadio} />

      <FormLabel name={name} required={required}>
        {label}
      </FormLabel>
      {description && <span className={styles.description}>{description}</span>}
    </FormField>
  )
}

Radio.propTypes    = propTypes
Radio.defaultProps = defaultProps

export default Radio
