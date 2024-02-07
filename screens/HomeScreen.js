import { Text, View } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import CAMPSITES from "../shared/campsite";
import PROMOTIONS from "../shared/promotions";
import PARTNERS from "../shared/partners";

console.log("CAMPSITES:", CAMPSITES);
console.log("PROMOTIONS:", PROMOTIONS);
console.log("PARTNERS:", PARTNERS);


const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    console.log("campsites:", campsites); // Log the campsites state
    const [promotions, setPromotions] = useState(PROMOTIONS);
    console.log("promotions:", promotions); // Log the promotions state
    const [partners, setPartners] = useState(PARTNERS);
    console.log("partners:", partners); // Log the partners state



    const featCampsite = campsites.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);

    return (
        <ScrollView>
        {featCampsite && <FeaturedItem item={featCampsite} />}
        {featPromotion && <FeaturedItem item={featPromotion} />}
        {featPartner && <FeaturedItem item={featPartner} />}
        </ScrollView>
    );
};

export default HomeScreen