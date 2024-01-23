import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderCampsite = ({campsite}) => {
    if (campsite) {
        return (
            <card containerStyle= {{padding :0}}>
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
            </card>
        );
    }
    return <view/>
}

export default RenderCampsite;