import { FlatList, StyleSheet, TextInput, View } from "react-native-gesture-handler";
import RenderCampsite from "../features/campsites/RenderCampsite";
import COMMENTS from "../shared/comments";
import { Card, Text } from 'react-native-elements';



const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);

    const renderCommentItem = ({item}) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{fontSizze: 14}} >{item.text}</Text>
                <Text style={{fontSizze: 12}} >{item.rating} Stars</Text>
                <Text style={{fontSizze: 12}}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };


    return (
        <FlatList 
        data= {comments.filter(
            (comment) => comment.campsiteId === campsiteId
        )}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle= {{
            marginHorizontal: 20,
            paddingVertical: 20
        }}
        ListHeaderComponent={
            <>
            <RenderCampsite
            campsite={campsite}
            isFavorited={favorite}
            markFavorite= {() => setFavorite(true)}
            />
            <Text style={styles.commentsTitle}>Comments</Text>
            </>
        }
        />
    )
};
// const styles = StyleSheet.create({
//     commentsTitle: {
//         textAlign: 'center',
//         backgroundColor: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#43484D',
//         padding: 10,
//         paddingTop: 30
//     },
//     commentItem: {
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         backgroundColor: '#fff'
//     }
// });

export default CampsiteInfoScreen;
