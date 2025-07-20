// ユーザー認証画面
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { auth, db } from '../../firebase'; // firebase SDK のインポート
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { styles } from '../styles/styles';

export default function AuthScreen({ navigation }) {

  // 各ステートの管理
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) navigation.replace('Input'); // ログインしてたらInputへ遷移
    });
    return unsubscribe;
  }, []);

  // サインアップ（新規登録）処理
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setStatus('新規登録成功');
    } catch (error: any) {
      setStatus('新規登録失敗: ' + error.message);
    }
  };

　// Firebase Authenticationによるログイン処理
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus('ログイン成功');
    } catch (error: any) {
      setStatus('ログイン失敗: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Auth</Text>
      <TextInput
        style={styles.input}
        placeholder="メールアドレス"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="パスワード"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonRow}>
        <Button title="サインアップ" onPress={handleSignUp} />
        <Button title="ログイン" onPress={handleLogin} />
      </View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}
