// データベースへのメッセージ送信画面
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { styles } from '../styles/styles';

export default function InputScreen({ navigation }) {

  // 各ステートの管理
  const user = auth.currentUser;
  const [messageText, setMessageText] = useState('');
  const [status, setStatus] = useState('');

　// ログアウト処理
  const handleLogout = async () => {
    await signOut(auth);
    setStatus('ログアウトしました');
    navigation.replace('Auth'); // Authへ戻る
  };

　// データベースへのデータ追加処理
  const handleSendMessage = async () => {
    if (!user || !messageText.trim()) return;
    try {
      await addDoc(collection(db, 'messages'), {
        text: messageText,
        uid: user.email,
        createdAt: serverTimestamp(),
      });
      setMessageText('');
      setStatus('データ追加に成功しました');
    } catch (error: any) {
      console.error('送信エラー:', error);
      setStatus('データ追加に失敗しました');
    }
  };

  return (
    <View style={styles.container}>
      <Text>ログイン中: {user?.email}</Text>
      <Button title="ログアウト" onPress={handleLogout} />
      <TextInput
        style={styles.input}
        placeholder="メッセージを入力"
        value={messageText}
        onChangeText={setMessageText}
      />
      <Button title="送信" onPress={handleSendMessage} />
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}
