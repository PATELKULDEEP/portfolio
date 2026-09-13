import React, { useEffect, useRef, useState } from "react";

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

import Header from "../HeaderComponent/Header";

/* =========================================================
   MAP CONFIG
========================================================= */

/*
 * We are intentionally using a lightweight raster basemap
 * instead of depending on an external vector style.
 *
 * Benefits:
 * - Classic, colorful street-map appearance
 * - Blue oceans and readable geography
 * - Roads, cities and rivers
 * - No API key
 * - Works with MapLibre
 */
const MAP_STYLE = {
    version: 8,

    sources: {
        "osm-raster": {
            type: "raster",
            tiles: [
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
            attribution:
                "© Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, and the GIS User Community",
        },
    },

    layers: [
        {
            id: "osm-background",
            type: "background",
            paint: {
                "background-color": "#dcebf2",
            },
        },
        {
            id: "osm-raster-layer",
            type: "raster",
            source: "osm-raster",
            minzoom: 0,
            maxzoom: 19,
            paint: {
                "raster-opacity": 1,
                "raster-fade-duration": 0,
            },
        },
    ],
};

/*
 * IMPORTANT:
 *
 * This must be a STATE-level GeoJSON.
 *
 * File:
 *
 * public/maps/india-states-simplified.geojson
 */
const INDIA_STATES =
    `${process.env.PUBLIC_URL}/maps/india-states-simplified.geojson`;

/*
 * Initial area we want visible.
 *
 * Slightly wider than India so the Arabian Sea,
 * Bay of Bengal and surrounding geography are visible.
 */
const INDIA_FIT_BOUNDS = [
    [67, 6],
    [99, 36],
];

/*
 * Maximum area the user can pan around.
 *
 * This prevents the map from becoming completely empty
 * if the user drags very far away.
 */
const INDIA_MAX_BOUNDS = [
    [58, -5],
    [108, 42],
];

/* =========================================================
   PLACES
========================================================= */

const PLACES = [
    /* ---------- MAJOR PLACES ---------- */

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
        type: "pilgrimage",
        coordinates: [81.8463, 25.4358],
    },

    {
        name: "Puri",
        state: "Odisha",
        type: "pilgrimage",
        coordinates: [85.8315, 19.8135],
    },

    {
        name: "Bhubaneswar",
        state: "Odisha",
        type: "pilgrimage",
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
        name: "Rajim",
        state: "Chhattisgarh",
        type: "pilgrimage",
        coordinates: [81.8796, 20.9617],
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
        type: "pilgrimage",
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
        type: "pilgrimage",
        coordinates: [77.5385, 8.0883],
    },

    {
        name: "Rameshwaram",
        state: "Tamil Nadu",
        type: "pilgrimage",
        jyotirlinga: true,
        coordinates: [79.3129, 9.2876],
    },

    {
        name: "Madurai",
        state: "Tamil Nadu",
        type: "pilgrimage",
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

    /* ---------- CHAR DHAM ---------- */

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

    /* ---------- JYOTIRLINGAS ---------- */

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

    /* ---------- OTHER PILGRIMAGE ---------- */

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
   MEMORABLE ROAD TRIP
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

const ROAD_TRIP_LINE = {
    type: "Feature",
    geometry: {
        type: "LineString",
        coordinates: ROAD_TRIP.map(
            (place) => place.coordinates
        ),
    },
};

const TRAVEL_TIMELINE = [
    {
        year: "1998",
        date: "December",
        title: "Where it all began",
        description: "Born in Rajim, Chhattisgarh, at the confluence of three rivers.",
        stops: ["Rajim"],
        origin: true,
    },
    {
        year: "2019",
        title: "First city escape",
        description: "Mumbai was the beginning of the travel story.",
        stops: ["Mumbai"],
    },
    {
        year: "2020",
        title: "Mountains calling",
        description: "A first visit to the mountain landscapes of Manali.",
        stops: ["Manali"],
    },
    {
        year: "2021",
        title: "Sacred confluence",
        description: "Prayagraj became the journey's next meaningful stop.",
        stops: ["Prayagraj"],
    },
    {
        year: "2022",
        title: "Temple towns of Odisha",
        description: "Puri and Bhubaneswar in one memorable coastal journey.",
        stops: ["Puri", "Bhubaneswar"],
    },
    {
        year: "2023",
        title: "The southern coast",
        description: "A wide southern circuit from Bengaluru to Dhanushkodi.",
        stops: [
            "Rameshwaram",
            "Kanyakumari",
            "Dhanushkodi",
            "Madurai",
            "Bengaluru",
        ],
    },
    {
        year: "2024",
        title: "Char Dham pilgrimage",
        description: "A pilgrimage through Kedarnath, Badrinath, Yamunotri and Gangotri.",
        stops: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri"],
    },
    {
        year: "2025",
        title: "Western India road trip",
        description: "A multi-day road journey through Maharashtra, Gujarat and Madhya Pradesh.",
        stops: ROAD_TRIP.map((place) => place.name),
        featured: true,
    },
    {
        year: "2026",
        title: "Kerala and the hills",
        description: "Varkala and Kodaikanal are next on the map.",
        stops: ["Varkala", "Kodaikanal"],
    },
];

/* =========================================================
   STATE LAYERS
========================================================= */

const stateFillLayer = {
    id: "india-state-fill",
    type: "fill",

    paint: {
        /*
         * Very subtle so the real map remains visible.
         */
        "fill-color": "#D6B36A",
        "fill-opacity": 0.055,
    },
};

const stateBorderLayer = {
    id: "india-state-border",
    type: "line",

    paint: {
        "line-color": "#6F6670",

        "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],

            2,
            0.8,

            3,
            1.0,

            4,
            1.25,

            6,
            1.8,

            9,
            2.3,
        ],

        "line-opacity": 0.78,
    },
};

/*
 * State names are visible directly on the map.
 *
 * We deliberately allow overlap because you specifically
 * wanted to know which state is which without hovering.
 */
const stateLabelLayer = {
    id: "india-state-labels",
    type: "symbol",

    layout: {
        "text-field": [
            "coalesce",
            ["get", "ST_NM"],
            ["get", "ST_NAME"],
            ["get", "State_Name"],
            ["get", "NAME_1"],
            ["get", "NAME"],
            ["get", "name"],
            ["get", "st_nm"],
            "",
        ],

        "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],

            2,
            8,

            3,
            9,

            4,
            10,

            6,
            12,

            9,
            14,
        ],

        "text-font": [
            "Open Sans Regular",
        ],

        "text-anchor": "center",

        "text-allow-overlap": true,

        "text-ignore-placement": true,

        "symbol-placement": "point",
    },

    paint: {
        "text-color": "#4F4A52",

        "text-halo-color": "#FFFFFF",

        "text-halo-width": 1.8,

        "text-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],

            2,
            0.72,

            3,
            0.82,

            5,
            0.95,
        ],
    },
};

