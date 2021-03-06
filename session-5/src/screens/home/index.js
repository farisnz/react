import React, {useEffect, useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const newArrival = gql`
query Category {
    categoryList(filters: { ids: { eq: "45" } }){
        id
        name
        description
        products{
            items{
                id
                name
                sku
                sale
                price_range{
                    maximum_price{
                      final_price {
                        value
                        currency
                      }
                    }
                }
                thumbnail{
                    url
                }
            }
        }
    }
}
`;

const Home = ({ navigation }) => {
  const query = useQuery(newArrival, {});
  
  if (query.loading) {
    return <Text>Loading...</Text>;
  }
  if (query.error) {
    return <Text>Error</Text>;
  }

  const categoryProductList = query.data.categoryList[0].products.items;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ScrollView horizontal>
          <Image
            style={styles.imgBanner}
            source={{
              uri: 'https://www.krisbow.com/media/weltpixel/owlcarouselslider/images/w/e/web-_1131-x592_.jpg',
            }}
          />
          <Image
            style={styles.imgBanner}
            source={{
              uri: 'https://www.krisbow.com/media/weltpixel/owlcarouselslider/images/w/e/web_1131_x592_.jpg',
            }}
          />
        </ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>New Arrival</Text>
          </View>
          <ScrollView>
            <View style={styles.productList}>
              {categoryProductList.map((val, index) => (
                  <View key={index} style={styles.productItem}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          sku: val.sku,
                        })
                      }>
                      <Image style={styles.imgProductList} source={{uri: val.thumbnail.url}} />
                      <View style={styles.productInfo}>
                        <Text style={styles.productItemName}>{val.name} </Text>
                        <Text style={styles.productItemPrice}>{`${
                        val.price_range.maximum_price.final_price.currency
                      } ${parseInt(
                        val.price_range.maximum_price.final_price.value,
                        10,
                      )}`}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </ScrollView>
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
    backgroundColor: 'white',
  },
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  cart: {
    fontSize: 16,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgBanner: {
    width: win.width,
    height: 350 * (win.width / 700),
    marginTop: 25,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: 'auto',
    marginBottom: 20,
    margin: 8,
    textAlign: "center",
  },
  productInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItemName: {
    fontSize: 12,
    width: 100,
    textAlign: "center",
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  imgProductList: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;