const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"EBookDisplay",


"invalid",
"DisplayWithPrice",


"invalid",
"DisplayWithImage",


"Home",
]))
