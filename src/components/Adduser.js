import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../utils/Styles';
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NAME, PHONENUMBER, EMAIL, GENDER, SUBMIT, MALE, FEMALE, UPDATE } from '../utils/Constants';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {  addUser,editUser} from '../redux/Userslice';
import RadioBtn from './RadioBtn';


const validationSchema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!').required('Please Enter UserName'),
    phonenumber: yup.string().max(10).matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number').required('Please enter a phone number'),
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Enter valid email').email('Invalid email').required('Please enter an email'),
    gender: yup.string().required('Please select a gender')
});


function Adduser({ navigation, route }) {

    const { userId, gender } = route.params || { userId: null, gender: '' };


    const user = useSelector((state) => state.users.users.find((item) => item.id === userId));

    const dispatch = useDispatch();


    const initialValues = {
        name: user ? user.name : '',
        phonenumber: user ? user.phonenumber : '',
        email: user ? user.email : '',
        gender: gender,
    };


    const buttonText = userId ? UPDATE : SUBMIT;

    const [currentField, setCurrentField] = useState('');
    const [isLiked, setIsLiked] = useState([
        { id: 1, value: 0, name: MALE, selected: false },
        { id: 2, value: 1, name: FEMALE, selected: false }
    ]);

    useEffect(() => {
        if (userId && !user) {
            dispatch(user(userId));
        }
    }, [dispatch, userId, user]);

    const handleFieldFocus = (fieldName) => {
        setCurrentField(fieldName);
    };


    // on click of next shift to next field 
    const handleKeyboardDone = () => {
        if (currentField === 'name') {
            phoneInput.focus();
        } else if (currentField === 'phonenumber') {
            emailInput.focus();
        } else {
            handledata();
        }
    };

    // gender selection
    const onRadioBtnClick = (item) => {
        let updatedState = isLiked.map((isLikedItem) => {
            if (isLikedItem.id === item.id) {
                return { ...isLikedItem, selected: !isLikedItem.selected };
            } else {
                return { ...isLikedItem, selected: false };
            }
        });
        // console.log('updatedState=======gender', updatedState);
        setIsLiked(updatedState);
    };

    // final submit of user details 
    const handledata = (values) => {
        console.log('hndledata',handledata)
        console.log('values',values);

        const timestamp = new Date().getTime();

        const selectedGender = isLiked.find((item) => item.selected);
        console.log('selectedGender===', selectedGender);

        const user = {
            id: userId || `user-${timestamp}`,
            name: values.name,
            email: values.email,
            phonenumber: values.phonenumber,
            gender: selectedGender.name
        };

        // dispatch(addUser(user));

        if (userId) {
            dispatch(editUser(user));
        } else {
            dispatch(addUser(user));
        }
        navigation.goBack();
        console.log('user=====final',user);
    };

    return (
        <KeyboardAwareScrollView extraHeight={50}>
            <View style={styles.container}>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>{
                        console.log('handledata', handledata);
                        handledata(values)
                    } }
                    // onSubmit={(values)=>{handledata(values);
                    // console.log('log===formikdata',values.name,values.email)}}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched,setFieldValue }) => (
                        <View style={[styles.sectionContainer, styles.parent, styles.containerSpace]}>
                            <View style={[styles.avatarContainer]}>
                                <View style={[styles.avatar]}>
                                    <Icon
                                        name="user"
                                        type={IconType.FontAwesome5}
                                        size={50}
                                        color="black"
                                    />
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>{NAME}</Text>
                                <TextInput
                                    placeholder="Name"
                                    style={styles.inputBar}
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    onFocus={() => handleFieldFocus('name')}
                                    returnKeyType='next'
                                    onSubmitEditing={handleKeyboardDone}
                                />
                                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>{PHONENUMBER}</Text>
                                <TextInput
                                    ref={(ref) => (phoneInput = ref)}
                                    style={styles.inputBar}
                                    placeholder="Phone Number"
                                    value={values.phonenumber}
                                    onChangeText={handleChange('phonenumber')}
                                    onBlur={handleBlur('phonenumber')}
                                    onFocus={() => handleFieldFocus('phonenumber')}
                                    keyboardType="numeric"
                                    returnKeyType='next'
                                    onSubmitEditing={handleKeyboardDone}
                                />

                                {touched.phonenumber && errors.phonenumber && <Text style={styles.error}>{errors.phonenumber}</Text>}
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>{EMAIL}</Text>
                                <TextInput
                                    ref={(ref) => (emailInput = ref)}
                                    style={styles.inputBar}
                                    placeholder="Email"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    onFocus={() => handleFieldFocus('email')}
                                    returnKeyType="done"
                                    onSubmitEditing={handleKeyboardDone} />
                                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label }>{GENDER}</Text>

                                {isLiked.map((item) => (
                                    <RadioBtn
                                        onPress={() => {onRadioBtnClick(item)
                                            // handleChange('gender')
                                            setFieldValue('gender',item.name)
                                         } }
                                        
                                        selected={item.selected}
                                        key={item.id}
                                    >
                                        {item.name}

                                    </RadioBtn>
                                ))
                                }


                            </View>
                            {/* {console.log('handleSubmit,',handleSubmit)} */}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.btnText}>{buttonText}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyboardAwareScrollView>
    );
}



export default Adduser;