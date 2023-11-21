import React from 'react';
import { View, Text, Image } from 'react-native';

const profileData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam quis quam tristique semper.',
  image: require('./profile.jpg'),
};

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={profileData.image} style={{ width: 150, height: 150, borderRadius: 75 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>{profileData.name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{profileData.email}</Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>{profileData.bio}</Text>
    </View>
  );
}

export default ProfileScreen;
