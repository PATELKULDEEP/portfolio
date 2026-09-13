import React, { useState } from "react";
import {
    Map,
    Marker,
    Popup,
    Source,
    Layer,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
} from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";
import "./TravelStyle.css";

/* =========================================================
   MAP CONFIG
========================================================= */

const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

const INDIA_STATES = `${process.env.PUBLIC_URL}/maps/india-states-simplified.geojson`;

/*
 * India viewport.
 *
 * maxBounds prevents the map from wandering too far away
 * and becoming an empty screen after zooming/panning.
 */
const INDIA_BOUNDS = [
    [66, 5],
    [101, 38],
];

/* =========================================================
   PLACES
========================================================= */

const PLACES = [
    /* ---------- MAJOR CITIES / PLACES ---------- */

    {
        name: "Mumbai",
        state: "Maharashtra",
        type: "place",
        coordinates: [72.8777, 19.076],
    },
    {
        name: "Delhi",
        state: "Delhi",
        type: "place",
        coordinates: [77.1025, 28.7041],
    },
    {
        name: "Manali",
        state: "Himachal Pradesh",
        type: "place",
        coordinates: [77.1892, 32.2396],
    },
    {
        name: "Prayagraj",
        state: "Uttar Pradesh",
        type: "place",
        coordinates: [81.8463, 25.4358],
    },
    {
        name: "Puri",
        state: "Odisha",
        type: "place",
        coordinates: [85.8315, 19.8135],
    },
    {
        name: "Bhubaneswar",
        state: "Odisha",
        type: "place",
        coordinates: [85.8245, 20.2961],
    },
    {
        name: "Indore",
        state: "Madhya Pradesh",
        type: "place",
        coordinates: [75.8577, 22.7196],
    },
    {
        name: "Raipur",
        state: "Chhattisgarh",
        type: "place",
        coordinates: [81.6296, 21.2514],
    },
    {
        name: "Bastar",
        state: "Chhattisgarh",
        type: "place",
        coordinates: [81.9496, 19.1071],
    },
    {
        name: "Amarkantak",
        state: "Madhya Pradesh",
        type: "place",
        coordinates: [81.7597, 22.674],
    },
    {
        name: "Bengaluru",
        state: "Karnataka",
        type: "place",
        coordinates: [77.5946, 12.9716],
    },
    {
        name: "Hyderabad",
        state: "Telangana",
        type: "place",
        coordinates: [78.4867, 17.385],
    },
    {
        name: "Varkala",
        state: "Kerala",
        type: "place",
        coordinates: [76.7067, 8.7379],
    },
    {
        name: "Kanyakumari",
        state: "Tamil Nadu",
        type: "place",
        coordinates: [77.5385, 8.0883],
    },
    {
        name: "Rameshwaram",
        state: "Tamil Nadu",
        type: "place",
        coordinates: [79.3129, 9.2876],
    },
    {
        name: "Madurai",
        state: "Tamil Nadu",
        type: "place",
        coordinates: [78.1198, 9.9252],
    },
    {
        name: "Dhanushkodi",
        state: "Tamil Nadu",
        type: "place",
        coordinates: [79.312, 9.174],
    },
    {
        name: "Kodaikanal",
        state: "Tamil Nadu",
        type: "place",
        coordinates: [77.4892, 10.2381],
    },

    /* ---------- GUJARAT ---------- */

    {
        name: "Somnath",
        state: "Gujarat",
        type: "pilgrimage",
        jyotirlinga: true,
        coordinates: [70.4012, 20.888],
    },
    {
        name: "Dwarka",
        state: "Gujarat",
        type: "pilgrimage",
        coordinates: [68.9678, 22.2442],
    },
    {
        name: "Nageshwar",
        state: "Gujarat",
        type: "jyotirlinga",
        coordinates: [69.1125, 22.3364],
    },
    {
        name: "Statue of Unity",
        state: "Gujarat",
        type: "place",
        coordinates: [73.7191, 21.838],
    },
    {
        name: "Vadodara",
        state: "Gujarat",
        type: "place",
        coordinates: [73.1812, 22.3072],
    },

    /* ---------- PILGRIMAGE ---------- */

    {
        name: "Yamunotri",
        state: "Uttarakhand",
        type: "charDham",
        coordinates: [78.457, 31.014],
    },
    {
        name: "Gangotri",
        state: "Uttarakhand",
        type: "charDham",
        coordinates: [78.941, 30.994],
    },
    {
        name: "Kedarnath",
        state: "Uttarakhand",
        type: "charDham",
        jyotirlinga: true,
        coordinates: [79.0669, 30.7346],
    },
    {
        name: "Badrinath",
        state: "Uttarakhand",
        type: "charDham",
        coordinates: [79.4938, 30.7433],
    },
    {
        name: "Mallikarjuna",
        state: "Andhra Pradesh",
        type: "jyotirlinga",
        coordinates: [78.868, 16.072],
    },
    {
        name: "Mahakaleshwar",
        state: "Madhya Pradesh",
        type: "jyotirlinga",
        coordinates: [75.7687, 23.1828],
    },
    {
        name: "Omkareshwar",
        state: "Madhya Pradesh",
        type: "jyotirlinga",
        coordinates: [76.1501, 22.2426],
    },
    {
        name: "Bhimashankar",
        state: "Maharashtra",
        type: "jyotirlinga",
        coordinates: [73.531, 19.0728],
    },
    {
        name: "Trimbakeshwar",
        state: "Maharashtra",
        type: "jyotirlinga",
        coordinates: [73.529, 19.932],
    },
    {
        name: "Grishneshwar",
        state: "Maharashtra",
        type: "jyotirlinga",
        coordinates: [75.4777, 20.0268],
    },

    /* ---------- SHIRDI ---------- */

    {
        name: "Shirdi",
        state: "Maharashtra",
        type: "pilgrimage",
        coordinates: [74.4776, 19.7669],
    },

    /* ---------- OTHER IMPORTANT PLACES ---------- */

    {
        name: "Nagpur",
        state: "Maharashtra",
        type: "place",
        coordinates: [79.0882, 21.1458],
    },
];

