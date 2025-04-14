/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../../styles/globalSyles';
import { TextInput } from 'react-native-gesture-handler';

export default function Login(){

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.LoginContainer}>
                <Text style={globalStyles.title}>Bienvenido</Text>
                <View style={globalStyles.inputText}>
                    <TextInput placeholder='micorreo@mail.com' style={{paddingHorizontal:15}}/>
                </View>
                <View style={globalStyles.inputText}>
                    <TextInput placeholder='Contraseña' style={{paddingHorizontal:15}}/>
                </View>
                <TouchableOpacity style={globalStyles.addButton}>
                    <Text style={globalStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
