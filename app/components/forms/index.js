/* 
// Method 1
import AppForm from './AppForm'
import AppFormField from './AppFormField'
import ErrorMessage from './ErrorMessage'
import SubmitButton from './SubmitButton'

export {AppForm, AppFormField, ErrorMessage, SubmitButton} 
 */

// Method 2 (combining import/export into a sigle line of code)
export { default as AppForm } from "./AppForm";
export { default as AppFormField } from "./AppFormField";
export { default as ErrorMessage } from "./ErrorMessage";
export { default as SubmitButton } from "./SubmitButton";
