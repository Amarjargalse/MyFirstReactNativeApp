import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Moviecard from "./Moviecard";

const Movie = () => {
  const movieList = [
    {
      img: require("./assets/imageMovie1.jpg"),
      h1: "Avengers",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.",
    },
    {
      img: require("./assets/imageMovie2.jpg"),
      h1: "Thors: Love & Thunder",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.",
    },
    {
      img: require("./assets/imageMovie3.jpg"),
      h1: "IRON MAN 3",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.",
    },
    {
      img: require("./assets/imageMovie4.jpg"),
      h1: "Spider Man: Spider Verse",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: "space-arounds",
        alignItems: "center",
      }}
      horizontal={true}
      pagingEnabled
    >
      {movieList.map((mlist) => (
        <Moviecard img={mlist.img} h1={mlist.h1} p={mlist.p} />
      ))}
      {/* <View style={styles.movieCard}>
                <Image 
                style={styles.image}
                source={require('./assets/imageMovie1.jpg')}
                />  
                <Text style={styles.h1}>Avengers</Text>
                <Text style={styles.p}>{Movielist.p}</Text>
            </View>
            <View style={styles.movieCard}>
                <Image 
                style={styles.image}
                source={require('./assets/imageMovie2.jpg')}
                />  
                <Text style={styles.h1}>Thors: Love & Thunder</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.</Text>
            </View>
            <View style={styles.movieCard}>
                <Image 
                style={styles.image}
                source={require('./assets/imageMovie3.jpg')}
                />  
                <Text style={styles.h1}>IRON MAN 3</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.</Text>
            </View>
            <View style={styles.movieCard}>
                <Image 
                style={styles.image}
                source={require('./assets/imageMovie4.jpg')}
                />  
                <Text style={styles.h1}>Spider Man: Spider Verse</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta accusamus officia! Assumenda non autem labore magni vitae ratione explicabo alias tempore, aspernatur corporis numquam maxime, atque optio perspiciatis modi.</Text>
            </View> */}
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: 900,
  },
});
