import React from "react";
import _Form from "./Form";
import Field from "./Field";
import useForm from "../ame-rc-field-form/useForm";

const Form = _Form
Form.Field = Field
Form.useForm = useForm

export { Field, useForm }
export default Form