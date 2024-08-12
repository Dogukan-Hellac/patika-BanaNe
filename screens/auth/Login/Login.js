import React, { useState } from "react";
import { View, Text } from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
    usermail: '',
    password: '',
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    function handleSignUp() {
        navigation.navigate('Sign')
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, formValues.usermail, formValues.password)
            navigation.navigate('Messages')
            setLoading(false)
        } catch (err) {
            console.log(err)
            showMessage({
                message: authErrorMessageParser(err.code),
                type: 'danger',
                statusBarHeight: 40
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onType={handleChange('usermail')} value={values.usermail} placeholder="e-postanızı giriniz.." />
                        <Input onType={handleChange('password')} value={values.password} placeholder="şifrenizi giriniz.." isSecure/>
                        <Button title="Giriş Yap" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button title="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
        </SafeAreaView>
    )
}

export default Login