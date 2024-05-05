import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          textAlign: "center",
          paddingTop: 60,
          fontWeight: "bold",
        }}
      >
        FAKESTORE.
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  price: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 14,
    fontWeight: "bold",
  },
  errorStyle: {
    color: "red",
    fontSize: 18,
  },
});
