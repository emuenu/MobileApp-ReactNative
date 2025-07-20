// スタイルの設定
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
},
title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
},
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 30,
},
buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
status: {
    marginTop: 300,
    color: '#333',
    textAlign: 'center',
},
});