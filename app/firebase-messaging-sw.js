importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAKh79FEg_WAbyz2jBpPIptLMUPO4dKKp0',
  authDomain: 'plannintime.firebaseapp.com',
  projectId: 'plannintime',
  storageBucket: 'plannintime.firebasestorage.app',
  messagingSenderId: '228310434990',
  appId: '1:228310434990:web:e5165cd42aa5e90941993f'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Message reçu', payload);
  const title = payload.notification?.title || 'PLANNINTIME';
  const options = {
    body: payload.notification?.body || 'Nouvelle notification',
    icon: '/icons/Icon-192.png'
  };
  return self.registration.showNotification(title, options);
});