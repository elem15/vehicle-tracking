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
          headerTitle: `${t('settings')}`
        }}></Stack.Screen>
      <View style={styles.container}>
        <Text style={styles.title}>{t('Select')}</Text>
        <View style={styles.horizontalContainer}>
          <TouchableOpacity onPress={() => changeLanguageHandler('ru')}>
            <Text style={{ ...commonStyles.button, backgroundColor: 'red' }}>{t('Russian')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguageHandler('en')}>
            <Text style={commonStyles.button}>{t('English')}</Text>
          </TouchableOpacity>
        </View>
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
  horizontalContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