/* =========================================================
   JOURNEY
========================================================= */

const ROAD_TRIP = [
    {
        name: "Raipur",
        state: "Chhattisgarh",
        coordinates: [81.6296, 21.2514],
    },
    {
        name: "Grishneshwar",
        state: "Maharashtra",
        coordinates: [75.4777, 20.0268],
    },
    {
        name: "Shirdi",
        state: "Maharashtra",
        coordinates: [74.4776, 19.7669],
    },
    {
        name: "Bhimashankar",
        state: "Maharashtra",
        coordinates: [73.531, 19.0728],
    },
    {
        name: "Trimbakeshwar",
        state: "Maharashtra",
        coordinates: [73.529, 19.932],
    },
    {
        name: "Statue of Unity",
        state: "Gujarat",
        coordinates: [73.7191, 21.838],
    },
    {
        name: "Vadodara",
        state: "Gujarat",
        coordinates: [73.1812, 22.3072],
    },
    {
        name: "Somnath",
        state: "Gujarat",
        coordinates: [70.4012, 20.888],
    },
    {
        name: "Dwarka",
        state: "Gujarat",
        coordinates: [68.9678, 22.2442],
    },
    {
        name: "Nageshwar",
        state: "Gujarat",
        coordinates: [69.1125, 22.3364],
    },
    {
        name: "Indore",
        state: "Madhya Pradesh",
        coordinates: [75.8577, 22.7196],
    },
    {
        name: "Nagpur",
        state: "Maharashtra",
        coordinates: [79.0882, 21.1458],
    },
    {
        name: "Raipur",
        state: "Chhattisgarh",
        coordinates: [81.6296, 21.2514],
    },
];

