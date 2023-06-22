import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/index.style';

export default function ModalScreen() {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'settings'
        }}></Stack.Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Select language</Text>
        <Text>{t('Welcome to React')}</Text>
        <TouchableOpacity onPress={() => changeLanguageHandler('ru')}>
          <Text style={commonStyles.button}>Russian</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
