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
// npx react-native run-android エミュレータを立ち上げてAndroid Studioで実行（ローカルサーバーも立ち上がる）
// npm install firebase と firebase.jsを作ってfirebaseプロジェクトと接続

// React Nativeアプリの実機実装
// 開発者オプションのUSB経由インストールか、ビルドしたAPKを渡してデバイス側でインストールする
// JavaScriptのリリースバンドルを作ってから、./Android/gradlew assembleRelease によってAPKをビルドする
// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
// ファイルパスが長すぎるエラー ⇒ C直下等にtmpファイルを作ってプロジェクトをコピーしてAPKをビルドする
// ヘッダファイル読み込みなどのエラー => npx react-native run-android で一回ランしてみると解決するかも