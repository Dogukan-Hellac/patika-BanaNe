import React, { useState } from "react";
import { View, Text } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './Sign.style';
import { Formik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: ''
}

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    function handleLogin() {
        navigation.goBack()
    }
    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: 'warning'
            })
            return
        }

        try {
            setLoading(true)
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, formValues.usermail, formValues.password)
            showMessage({
                message: 'Kullanıcı oluşturuldu!',
                type: 'success',
                statusBarHeight: 40
            })
            navigation.navigate('Login')
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
                        <Input
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder="e-postanızı giriniz.."
                        />
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder="şifrenizi giriniz.."
                            isSecure
                        />
                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder="şifrenizi tekrar giriniz.."
                            isSecure
                        />
                        <Button title="Kayıt Ol" theme="secondary" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button title="Giriş Yap" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign