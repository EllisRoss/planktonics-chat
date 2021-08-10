import React from "react";
import { Formik, Form } from 'formik';
import { Input, SubmitButton } from "formik-antd";

export const AddMessageForm: React.FC<AddMessageFormProps> = ({sendMessage}) => {

    return (
        <div>
            <Formik
                initialValues={{ msg: '' }}
                validate={values => {
                    const errors: {msg?: string} = {};
                    if (!values.msg) {
                        errors.msg = 'Required';
                    }
                    return errors;
                }}
                onSubmit={sendMessage}
            >
                {({errors}) => (
                    <Form>
                        <Input.TextArea autoSize={{ minRows: 1, maxRows: 6 }} name="msg" />
                        <SubmitButton loading={false} disabled={false} danger={errors.msg !== undefined}>
                            Send
                        </SubmitButton >
                    </Form>
                )}
            </Formik>
        </div>
    );
}

type AddMessageFormProps = {
    sendMessage: (values: FormValues) => void,
}

export type FormValues = {
    msg: string,
}