/* =========================================================
   ROAD TRIP LAYER
========================================================= */

const roadTripLineLayer = {
    id: "road-trip-line",

    type: "line",

    paint: {
        "line-color": "#D88436",

        "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],

            2,
            3,

            4,
            4,

            6,
            4,

            9,
            5,
        ],

        "line-opacity": 1,

        "line-cap": "round",

        "line-join": "round",
    },
};

const roadTripCasingLayer = {
    id: "road-trip-casing",

    type: "line",

    paint: {
        "line-color": "#FFFFFF",
        "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            2,
            6,
            4,
            8,
            6,
            10,
            9,
            12,
        ],
        "line-opacity": 0.88,
        "line-cap": "round",
        "line-join": "round",
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
    const mapRef = useRef(null);

    const [view, setView] = useState("places");

    const [selectedTimelineYear, setSelectedTimelineYear] =
        useState("2025");

    const [selectedPlace, setSelectedPlace] =
        useState(null);

    const [selectedJourneyStop, setSelectedJourneyStop] =
        useState(null);

    const selectedTimeline = TRAVEL_TIMELINE.find(
        (journey) => journey.year === selectedTimelineYear
    );

    const selectedTimelinePlaces = selectedTimeline.stops
        .map((name) => PLACES.find((place) => place.name === name))
        .filter(Boolean);

    const selectedJourneyPlaces = selectedTimeline.featured
        ? ROAD_TRIP
        : selectedTimelinePlaces;

    const [journeyRoute, setJourneyRoute] =
        useState(ROAD_TRIP_LINE);

    useEffect(() => {
        const routeCoordinates = selectedJourneyPlaces.map(
            (place) => place.coordinates.join(",")
        ).join(";");

        const fallbackRoute = {
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: selectedJourneyPlaces.map(
                    (place) => place.coordinates
                ),
            },
        };

        setJourneyRoute(fallbackRoute);

        if (selectedJourneyPlaces.length < 2) {
            return;
        }

        fetch(
            `https://router.project-osrm.org/route/v1/driving/${routeCoordinates}?overview=full&geometries=geojson`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to load road route");
                }

                return response.json();
            })
            .then((data) => {
                const routeGeometry = data.routes?.[0]?.geometry;

                if (routeGeometry) {
                    setJourneyRoute({
                        type: "Feature",
                        geometry: routeGeometry,
                    });
                }
            })
            .catch(() => {
            });
    }, [selectedTimelineYear]);

    useEffect(() => {
        if (!mapRef.current || view !== "journeys") {
            return;
        }

        const coordinates = selectedJourneyPlaces.map(
            (place) => place.coordinates
        );

        if (coordinates.length === 1) {
            mapRef.current.flyTo({
                center: coordinates[0],
                zoom: 5.5,
                duration: 900,
            });
            return;
        }

        if (coordinates.length > 1) {
            const longitudes = coordinates.map(([longitude]) => longitude);
            const latitudes = coordinates.map(([, latitude]) => latitude);

            mapRef.current.fitBounds(
                [
                    [Math.min(...longitudes), Math.min(...latitudes)],
                    [Math.max(...longitudes), Math.max(...latitudes)],
                ],
                {
                    padding: 70,
                    maxZoom: 5.5,
                    duration: 900,
                }
            );
        }
    }, [selectedTimelineYear, view]);

    /*
     * Calculate these instead of hard-coding them.
     */
    const placesCount = PLACES.length;

    const statesCount = new Set(
        PLACES.map((place) => place.state)
    ).size;

    /*
     * Fit the entire India region when the map loads.
     *
     * fitBounds is much better than manually guessing
     * one zoom level because desktop and mobile have
     * completely different aspect ratios.
     */
    const handleMapLoad = () => {
        if (!mapRef.current) {
            return;
        }

        mapRef.current.fitBounds(
            INDIA_FIT_BOUNDS,
            {
                padding: {
                    top: 35,
                    bottom: 35,
                    left: 35,
                    right: 35,
                },

                /*
                 * Prevent desktop from starting too zoomed in.
                 */
                maxZoom: 3.8,

                duration: 0,
            }
        );
    };

    const handleMarkerClick = (place) => {
        setSelectedPlace(place);
    };

    return (
        <>
            <Header />

            <div className="travel-page">

                {/* =================================================
                    HEADER
                ================================================= */}

                <section className="travel-header">

                    <h1>
                        Places I've{" "}
                        <span>explored</span>
                    </h1>

                    <p>
                        A visual collection of the places,
                        pilgrimages and journeys I've experienced.
                    </p>

                    <div className="travel-stats">

                        <div className="travel-stat">
                            <strong>
                                {placesCount}+
                            </strong>

                            <span>
                                PLACES
                            </span>
                        </div>

                        <div className="travel-stat">
                            <strong>
                                {statesCount}
                            </strong>

                            <span>
                                STATES / UTs
                            </span>
                        </div>

                    </div>

                </section>

                {/* =================================================
                    VIEW TOGGLE
                ================================================= */}

                <div className="travel-toggle">

                    <button
                        className={
                            view === "places"
                                ? "active"
                                : ""
                        }
                        onClick={() => {
                            setView("places");
                            setSelectedPlace(null);
                            setSelectedJourneyStop(null);
                        }}
                    >
                        ✦ Places
                    </button>

                    <button
                        className={
                            view === "journeys"
                                ? "active"
                                : ""
                        }
                        onClick={() => {
                            setView("journeys");
                            setSelectedPlace(null);
                            setSelectedJourneyStop(null);
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
                                : `${selectedTimeline.year} · ${selectedTimeline.title}`}

                        </div>

                        <div className="travel-map-hint">

                            {view === "places"
                                ? "Hover a marker • Click for details"
                                : selectedJourneyPlaces.length > 1
                                    ? "Click a stop for details"
                                    : "A place that started it all"}

                        </div>

                    </div>

                    <div className="travel-map">

                        <Map
                            ref={mapRef}

                            mapStyle={MAP_STYLE}

                            onLoad={handleMapLoad}

                            minZoom={2.2}

                            maxZoom={12}

                            maxBounds={
                                INDIA_MAX_BOUNDS
                            }

                            renderWorldCopies={false}

                            dragRotate={false}

                            touchPitch={false}

                            scrollZoom={true}

                            doubleClickZoom={true}

                            dragPan={true}

                            touchZoomRotate={true}

                            cooperativeGestures={false}

                            attributionControl={true}

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

                                <Layer
                                    {...stateFillLayer}
                                />

                                <Layer
                                    {...stateBorderLayer}
                                />

                                <Layer
                                    {...stateLabelLayer}
                                />

                            </Source>

                            {/* =================================================
                                PLACES VIEW
                            ================================================= */}

                            {view === "places" &&
                                PLACES.map((place) => (

                                    <Marker
                                        key={`${place.name}-${place.state}`}
                                        longitude={
                                            place.coordinates[0]
                                        }
                                        latitude={
                                            place.coordinates[1]
                                        }
                                        anchor="center"
                                    >

                                        <button
                                            type="button"

                                            className={`travel-marker ${getTypeClass(
                                                place
                                            )}`}

                                            onClick={() =>
                                                handleMarkerClick(
                                                    place
                                                )
                                            }

                                            aria-label={
                                                place.name
                                            }
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

                                    {selectedJourneyPlaces.length > 1 && (
                                        <Source
                                            id="journey-route"
                                            type="geojson"
                                            data={journeyRoute}
                                        >
                                            <Layer
                                                {...roadTripCasingLayer}
                                            />
                                            <Layer
                                                {...roadTripLineLayer}
                                            />
                                        </Source>
                                    )}

                                    {selectedJourneyPlaces.map(
                                        (
                                            place,
                                            index
                                        ) => (

                                            <Marker
                                                key={`${selectedTimeline.year}-${place.name}-${index}`}
                                                longitude={
                                                    place.coordinates[0]
                                                }
                                                latitude={
                                                    place.coordinates[1]
                                                }
                                                anchor="center"
                                            >

                                                <button
                                                    type="button"
                                                    className="journey-marker"
                                                    onClick={() =>
                                                        setSelectedJourneyStop(place)
                                                    }
                                                    aria-label={`Show ${place.name}`}
                                                >

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

                                                </button>

                                            </Marker>

                                        )
                                    )}

                                </>
                            )}

                            {/* =================================================
                                POPUP
                            ================================================= */}

                            {selectedPlace &&
                                view === "places" && (

                                    <Popup
                                        longitude={
                                            selectedPlace
                                                .coordinates[0]
                                        }

                                        latitude={
                                            selectedPlace
                                                .coordinates[1]
                                        }

                                        anchor="bottom"

                                        closeOnClick={false}

                                        closeOnMove={false}

                                        onClose={() =>
                                            setSelectedPlace(
                                                null
                                            )
                                        }

                                        maxWidth="260px"
                                    >

                                        <div className="place-popup">

                                            <div
                                                className={`popup-type ${getTypeClass(
                                                    selectedPlace
                                                )}`}
                                            >
                                                {getTypeLabel(
                                                    selectedPlace
                                                )}
                                            </div>

                                            <h3>
                                                {
                                                    selectedPlace.name
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    selectedPlace.state
                                                }
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
                                                    ✦ Part of the
                                                    Char Dham
                                                </div>

                                            )}

                                        </div>

                                    </Popup>

                                )}

                            {selectedJourneyStop &&
                                view === "journeys" && (
                                    <Popup
                                        longitude={selectedJourneyStop.coordinates[0]}
                                        latitude={selectedJourneyStop.coordinates[1]}
                                        anchor="bottom"
                                        closeOnClick={false}
                                        onClose={() => setSelectedJourneyStop(null)}
                                        maxWidth="260px"
                                    >
                                        <div className="place-popup journey-popup">
                                            <div className="popup-type journey-popup-type">
                                                JOURNEY STOP
                                            </div>
                                            <h3>{selectedJourneyStop.name}</h3>
                                            <p>{selectedJourneyStop.state}</p>
                                            <div className="popup-badge">
                                                Stop {selectedJourneyPlaces.findIndex(
                                                    (place) => place.name === selectedJourneyStop.name
                                                ) + 1} in the {selectedTimeline.year} journey
                                            </div>
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
                            LEGEND
                        ================================================= */}

                        <div className="travel-map-legend">

                            <div className="legend-title">
                                MAP LEGEND
                            </div>

                            {view === "places" ? (
                                <>
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
                                </>
                            ) : (
                                <>
                                    {selectedJourneyPlaces.length > 1 && (
                                        <div className="legend-item">
                                            <span className="legend-route-line" />
                                            Driving route
                                        </div>
                                    )}
                                    <div className="legend-item">
                                        <span className="legend-route-stop">1</span>
                                        {selectedJourneyPlaces.length > 1
                                            ? "Journey stop"
                                            : "Origin place"}
                                    </div>
                                </>
                            )}

                        </div>

                    </div>

                </section>

                {/* =================================================
                    JOURNEY INFORMATION
                ================================================= */}

                {view === "journeys" && (

                    <section className="journey-section">

                        <div className="journey-timeline">
                            <div className="timeline-heading">
                                <div>
                                    <span className="journey-label">THE JOURNEY SO FAR</span>
                                    <h2>Years, places and memories</h2>
                                </div>
                                <span className="timeline-count">{TRAVEL_TIMELINE.length} chapters</span>
                            </div>

                            <div className="timeline-list">
                                {TRAVEL_TIMELINE.map((journey) => (
                                    <button
                                        type="button"
                                        key={journey.year}
                                        className={`timeline-item ${selectedTimelineYear === journey.year ? "active" : ""}`}
                                        onClick={() => setSelectedTimelineYear(journey.year)}
                                    >
                                        <span className="timeline-year">
                                            {journey.year}
                                            {journey.date && ` · ${journey.date}`}
                                        </span>
                                        <span className="timeline-title">{journey.title}</span>
                                        <span className="timeline-stops">{journey.stops.length} {journey.stops.length === 1 ? "place" : "places"}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="journey-card">

                            <div className="journey-card-top">

                                <div>

                                    <span className="journey-label">
                                        {selectedTimeline.origin
                                            ? "TRAVEL ORIGIN"
                                            : selectedTimeline.featured
                                                ? "MEMORABLE ROAD TRIP"
                                                : "TRAVEL CHAPTER"}
                                    </span>

                                    <h2>
                                        {selectedTimeline.title}
                                    </h2>

                                </div>

                                <div className="journey-distance">
                                    {selectedTimelineYear} · {selectedTimelinePlaces.length} {selectedTimelinePlaces.length === 1 ? "place" : "places"}
                                </div>

                            </div>

                            <p>
                                {selectedTimeline.description}
                            </p>

                            <div className="journey-route-list">

                                {selectedTimelinePlaces.map(
                                        (
                                            place,
                                            index
                                        ) => (

                                            <div
                                                className="route-stop"
                                                key={`${selectedTimelineYear}-${place.name}`}
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

                        {/* =================================================
                            NEXT PLANNED JOURNEY
                        ================================================= */}

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

                        <strong>
                            10 / 12
                        </strong>

                        <span>
                            JYOTIRLINGAS
                        </span>

                    </div>

                    <div className="achievement-card">

                        <strong>
                            4 / 4
                        </strong>

                        <span>
                            CHAR DHAM
                        </span>

                    </div>

                </section>

                <div className="travel-footer-note">
                    More places, journeys and memories will be added over time.
                </div>

            </div>
        </>
    );
};

export default Travel;