import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { TextInput } from 'react-native';

const Notify = () => {
  const [copied, setCopied] = useState(false);
  const [notificationid, setnotificationid] = useState('')

  // Function to handle copying the OTP
  const handleNotificationPress = async (otp) => {
    try {
      await Clipboard.setString(otp);
      setCopied(true); 
      await notifee.cancelAllNotifications(notificationid)
    } catch (error) {
      console.error('Error copying OTP:', error);
    }
  };

  // Define the OTP
  const OTP = '123456'; 

  // Function to display the notification
  const displayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

   const notification =  await notifee.displayNotification({
      title: 'OTP',
      body: `Your registration OTP for Usmania Blood Bank is ${OTP}`,
      android: {
        channelId: channelId,
        actions: [
          {
            title: copied ? 'Copied!' : 'Copy OTP', // Dynamically update button text
            pressAction: { id: 'copy-otp' },
          },
        ],
      },
    });

    setnotificationid(notification.id)

    // Handle background notification actions
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'copy-otp') {
        handleNotificationPress(OTP);
      }
    });
  };

  // Handle foreground notification actions
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(async ({ type, detail }) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'copy-otp') {
        handleNotificationPress(OTP);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title={'Display Notification'}
        onPress={() => {
          displayNotification();
          setCopied(false); 
        }}
      />
      <Text style={{ marginTop: 20 }}>{copied ? 'OTP Copied!' : ''}</Text>
      <TextInput 
        style={{ marginTop: 20, borderWidth: 1, borderColor: 'black', padding: 10 }}
      />
    </View>
  );
};

export default Notify;
