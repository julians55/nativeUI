import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CardInformation = ({paragraphs,author,email,tags,comments}) => {
const paragraph = paragraphs.split(' ').splice(0,25).join(' ')
const butons=tags.splice(4)

  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
            style={styles.imageIn}
            source={{ uri: "https://www.lavanguardia.com/files/image_948_465/uploads/2020/06/29/5fa91c5e49c91.jpeg" }}
          />
      </View>
      <View style={styles.description}>
        <Text>{paragraph}</Text>
        <View>
          <Text style={styles.titleText}> Autor: {author}</Text>
          <Text style={styles.titleText}> Email: {email}</Text>
        </View>
        <View style={styles.buttons} >
          {butons.map((element)=>      
          <Button
            style={styles.buton}
            title={element}
         />
          )}
        </View>
        <View style={{flexDirection: "row"}}>
          <Text>{comments.length} Comentarios</Text>
        </View>
      </View>
    </View>
  )
}
export default CardInformation;

const styles = StyleSheet.create({
  card:{
    marginLeft: 7,
    padding: 5,
    width: '95%',
    height:200,
    backgroundColor:'gray',
    marginTop:'3%',
    flexDirection: "row",
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '100%',
  },
  imageIn: {
    marginLeft: 2,
    width: 100,
    height: 100,
  },
  description: {
    width: '60%',
    height: '100%',
    justifyContent:'space-evenly'
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttons:{
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  buton:{
    marginRight: 25,
  }
});