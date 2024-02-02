import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderCampsite = (props) => {
    const {campsite} = props;
    if (campsite) {
        return (
            <card containerStyle= {styles.CardContainer}>
                <Card.Image source ={campsite.image}>
                    <View style={{justifyContent: 'center', flex:1}}>
                        <Text style ={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                        ></Text>
                    </View>
                </Card.Image>
                <Text style = {{margin : 20}}>{campsite.description}</Text>
                <Icon
                    name = {props.isFavorite ? 'heart' : 'heart-o'}
                    type = 'font-awesome'
                    color= '#f50'
                    raised
                    reverse
                    onPress={() => props.isFavorite
                        ? console.log('Already a Favorite')
                        :props.markFavorite()}
                />
            </card>
        );
    }
    return <view/>;
};

const styles = StyleSheet.create({
    CardContainer:{
        padding: 0,
        marging: 0,
        marginBottom: 20
    }
})

export default RenderCampsite;