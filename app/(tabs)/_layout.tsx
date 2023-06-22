import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, ColorSchemeName } from 'react-native';

import Colors from '../../constants/Colors';
import { useTranslation } from 'react-i18next';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const headerRight = (colorScheme: ColorSchemeName) => (
  <Link href="/modal" asChild>
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          name="language"
          title="settings"
          size={25}
          color={Colors[colorScheme ?? 'light'].text}
          style={{
            marginRight: 15,
            opacity: pressed ? 0.5 : 1
          }}
        />
      )}
    </Pressable>
  </Link>
);

export default function TabLayout() {
  const colorScheme: ColorSchemeName = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: `${t('Vehicles')}`,
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
          headerRight: () => headerRight(colorScheme)
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: `${t('Map')}`,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          headerRight: () => headerRight(colorScheme)
        }}
      />
    </Tabs>
  );
}
