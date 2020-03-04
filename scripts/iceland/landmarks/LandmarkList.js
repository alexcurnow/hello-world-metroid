import { landmarkInfo } from "./LandmarkDataProvider.js"
import Landmark from "./Landmark.js"

const htmlTarget = document.querySelector(".landmarks__list")

const LandmarkList = () => {
    const landmarkObjectArray = landmarkInfo()

    for (const landmarkObject of landmarkObjectArray) {
        const landmarkHTML = Landmark(landmarkObject)

        htmlTarget.innerHTML += landmarkHTML
    }
}

export default LandmarkList