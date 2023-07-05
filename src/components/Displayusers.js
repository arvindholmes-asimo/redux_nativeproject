import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../utils/Styles';
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useSelector } from 'react-redux';
import { deleteUser } from '../redux/Userslice';
import { useDispatch } from 'react-redux';

function Displayusers({ navigation }) {
    const user = useSelector((state) => state.users.users);

    const dispatch = useDispatch();

    
    const [input, setInput] = useState('')
    const [client, setClient] = useState('')

    

    const renderItem = ({item}) => {
        return(
        <View style={styles.flatList} key={item.id}>
            <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.number}>{item.phonenumber}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.email}>{item.gender}</Text>

            </View>
            <View>
                <View>
                    {/* to handle edit */}
            <Icon
                    style={styles.icon}
                    name="account-edit"
                    type={IconType.MaterialCommunityIcons}
                    size={30}
                    color="black"
                    onPress={() => handleEdit(item.id) }
                />

                </View>
                <View>
                    {/* to handledelete */}
            <Icon
                    style={styles.icon}
                    name="delete"
                    type={IconType.MaterialCommunityIcons}
                    size={30}
                    color="black"
                    onPress={() => handleDelete(item.id)}
                />

                </View>
            </View>

        </View>

        )

    }
    const handleSearch = (value) => {
        setInput(value)
        let searchItem = user.filter(

            (term) =>
                term.name.toLowerCase().includes(value.toLowerCase()) ||
                term.phonenumber.includes(value) ||
                term.email.toLowerCase().includes(value.toLowerCase()) 
                
        );
        setClient(searchItem)
    }
    const handleEdit= (userId) => {
        navigation.navigate('Adduser',{userId,
           gender: user ? user.gender : '' 
           
        })
        console.log('edit');
    }
    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
        console.log('deletedUser');
    }

    return (
        <View style={styles.container}>
              <ImageBackground
                source={{uri:('https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')}}
                style={styles.backgroundImage}
                imageStyle={styles.backgroundImageStyle}
            >
            <View style={styles.row}>
            <View style={styles.searchBar}>
                <View>
            <Icon
                    style={styles.icon}
                    name="search"
                    type={IconType.Feather}
                    size={30}
                    color="black"
                />

                </View>

                <TextInput
                    style={styles.customInput}
                    placeholder='Search User'
                    value={input}
                    onChangeText={ handleSearch}
                />
                
            </View>
          
            </View>
            </ImageBackground>

            <View style={[styles.sectionContainer, styles.borderStyle]}>
                <View>
                    <FlatList
                        data={ client || user}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>
            </View>

        </View>

    );
}

export default Displayusers;