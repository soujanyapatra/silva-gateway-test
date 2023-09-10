import { isEmpty, isEmptyArray, isNullOrUndefined } from './index'
import i18n from "@/plugins/i18n";
const { t } = i18n.global
// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'This field is required'

  return !!String(value).trim().length || 'This field is required'
}

// for validation message with field name
export const validateWithFieldName = (value: unknown, errorMessage: string) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return `${errorMessage}`

  return !!String(value).trim().length || `${errorMessage}`
}

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || t("validations.enter_valid_email")

  return re.test(String(value)) || t("validations.enter_valid_email")
}

// 👉 Password Validator
export const passwordValidator = (password: string) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

  const validPassword = regExp.test(password)

  return (
    // eslint-disable-next-line operator-linebreak
    validPassword ||
    t("validations.password_validation")
  )
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>

  value === target || t("validations.confirm_password_validation")

// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
  const valueAsNumber = Number(value)

  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`
}

// 👉 Integer Validator
export const integerValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  if (Array.isArray(value))
    return value.every(val => /^-?[0-9]+$/.test(String(val))) || t('validations.integerValidation')

  return /^-?[0-9]+$/.test(String(value)) || t('validations.integerValidation')
}

// float validation
export const floatValidatorWIthFieldName = (value: unknown, errorMessage: string) => {
  if (isEmpty(value))
    return true

  if (Array.isArray(value))
    return value.every(val => /^\d+(\.\d{2})?$/.test(String(val))) || `${errorMessage}`

  return /^\d+(\.\d{2})?$/.test(String(value)) || `${errorMessage}`
}

// 👉 Regex Validator
export const regexValidator = (value: unknown, regex: RegExp | string): string | boolean => {
  if (isEmpty(value))
    return true

  let regeX = regex
  if (typeof regeX === 'string')
    regeX = new RegExp(regeX)

  if (Array.isArray(value))
    return value.every(val => regexValidator(val, regeX))

  return regeX.test(String(value)) || 'The Regex field format is invalid'
}

// 👉 Alpha Validator
export const alphaValidator = (value: unknown) => {
  if (isEmpty(value))
    return true
  return /^[A-Z ]*$/i.test(String(value)) || 'Only alphabetic character as well as space is allowed'
}

// 👉 URL Validator
export const urlValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/

  return re.test(String(value)) || t('validations.website_url')
}

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
  if (isEmpty(value))
    return true

  return String(value).length === length || `The Min Character field must be at least ${length} characters`
}

// 👉 Length Validator
export const maxLengthValidator = (value: unknown, length: number, message: string) => {
  if (isEmpty(value))
    return true

  return String(value).length <= length || message
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const valueAsString = String(value)

  return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'All Character are not valid'
}

// for min and max character of a field
export const minMaxValidateWithFiledName = (value: string, min: number, max: number, field: string) => {
  /**
   * @param value: value of the field
   * @param min: min length required
   * @param max: max length required
   * @param field: field name
   */
  if (isEmpty(value))
    return true

  if (value.length < min) {
    return `The ${field} field must be at least ${min} characters`
  } else if (value.length > max) {
    return `The ${field} field may not be greater than ${max} characters`
  }
}

export const minMaxNumberValidateWithFiledName = (value: number, min: number, max: number, field: string) => {
  /**
   * @param value: value of the field
   * @param min: min length required
   * @param max: max length required
   * @param field: field name
   */
  if (isEmpty(value))
    return true

  if (value < min) {
    return `The ${field} field must be at least ${min}`
  } else if (value > max) {
    return `The ${field} field may not be greater than ${max}`
  } else {
    return true
  }
}

export const integerValidatorWithFieldName = (value: unknown, errorMessage) => {
  if (isEmpty(value))
    return true

  if (Array.isArray(value))
    return value.every(val => /^-?[0-9]+$/.test(String(val))) || `${errorMessage}`

  return /^-?[0-9]+$/.test(String(value)) || `${errorMessage}`
}