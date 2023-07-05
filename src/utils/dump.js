// // function Adduser({ navigation }) {
// //     const [name, setName] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [gender, setGender] = useState('');
// //     const handleSubmit = () => {
// //         console.log('clicked');
// //     }

// //     var radio_props = [
// //         { label: 'Male' },
// //         { label: 'Female' }
// //     ];

// //     return (
// //         <KeyboardAwareScrollView extraHeight={50}>
// //             <View style={styles.container}>

// //                 <View style={[styles.avatar, styles.child]}>
// //                     <Icon
// //                         name="user"
// //                         type={IconType.FontAwesome5}
// //                         size={50}
// //                         color="black"
// //                         onPress={() => { }}
// //                     />
// //                 </View>
// //                 <View style={[styles.sectionContainer, styles.parent, styles.containerSpace]}>
// //                         <View style={styles.inputContainer}>
// //                             <Text style={styles.label}>{NAME}</Text>
// //                             <TextInput
// //                                 placeholder="Name"
// //                                 style={styles.inputBar}
// //                                 value={name}
// //                                 onChangeText={(text) => setName(text)}
// //                             />
// //                         </View>
// //                         <View  style={styles.inputContainer}>
// //                             <Text style={styles.label}>{PHONENUMBER}</Text>

// //                             <TextInput
// //                             style={styles.inputBar}
// //                                 placeholder="Phone Number"
// //                                 value={phoneNumber}
// //                                 onChangeText={(text) => setPhoneNumber(text)}
// //                             />

// //                         </View>
// //                         <View  style={styles.inputContainer}>
// //                             <Text style={styles.label}>{EMAIL}</Text>

// //                             <TextInput
// //                             style={styles.inputBar}
// //                                 placeholder="Email"
// //                                 value={email}
// //                                 onChangeText={(text) => setEmail(text)}
// //                             />
// //                         </View>
// //                         <View>
// //                             <Text>{GENDER}</Text>
// //                             {/* <View style={styles.radioContainer}>
// //                                 <RadioButton.Group
// //                                     onValueChange={(value) => setGender(value)}
// //                                     value={gender}
// //                                 >
// //                                     <View style={styles.radioItem}>
// //                                         <Text>Male</Text>
// //                                         <RadioButton value="male" color="blue" />
// //                                     </View>
// //                                     <View style={styles.radioItem}>
// //                                         <Text>Female</Text>
// //                                         <RadioButton value="female" color="blue" />
// //                                     </View>
// //                                 </RadioButton.Group>
// //                             </View> */}
// //                             </View>




// //                         </View>

// //                     </View>

// //         </KeyboardAwareScrollView>
// //     );
// // }


// // ...import statements

// function Adduser({ navigation }) {
//     const [currentField, setCurrentField] = useState('');
//     const dispatch = useDispatch();

//     const handleFieldFocus = (fieldName) => {
//         setCurrentField(fieldName);
//     };

//     const handleFieldBlur = () => {
//         setCurrentField('');
//     };

//     const handleKeyboardDone = () => {
//         if (currentField === 'name') {
//             phoneInput.focus();
//         } else if (currentField === 'phoneNumber') {
//             emailInput.focus();
//         } else {
//             handleSubmit();
//         }
//     };

//     const handleSubmit = (values) => {
//         // handle form submission
//         // ...
//     };

