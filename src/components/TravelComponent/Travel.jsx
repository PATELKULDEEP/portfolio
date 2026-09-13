import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

import "./TravelStyle.css";

const INDIA_MAP =
    "https://raw.githubusercontent.com/yashveeeeeeer/india-geodata/main/data/administrative/country/india-composite.geojson";

const visitedPlaces = [
    // North India
    {
        name: "Delhi",
        state: "Delhi",
        category: "City",
        coordinates: [77.1025, 28.7041],
    },
    {
        name: "Manali",
        state: "Himachal Pradesh",
        category: "Mountain",
        coordinates: [77.1892, 32.2396],
    },
    {
        name: "Yamunotri",
        state: "Uttarakhand",
        category: "Pilgrimage",
        coordinates: [78.4515, 31.0140],
    },
    {
        name: "Gangotri",
        state: "Uttarakhand",
        category: "Pilgrimage",
        coordinates: [78.9410, 30.9947],
    },
    {
        name: "Kedarnath",
        state: "Uttarakhand",
        category: "Pilgrimage",
        coordinates: [79.0669, 30.7352],
    },
    {
        name: "Badrinath",
        state: "Uttarakhand",
        category: "Pilgrimage",
        coordinates: [79.4938, 30.7433],
    },

    // Central India
    {
        name: "Prayagraj",
        state: "Uttar Pradesh",
        category: "City",
        coordinates: [81.8463, 25.4358],
    },
    {
        name: "Indore",
        state: "Madhya Pradesh",
        category: "City",
        coordinates: [75.8577, 22.7196],
    },
    {
        name: "Amarkantak",
        state: "Madhya Pradesh",
        category: "Pilgrimage",
        coordinates: [81.7550, 22.6742],
    },
    {
        name: "Raipur",
        state: "Chhattisgarh",
        category: "City",
        coordinates: [81.6296, 21.2514],
    },
    {
        name: "Bastar",
        state: "Chhattisgarh",
        category: "Nature",
        coordinates: [81.9515, 19.1071],
    },

    // East India
    {
        name: "Puri",
        state: "Odisha",
        category: "Pilgrimage",
        coordinates: [85.8315, 19.8135],
    },
    {
        name: "Bhubaneswar",
        state: "Odisha",
        category: "City",
        coordinates: [85.8245, 20.2961],
    },

    // Gujarat
    {
        name: "Somnath",
        state: "Gujarat",
        category: "Pilgrimage",
        coordinates: [70.4012, 20.8880],
    },
    {
        name: "Statue of Unity",
        state: "Gujarat",
        category: "Landmark",
        coordinates: [73.7191, 21.8380],
    },

    // South India
    {
        name: "Bengaluru",
        state: "Karnataka",
        category: "City",
        coordinates: [77.5946, 12.9716],
    },
    {
        name: "Hyderabad",
        state: "Telangana",
        category: "City",
        coordinates: [78.4867, 17.3850],
    },
    {
        name: "Varkala",
        state: "Kerala",
        category: "Beach",
        coordinates: [76.7163, 8.7379],
    },
    {
        name: "Kanyakumari",
        state: "Tamil Nadu",
        category: "Landmark",
        coordinates: [77.5385, 8.0883],
    },
    {
        name: "Rameshwaram",
        state: "Tamil Nadu",
        category: "Pilgrimage",
        coordinates: [79.3129, 9.2876],
    },
    {
        name: "Madurai",
        state: "Tamil Nadu",
        category: "City",
        coordinates: [78.1198, 9.9252],
    },

    // Jyotirlingas
    {
        name: "Mallikarjuna",
        state: "Andhra Pradesh",
        category: "Jyotirlinga",
        coordinates: [78.8681, 15.8520],
    },
    {
        name: "Mahakaleshwar",
        state: "Madhya Pradesh",
        category: "Jyotirlinga",
        coordinates: [75.7684, 23.1765],
    },
    {
        name: "Omkareshwar",
        state: "Madhya Pradesh",
        category: "Jyotirlinga",
        coordinates: [76.1460, 22.2426],
    },
    {
        name: "Bhimashankar",
        state: "Maharashtra",
        category: "Jyotirlinga",
        coordinates: [73.5310, 19.0728],
    },
    {
        name: "Trimbakeshwar",
        state: "Maharashtra",
        category: "Jyotirlinga",
        coordinates: [73.5300, 19.9322],
    },
    {
        name: "Nageshwar",
        state: "Gujarat",
        category: "Jyotirlinga",
        coordinates: [69.1100, 22.3340],
    },
    {
        name: "Grishneshwar",
        state: "Maharashtra",
        category: "Jyotirlinga",
        coordinates: [75.1793, 20.0248],
    },
];