/* Convert journey points into GeoJSON line */

const ROAD_TRIP_LINE = {
    type: "Feature",
    geometry: {
        type: "LineString",
        coordinates: ROAD_TRIP.map((place) => place.coordinates),
    },
};

/* =========================================================
   LAYERS
========================================================= */

const stateFillLayer = {
    id: "india-state-fill",
    type: "fill",
    paint: {
        "fill-color": "#252A3B",
        "fill-opacity": 0.55,
    },
};

const stateBorderLayer = {
    id: "india-state-border",
    type: "line",
    paint: {
        "line-color": "#777E96",
        "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            0.7,
            5,
            1.2,
            7,
            1.8,
        ],
        "line-opacity": 0.75,
    },
};

const stateLabelLayer = {
    id: "india-state-labels",
    type: "symbol",
    layout: {
        "text-field": [
            "coalesce",
            ["get", "ST_NM"],
            ["get", "ST_NAME"],
            ["get", "NAME_1"],
            ["get", "NAME"],
            ["get", "name"],
            "",
        ],
        "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            9,
            5,
            11,
            7,
            13,
        ],
        "text-font": ["Open Sans Regular"],
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "symbol-placement": "point",
    },
    paint: {
        "text-color": "#AAB1C5",
        "text-halo-color": "#171A25",
        "text-halo-width": 1.5,
        "text-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            3,
            0.65,
            4,
            0.9,
        ],
    },
};

const roadTripLineLayer = {
    id: "road-trip-line",
    type: "line",
    paint: {
        "line-color": "#E5B85C",
        "line-width": 4,
        "line-opacity": 0.95,
        "line-dasharray": [1, 1.5],
    },
};

/* =========================================================
   HELPERS
========================================================= */

const getTypeLabel = (place) => {
    if (place.jyotirlinga) {
        return "Jyotirlinga";
    }

    if (place.type === "charDham") {
        return "Char Dham";
    }

    if (place.type === "pilgrimage") {
        return "Pilgrimage";
    }

    return "Place";
};

const getTypeClass = (place) => {
    if (place.jyotirlinga) {
        return "jyotirlinga";
    }

    if (place.type === "charDham") {
        return "char-dham";
    }

    if (place.type === "pilgrimage") {
        return "pilgrimage";
    }

    return "place";
};

/* =========================================================
   COMPONENT
========================================================= */

