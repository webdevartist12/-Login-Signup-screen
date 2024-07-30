import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Image, Text, TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const googleLogo = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" };
const facebookLogo = { uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" };
const twitterLogo = { uri: "https://cdn.icon-icons.com/icons2/2972/PNG/512/twitter_logo_icon_186891.png" }; 
const img = { uri: "https://cdn-icons-png.freepik.com/256/12122/12122213.png?ga=GA1.2.1297113204.1718872744&semt=ais_hybrid" };

export default function Signup({ navigation }) {
  return (
    <View style={styles.bg_container}>
      <View style={{ height: "100%", width: "100%" }}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Image style={styles.headerImage} source={img} />
          <Text style={styles.title}>
           <Text style={{ color: '#591815' }}>  Sign Up </Text>
          </Text>
          <Text style={styles.subtitle}>
            Create account to get started
          </Text>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Your Name"
              placeholderTextColor="#535353"
              style={styles.textInput}
            />
            <Ionicons name="person" size={20} color="black" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="#535353"
              style={styles.textInput}
            />
            <Ionicons name="mail" size={20} color="black" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor="#535353"
              style={styles.textInput}
              secureTextEntry
            />
            <Ionicons name="lock-closed" size={20} color="black" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor="#535353"
              style={styles.textInput}
              secureTextEntry
            />
            <Ionicons name="lock-closed" size={20} color="black" style={styles.icon} />
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.orText}>or sign up with</Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={googleLogo} style={styles.logo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={facebookLogo} style={styles.logo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={twitterLogo} style={styles.logo} />
            </TouchableOpacity>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signUpLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg_container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#DCD8CC",
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
    marginBottom: 15,
  },
  headerImage: {
    height: 95,
    width: 95,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginBottom: 6,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
  },
  formContainer: {
    padding: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: "black",
  },
  icon: {
    marginLeft: 10,
  },
  buttonView: {
    marginTop: 18,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#591815',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 16,
    width: 230,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  orText: {
    fontSize: 17,
    textAlign: "center",
    color: "black",
    marginTop: 15,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  logo: {
    width: 28,
    height: 28,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
  },
  signUpLink: {
    textDecorationLine: "underline",
    fontSize: 16,
    color: '#591815',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
