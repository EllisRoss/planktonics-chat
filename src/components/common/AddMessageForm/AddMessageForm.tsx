import React from "react";
import {Formik, Form, FormikErrors, FormikHelpers} from 'formik';
import {Input, SubmitButton} from "formik-antd";
import styles from "./AddMessageForm.module.css"
import {Col, Row} from "antd";

export const AddMessageForm: React.FC<AddMessageFormProps> = ({sendMessage}) => {

    return (
        <div>
            <Formik
                initialValues={{msg: ''}}
                validate={values => {
                    const errors: FormikErrors<FormValues> = {};
                    if (!values.msg) {
                        errors.msg = 'Required';
                    }
                    return errors;
                }}
                onSubmit={sendMessage}
            >
                {({errors}) => (
                    <Form className={styles.form}>
                        <Row>
                            <Col flex={1}>
                                <div className={styles.form__input}>
                                    <Input.TextArea placeholder='type here...'
                                                    bordered={false}
                                                    autoSize={{minRows: 1, maxRows: 6}}
                                                    name="msg"/>
                                </div>
                            </Col>
                            <Col>
                                <SubmitButton className={styles.form__button}
                                              loading={false}
                                              disabled={false}
                                              danger={errors.msg !== undefined}>
                                    Send
                                </SubmitButton>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

type AddMessageFormProps = {
    sendMessage: (values: FormValues, {resetForm}: FormikHelpers<FormValues>) => void,
}

export type FormValues = {
    msg: string,
}