const Travel = () => {
    const [view, setView] = useState("places");
    const [selectedPlace, setSelectedPlace] = useState(null);

    const placesCount = 33;
    const statesCount = 14;

    const handleMarkerClick = (place) => {
        setSelectedPlace(place);
    };

    return (
        <div className="travel-page">

            {/* =================================================
                HEADER
            ================================================= */}

            <section className="travel-header">

                <div className="travel-eyebrow">
                    <span className="travel-eyebrow-dot" />
                    PERSONAL TRAVEL MAP
                </div>

                <h1>
                    Places I've <span>explored</span>
                </h1>

                <p>
                    A visual collection of the places, pilgrimages
                    and journeys I've experienced.
                </p>

                {/* TOP STATS */}

                <div className="travel-stats">

                    <div className="travel-stat">
                        <strong>{placesCount}+</strong>
                        <span>PLACES</span>
                    </div>

                    <div className="travel-stat">
                        <strong>{statesCount}</strong>
                        <span>STATES / UTs</span>
                    </div>

                </div>

            </section>

            {/* =================================================
                VIEW TOGGLE
            ================================================= */}

            <div className="travel-toggle">

                <button
                    className={view === "places" ? "active" : ""}
                    onClick={() => {
                        setView("places");
                        setSelectedPlace(null);
                    }}
                >
                    ✦ Places
                </button>

                <button
                    className={view === "journeys" ? "active" : ""}
                    onClick={() => {
                        setView("journeys");
                        setSelectedPlace(null);
                    }}
                >
                    ↝ Journeys
                </button>

            </div>

            {/* =================================================
                MAP CARD
            ================================================= */}

            <section className="travel-map-card">

                <div className="travel-map-header">

                    <div className="travel-map-title">
                        <span className="travel-live-dot" />

                        {view === "places"
                            ? "Places I've explored"
                            : "Follow my journeys"}
                    </div>

                    <div className="travel-map-hint">
                        {view === "places"
                            ? "Hover a marker • Click for details"
                            : "A memorable road trip"}
                    </div>

                </div>

                <div className="travel-map">

                    <Map
                        initialViewState={{
                            longitude: 78.9,
                            latitude: 22.4,
                            zoom: 4.2,
                        }}

                        mapStyle={MAP_STYLE}

                        minZoom={3.7}
                        maxZoom={9}

                        maxBounds={INDIA_BOUNDS}

                        renderWorldCopies={false}

                        dragRotate={false}
                        touchPitch={false}

                        scrollZoom={true}
                        doubleClickZoom={true}
                        dragPan={true}
                        touchZoomRotate={true}

                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >

                        {/* =================================================
                            STATE BOUNDARIES
                        ================================================= */}

                        <Source
                            id="india-states"
                            type="geojson"
                            data={INDIA_STATES}
                        >

                            <Layer {...stateFillLayer} />

                            <Layer {...stateBorderLayer} />

                            <Layer {...stateLabelLayer} />

                        </Source>

                        {/* =================================================
                            PLACES VIEW
                        ================================================= */}

                        {view === "places" &&
                            PLACES.map((place) => (

                                <Marker
                                    key={`${place.name}-${place.state}`}
                                    longitude={place.coordinates[0]}
                                    latitude={place.coordinates[1]}
                                    anchor="center"
                                >

                                    <button
                                        type="button"
                                        className={`travel-marker ${getTypeClass(place)}`}
                                        onClick={() =>
                                            handleMarkerClick(place)
                                        }
                                        aria-label={place.name}
                                    >

                                        <span className="marker-core" />

                                        <span className="marker-tooltip">

                                            <strong>
                                                {place.name}
                                            </strong>

                                            <small>
                                                {place.state}
                                            </small>

                                        </span>

                                    </button>

                                </Marker>

                            ))}

                        {/* =================================================
                            JOURNEY VIEW
                        ================================================= */}

                        {view === "journeys" && (

                            <>

                                <Source
                                    id="road-trip"
                                    type="geojson"
                                    data={ROAD_TRIP_LINE}
                                >

                                    <Layer {...roadTripLineLayer} />

                                </Source>

                                {ROAD_TRIP.map(
                                    (place, index) => (

                                        <Marker
                                            key={`${place.name}-${index}`}
                                            longitude={
                                                place.coordinates[0]
                                            }
                                            latitude={
                                                place.coordinates[1]
                                            }
                                            anchor="center"
                                        >

                                            <div className="journey-marker">

                                                <span>
                                                    {index + 1}
                                                </span>

                                                <div className="journey-marker-tooltip">

                                                    <strong>
                                                        {place.name}
                                                    </strong>

                                                    <small>
                                                        {place.state}
                                                    </small>

                                                </div>

                                            </div>

                                        </Marker>

                                    )
                                )}

                            </>

                        )}

                        {/* =================================================
                            POPUP
                        ================================================= */}

                        {selectedPlace && view === "places" && (

                            <Popup
                                longitude={
                                    selectedPlace.coordinates[0]
                                }
                                latitude={
                                    selectedPlace.coordinates[1]
                                }
                                anchor="bottom"
                                closeOnClick={false}
                                closeOnMove={false}
                                onClose={() =>
                                    setSelectedPlace(null)
                                }
                                maxWidth="260px"
                            >

                                <div className="place-popup">

                                    <div
                                        className={`popup-type ${getTypeClass(
                                            selectedPlace
                                        )}`}
                                    >
                                        {getTypeLabel(selectedPlace)}
                                    </div>

                                    <h3>
                                        {selectedPlace.name}
                                    </h3>

                                    <p>
                                        {selectedPlace.state}
                                    </p>

                                    {selectedPlace.jyotirlinga && (
                                        <div className="popup-badge">
                                            ✦ One of the 10
                                            Jyotirlingas visited
                                        </div>
                                    )}

                                    {selectedPlace.type ===
                                        "charDham" && (
                                        <div className="popup-badge">
                                            ✦ Part of the Char Dham
                                        </div>
                                    )}

                                </div>

                            </Popup>

                        )}

                        {/* =================================================
                            MAP CONTROLS
                        ================================================= */}

                        <NavigationControl
                            position="bottom-right"
                            showCompass={false}
                        />

                        <FullscreenControl
                            position="bottom-right"
                        />

                        <ScaleControl
                            position="bottom-left"
                        />

                    </Map>

                    {/* =================================================
                        MAP LEGEND
                    ================================================= */}

                    <div className="travel-map-legend">

                        <div className="legend-title">
                            MAP LEGEND
                        </div>

                        <div className="legend-item">
                            <span className="legend-dot place" />
                            Place
                        </div>

                        <div className="legend-item">
                            <span className="legend-dot pilgrimage" />
                            Pilgrimage
                        </div>

                        <div className="legend-item">
                            <span className="legend-dot char-dham" />
                            Char Dham
                        </div>

                        <div className="legend-item">
                            <span className="legend-dot jyotirlinga" />
                            Jyotirlinga
                        </div>

                    </div>

                </div>

            </section>

            {/* =================================================
                JOURNEY INFORMATION
            ================================================= */}

            {view === "journeys" && (

                <section className="journey-section">

                    <div className="journey-card">

                        <div className="journey-card-top">

                            <div>

                                <span className="journey-label">
                                    MEMORABLE ROAD TRIP
                                </span>

                                <h2>
                                    Raipur → Maharashtra →
                                    Gujarat → MP → Raipur
                                </h2>

                            </div>

                            <div className="journey-distance">
                                ROAD TRIP
                            </div>

                        </div>

                        <p>
                            A multi-day road journey covering
                            Grishneshwar, Shirdi, Bhimashankar,
                            Trimbakeshwar, Statue of Unity,
                            Vadodara, Somnath, Dwarka, Nageshwar,
                            Indore and Nagpur.
                        </p>

                        <div className="journey-route-list">

                            {ROAD_TRIP.slice(0, -1).map(
                                (place, index) => (

                                    <div
                                        className="route-stop"
                                        key={`${place.name}-${index}`}
                                    >

                                        <span>
                                            {index + 1}
                                        </span>

                                        <div>
                                            <strong>
                                                {place.name}
                                            </strong>

                                            <small>
                                                {place.state}
                                            </small>
                                        </div>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                    {/* NEXT JOURNEY */}

                    <div className="planned-journey">

                        <div className="planned-icon">
                            ↗
                        </div>

                        <div>

                            <span>
                                NEXT PLANNED JOURNEY
                            </span>

                            <strong>
                                Pondicherry
                            </strong>

                        </div>

                        <div className="planned-status">
                            PLANNED
                        </div>

                    </div>

                </section>

            )}

            {/* =================================================
                ACHIEVEMENTS
            ================================================= */}

            <section className="travel-achievements">

                <div className="achievement-card">

                    <strong>10 / 12</strong>

                    <span>
                        JYOTIRLINGAS
                    </span>

                </div>

                <div className="achievement-card">

                    <strong>4 / 4</strong>

                    <span>
                        CHAR DHAM
                    </span>

                </div>

            </section>

            <div className="travel-footer-note">
                More places, journeys and memories will be added over time.
            </div>

        </div>
    );
};

export default Travel;