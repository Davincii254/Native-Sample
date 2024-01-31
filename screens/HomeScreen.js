import { Text, View } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import CAMPSITES from "../shared/campste";
import PROMOTIONS from "../shared/promotions";
import PARTNERS from "../shared/partners";


const featuredItem = ({item}) => {
    if(item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source = {item.image}>
                    <View style={{justifyContent: 'center', flex:1}}>
                        <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}>
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text margin={{margin: 20}}>
                    {item.description}
                </Text>
            </Card>
        )
    }
    return <View/>
}
const HomeScreen = () => {
    const [campsite, useCampsite] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    const featCampsite = campsite.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);

    return (
        <ScrollView>
            <Featured item ={featCampsite} />
            <Featured item ={featPromotion} />
            <Featured item ={featPartner} />
        </ScrollView>
    )
}