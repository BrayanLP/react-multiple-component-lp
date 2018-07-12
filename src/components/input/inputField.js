import React from 'react'
import PropTypes from 'prop-types'
import styles from './style/default.css'
const InputField = ({
  label,
  placeholder,
  wrapperClass,
  labelClass,
  inputClass,
  errorClass,
  error,
  required,
  autoComplete,
  disabled,
  input
}) => {
  return (
    <div
      className={
        wrapperClass
          ? [styles.formGroupLp, wrapperClass].join(' ')
          : styles.formGroupLp
      }
    >
      {label && <label className={labelClass}>{label}</label>}
      <input
        {...input}
        required={required || false}
        className={
          inputClass
            ? [styles.formControlLp, inputClass].join(' ')
            : styles.formControlLp
        }
        placeholder={placeholder}
        autoComplete={autoComplete || 'off'}
        disabled={disabled ? 'true' : false}
      />
      {required && (
        <span
          className={
            errorClass
              ? [styles.invalidFeedback, styles.hide, errorClass].join(' ')
              : [styles.invalidFeedback, styles.hide].join(' ')
          }
        >
          {error || 'required field'}
        </span>
      )}
    </div>
  )
}

InputField.propTypes = {
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
  input: PropTypes.any,
  error: PropTypes.string
}

export default InputField
