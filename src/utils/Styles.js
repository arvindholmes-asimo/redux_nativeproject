import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4682b4'
    },
    sectionContainer: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 30
    }, h1: {
        color: '#111',
        fontSize: 30,
        textAlign: 'center',
        padding: 20
    }, h2: {
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    }
    , flatList: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#111',
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        backgroundColor:'#6dd5ed',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'



    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10,

    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#f4f4f4',
        borderRadius: 15,
        marginHorizontal: 10,
        lineHeight: 1,
        marginVertical: 10,

    },
    icon: {
        margin: 10,

    },
    inputContainer: {
        borderRadius: 5,
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    customInput: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: '#111'
    },
    number: {
        fontSize: 15,
        color: '#111'
    },
    email: {
        fontSize: 15,
        color: '#111'
    },
    inputBar: {
        backgroundColor: '#f4f4f4',
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 15,
        paddingLeft: 5
    },
    parent: {
        position: 'relative'
    }, child: {
        alignSelf: 'center',

    }, containerSpace: {
        paddingTop: 50,
        paddingHorizontal: 20,
        marginTop: 80
    },
    avatarContainer: {
        position: 'absolute',
        top: -50,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    avatar: {
        width: '25%',
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        borderRadius: 50,
        borderColor: '#4682b4',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    }, label: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        marginBottom:5,
    }, error: {
        color: 'red',
    }, button: {
        height: 40,
        backgroundColor: 'dodgerblue',
        borderRadius: 15,
        marginVertical: 20
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 4
    }

    , backgroundImage: {
        flex: 0.4,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
        marginTop:8
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    },

    backgroundImageStyle: {
        opacity: 0.7,

    }




})