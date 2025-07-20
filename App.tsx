// App.tsx（ルートコンポーネント）
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import InputScreen from './src/screens/InputScreen';

// ルーティング設定
const Stack = createNativeStackNavigator();

// アプリ起動時はAuthへルーティング
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Authentication' }} />
        <Stack.Screen name="Input" component={InputScreen} options={{ title: 'Send Messages' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// npx @react-native-community/cli init (ファイル名) でプロジェクトを作成
// npx react-native start ローカルサーバーを立ち上げて実行
// npx react-native run-android エミュレータを立ち上げてAndroid Studioで実行
// npm install firebase と firebase.jsを作ってfirebaseプロジェクトと接続
// App.tsxがメインファイルとなる