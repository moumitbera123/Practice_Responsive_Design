import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import styles from './style';
import Colors from '../../Styles/Colors';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [numColumns, setNumColumns] = useState(2);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.img} resizeMode='contain' />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.titlecontainer}>
                <Text style={styles.header}>Products</Text>
                </View>
                
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={Colors.ThemeColor} />
                    </View>
                ) : error ? (
                    <Text style={styles.errorText}>Error: {error}</Text>
                ) : (
                    <FlatList
                        key={numColumns}
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns}
                        columnWrapperStyle={styles.row}
                    />
                )}
            </SafeAreaView>
        </View>
    );
};



export default Product;
