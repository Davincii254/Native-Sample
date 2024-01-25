import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfoScreen = ({route}) => {
    const {campsites} = route.params;
    return <RenderCampsite campsite={campsites} />;
}
 export default CampsiteInfoScreen;