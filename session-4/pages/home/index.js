import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Group,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../../data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imgBanner}
          source={{
            uri: 'https://www.krisbow.com/media/weltpixel/owlcarouselslider/images/w/e/web-_1131-x592_.jpg',
          }}
        />
        <View style={styles.main}>
          <View style={styles.productList}>
            {DummyProducts.map((val, index) => (
              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', {
                      productId: val.id,
                    })
                  }>
                  <Image style={styles.productImg} source={{
                    uri: val.img,
                  }} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{val.name}</Text>
                    <Text style={styles.productPrice}>{val.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',
  },
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  imgBanner: {
    width: win.width,
    height: 200,
    marginTop: 25,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
       
  },
  productItem: {
    width: 'auto',
    margin: 10,
    textAlign: "center"
  },
  productInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
  },
  productImg: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;
