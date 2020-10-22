/* 
// Method 1
import AppForm from './AppForm'
import AppFormField from './AppFormField'
import ErrorMessage from './ErrorMessage'
import SubmitButton from './SubmitButton'
import AppFormPicker from './AppFormPicker'

export {AppForm, AppFormField, ErrorMessage, SubmitButton, AppFormPicker} 
 */

// Method 2 (combining import/export into a sigle line of code)
export { default as Form } from "./Form";
export { default as FormField } from "./FormField";
export { default as ErrorMessage } from "./ErrorMessage";
export { default as SubmitButton } from "./SubmitButton";
export { default as FormPicker } from "./FormPicker";
export { default as FormImagePicker } from "./FormImagePicker";
