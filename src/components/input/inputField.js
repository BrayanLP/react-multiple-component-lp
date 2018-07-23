import React from 'react'
import PropTypes from 'prop-types'
import styles from './style/default.css'
// import grid from './style/grid.scss'

// const required = value =>
//   value || typeof value === 'number' ? undefined : 'Required'

// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)

// export const minLength = min => value =>
//   value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(2)

// const alphaNumeric = value =>
//   value && /[^a-zA-Z0-9 ]/i.test(value)
//     ? 'Only alphanumeric characters'
//     : undefined
// const number = value =>
//   value && isNaN(Number(value)) ? 'Must be a number' : undefined

const InputField = ({
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
        ((error &&
          dirty && (
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
  meta: PropTypes.any,
  touched: PropTypes.bool,
  input: PropTypes.any,
  error: PropTypes.string
}

export default InputField
