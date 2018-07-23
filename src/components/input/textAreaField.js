import React from 'react'
import PropTypes from 'prop-types'
import styles from './style/default.css'
import textarea from './style/textarea.css'
const TextAreaField = ({
  label,
  placeholder,
  wrapperClass,
  labelClass,
  inputClass,
  errorClass,
  required,
  autoComplete,
  disabled,
  input,
  meta: { touched, error, warning, valid, dirty }
}) => {
  return (
    <div
      className={
        wrapperClass
          ? [styles.formGroupLp, textarea.formGroupLp, wrapperClass].join(' ')
          : styles.formGroupLp
      }
    >
      {label && <label className={labelClass}>{label}</label>}

      <textarea
        {...input}
        required={required || false}
        className={
          inputClass
            ? [styles.formControlLp, inputClass].join(' ')
            : [
              styles.formControlLp,
              dirty ? (valid ? styles.isValid : styles.isInvalid) : ''
            ].join(' ')
        }
        placeholder={placeholder}
        autoComplete={autoComplete || 'off'}
        disabled={disabled ? 'true' : false}
      />
      {touched &&
        ((error && (
          <span
            className={
              errorClass
                ? [styles.invalidFeedback, errorClass].join(' ')
                : [styles.invalidFeedback].join(' ')
            }
          >
            {error}
          </span>
        )) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
}

TextAreaField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  errorClass: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  meta: PropTypes.any,
  touched: PropTypes.any,
  input: PropTypes.any,
  error: PropTypes.string
}

export default TextAreaField
