import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Introduce = () => {
    return (
      <View style={styles.container}>
      <Image 
          source={require('../../assets/DySn.jpg')} 
          style={styles.image}
      />
            <Text style={styles.text}>Tên: Nguyễn Duy Sơn</Text>
            <Text style={styles.text}>MSSV: 21110290</Text>
            <Text style={styles.text}>Lớp: 21110CLST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',  
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
},
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',  
  },
});

export default Introduce;