//     return (
//         <KeyboardAwareScrollView extraHeight={50}>
//             <View style={styles.container}>
//                 <Formik
//                     initialValues={{
//                         name: '',
//                         phoneNumber: '',
//                         email: '',
//                         gender: '',
//                     }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//                         <View style={[styles.sectionContainer, styles.parent, styles.containerSpace]}>
//                             {/* Render the form fields */}
//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.label}>{NAME}</Text>
//                                 <TextInput
//                                     placeholder="Name"
//                                     style={styles.inputBar}
//                                     value={values.name}
//                                     onChangeText={handleChange('name')}
//                                     onBlur={handleBlur('name')}
//                                     onFocus={() => handleFieldFocus('name')}
//                                     returnKeyType={currentField === 'name' ? 'next' : 'done'}
//                                     onSubmitEditing={handleKeyboardDone}
//                                 />
//                                 {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
//                             </View>
//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.label}>{PHONENUMBER}</Text>
//                                 <TextInput
//                                     ref={(ref) => (phoneInput = ref)}
//                                     style={styles.inputBar}
//                                     placeholder="Phone Number"
//                                     value={values.phoneNumber}
//                                     onChangeText={handleChange('phoneNumber')}
//                                     onBlur={handleBlur('phoneNumber')}
//                                     onFocus={() => handleFieldFocus('phoneNumber')}
//                                     keyboardType="numeric"
//                                     returnKeyType={currentField === 'phoneNumber' ? 'next' : 'done'}
//                                     onSubmitEditing={handleKeyboardDone}
//                                 />
//                                 {touched.phoneNumber && errors.phoneNumber && (
//                                     <Text style={styles.error}>{errors.phoneNumber}</Text>
//                                 )}
//                             </View>
//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.label}>{EMAIL}</Text>
//                                 <TextInput
//                                     ref={(ref) => (emailInput = ref)}
//                                     style={styles.inputBar}
//                                     placeholder="Email"
//                                     value={values.email}
//                                     onChangeText={handleChange('email')}
//                                     onBlur={handleBlur('email')}
//                                     onFocus={() => handleFieldFocus('email')}
//                                     returnKeyType="done"
//                                     onSubmitEditing={handleKeyboardDone}
//                                 />
//                                 {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
//                             </View>
//                             {/* Render other form fields */}
//                             {/* ... */}
//                             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                                 <Text style={styles.btnText}>{SUBMIT}</Text>
//                             </TouchableOpacity>
//                         </View>
//                     )}
//                 </Formik>
//             </View>
//         </KeyboardAwareScrollView>
//     );
// }

// // ...export statement

// {/*<View style={styles.row}>
//                                     <View style={styles.row}>
//                                         <TouchableOpacity style={[styles.radioBtn]} onPress={() => handleChange}>
//                                         </TouchableOpacity>
//                                         <Text style={styles.label}>{MALE}</Text>
//                                     </View>
//                                     <View style={styles.row}>
//                                         <TouchableOpacity style={[styles.radioBtn]} onPress={() => handleChange}></TouchableOpacity>
//                                         <Text style={styles.label}>{FEMALE}</Text>
//                                     </View>
//                                     {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
//                                 </View> */}

//                                 import { configureStore, createSlice,createAsyncThunk, createSelector } from '@reduxjs/toolkit';

//                                 const userSlice = createSlice({
//                                   name: 'user',
//                                   initialState: {
//                                     users: [],
//                                   },
//                                   reducers: {
//                                     addUser: (state, action) => {
//                                       state.users.push(action.payload);
//                                     },
//                                     deleteUser: (state, action) => {
//                                       state.users = state.users.filter(user => user.id !== action.payload);
//                                     },
//                                     editUser: (state, action) => {
//                                       const { id, name, phonenumber, email } = action.payload;
//                                       const user = state.users.find((user ) => user.id === id);
//                                       if (user) {
//                                         user.name = name;
//                                         user.phonenumber = phonenumber;
//                                         user.email = email;
//                                       }
//                                     },
                                
//                                   },
//                                 });
                                
//                                 export const {addUser, deleteUser, editUser  } = userSlice.actions;
                                
//                                 const Store = configureStore({
//                                   reducer: {
//                                     users: userSlice.reducer,
//                                   },
//                                 });
                                
//                                 export default Store;
                                
//                                 export const getUserById = (state,userId) => {
//                                   return state.users.find(user => user.id === userId)
//                                 }
                                
//                                 // createSelector(
//                                 //   (state) => state.users.users,
//                                 //   (_, userId) => userId,
//                                 //   (users, userId) => users.find((user) => user.id === userId)
//                                 // );
                                
// createSelector(
//     (state) => state.users.users,
//     (_, userId) => userId,
//     (users, userId) => users.find((user) => user.id === userId)
//   );