const Travel = () => {
    const [hoveredPlace, setHoveredPlace] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [center, setCenter] = useState([78.9629, 22.5937]);

    const handleZoomIn = () => {
        setZoom((currentZoom) =>
            Math.min(currentZoom * 1.4, 4)
        );
    };

    const handleZoomOut = () => {
        setZoom((currentZoom) =>
            Math.max(currentZoom / 1.4, 1)
        );
    };

    const handleReset = () => {
        setZoom(1);
        setCenter([78.9629, 22.5937]);
        setSelectedPlace(null);
        setHoveredPlace(null);
    };

    const handleMarkerClick = (place) => {
        setSelectedPlace(place);
        setHoveredPlace(null);
    };

    return (
        <div className="travel">

            <div className="travel-header">
                <p className="travel-eyebrow">
                    BEYOND CODE
                </p>

                <h1>Places I've explored</h1>

                <p className="travel-subtitle">
                    A map of the places, journeys and experiences
                    that have become part of my story.
                </p>
            </div>

            <div className="travel-stats">

                <div className="travel-stat">
                    <span className="travel-stat-number">
                        {visitedPlaces.length}
                    </span>
                    <span className="travel-stat-label">
                        Places
                    </span>
                </div>

                <div className="travel-stat-divider"></div>

                <div className="travel-stat">
                    <span className="travel-stat-number">
                        {
                            new Set(
                                visitedPlaces.map(
                                    (place) => place.state
                                )
                            ).size
                        }
                    </span>
                    <span className="travel-stat-label">
                        States
                    </span>
                </div>

                <div className="travel-stat-divider"></div>

                <div className="travel-stat">
                    <span className="travel-stat-number">
                        {
                            visitedPlaces.filter(
                                (place) =>
                                    place.category ===
                                    "Jyotirlinga"
                            ).length
                        }
                    </span>
                    <span className="travel-stat-label">
                        Jyotirlingas
                    </span>
                </div>

            </div>

            <div className="travel-map-wrapper">

                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        center: [78.9629, 22.5937],
                        scale: 1000,
                    }}
                >

                    <ZoomableGroup
                        center={center}
                        zoom={zoom}
                        minZoom={1}
                        maxZoom={4}
                        onMoveEnd={({ coordinates, zoom }) => {
                            setCenter(coordinates);
                            setZoom(zoom);
                        }}
                    >

                        <Geographies geography={INDIA_MAP}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className="india-map"
                                    />
                                ))
                            }
                        </Geographies>

                        {visitedPlaces.map((place) => {

                            const isHovered =
                                hoveredPlace === place.name;

                            const isSelected =
                                selectedPlace?.name ===
                                place.name;

                            return (
                                <Marker
                                    key={place.name}
                                    coordinates={
                                        place.coordinates
                                    }
                                    onMouseEnter={() =>
                                        setHoveredPlace(
                                            place.name
                                        )
                                    }
                                    onMouseLeave={() =>
                                        setHoveredPlace(null)
                                    }
                                    onClick={() =>
                                        handleMarkerClick(
                                            place
                                        )
                                    }
                                >

                                    {/* Outer pulse */}
                                    <circle
                                        className={`marker-pulse ${
                                            isSelected
                                                ? "marker-pulse-active"
                                                : ""
                                        }`}
                                        r={
                                            isSelected
                                                ? 13
                                                : 8
                                        }
                                    />

                                    {/* Main marker */}
                                    <circle
                                        className={`travel-marker ${
                                            isHovered ||
                                            isSelected
                                                ? "travel-marker-active"
                                                : ""
                                        }`}
                                        r={
                                            isSelected
                                                ? 6
                                                : 4
                                        }
                                    />

                                    {/* Small center */}
                                    <circle
                                        className="marker-core"
                                        r="1.5"
                                    />

                                    {/* Hover label */}
                                    {isHovered &&
                                        !isSelected && (
                                            <g className="marker-label">
                                                <rect
                                                    x="-55"
                                                    y="-31"
                                                    width="110"
                                                    height="24"
                                                    rx="6"
                                                />

                                                <text
                                                    textAnchor="middle"
                                                    y="-15"
                                                >
                                                    {
                                                        place.name
                                                    }
                                                </text>
                                            </g>
                                        )}

                                </Marker>
                            );
                        })}

                    </ZoomableGroup>

                </ComposableMap>

                <div className="map-controls">

                    <button
                        type="button"
                        onClick={handleZoomIn}
                        aria-label="Zoom in"
                    >
                        +
                    </button>

                    <button
                        type="button"
                        onClick={handleZoomOut}
                        aria-label="Zoom out"
                    >
                        −
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        aria-label="Reset map"
                        className="reset-button"
                    >
                        ↺
                    </button>

                </div>

                <div className="map-hint">
                    Drag to explore · Scroll to zoom · Click a place
                </div>

            </div>

            {selectedPlace && (
                <div className="travel-location-card">

                    <div className="location-card-indicator"></div>

                    <div className="location-card-content">

                        <span className="location-card-category">
                            {selectedPlace.category}
                        </span>

                        <h2>
                            {selectedPlace.name}
                        </h2>

                        <p>
                            {selectedPlace.state}
                        </p>

                    </div>

                    <button
                        type="button"
                        className="location-card-close"
                        onClick={() =>
                            setSelectedPlace(null)
                        }
                        aria-label="Close location"
                    >
                        ×
                    </button>

                </div>
            )}

        </div>
    );
};

export default Travel;