import React from "react";
import { ScrollView, Text } from "react-native";
import axios from "axios";

import Album from "./Album";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(resp => {
        this.setState({ albums: resp.data })
    }).catch((err: Error) => {
        debugger;
    });
  }

  render() {
    return (
      <ScrollView style={{ paddingBottom: 40 }}>
        {!this.state.albums.length ? <Text>Loading...</Text> : (
            this.state.albums.map(album => <Album key={album.title} album={album} />)
        )}
      </ScrollView>
    );
  }
}

export default AlbumList;