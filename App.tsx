import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Welcome to My Custom App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

// npx @react-native-community/cli init (ファイル名) でプロジェクトを作成
// npx react-native start ローカルサーバーを立ち上げて実行
// npx react-native run-android エミュレータを立ち上げてAndroid Studioで実行
// App.tsxがメインファイルとなる