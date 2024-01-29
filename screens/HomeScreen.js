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
            <Card>
                
            </Card>
        )
    }
}
const HomeScreen = () => {
    const [campsite, useCampsite] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);


    return (
        <ScrollView>

        </ScrollView>
    )
}