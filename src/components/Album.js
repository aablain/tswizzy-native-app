import React from "react";
import { Image, Linking, Text, View } from "react-native";

import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";

// Album {
//     artist: string;
//     image: string;
//     thumbnail_image: string;
//     title: string;
//     url: string;
// }

const Album = (props) => {
  const { albumImageStyles, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, viewStyle } = styles;
  const { artist, image, title, thumbnail_image, url } = props.album;

  return (
    <Card style={viewStyle}>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image source={{ uri: image }} style={albumImageStyles} />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(url)} text={title}>
                <Text>Buy Now</Text>
            </Button>
        </CardSection>
    </Card>
  );
}

const styles = {
    albumImageStyles: {
        height: 300,
        flex: 1,
        width: null
    },
    cardStyle: {
        width: "100%"
    },
    headerContentStyle: {
        paddingLeft: 10,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    }
}

export default Album;