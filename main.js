import globus from './globus'


const points = [{
    start: 0,
    end: 10,
    fn: () => {
        globus.planet.flyTo({ latitude: 0, longitude: 0, altitude: 10000000 });
    }
}]

function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
window.onscroll = () => {
    // for (const chapterName in chapters) {
    //     if (isElementOnScreen(chapterName)) {
    //         setActiveChapter(chapterName);
    //         break;
    //     }
    // }
};