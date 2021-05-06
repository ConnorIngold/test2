var simplemaps_ukmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "http://simplemaps.com",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    arrow_color: "#cecece",
    arrow_color_border: "#808080",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    "0": {},
    "1": {
      hover_color: "orange"
    },
    EE: {
      name: "East",
      color: "#3e744a",
      hover_color: "#fe5300",
      description: "£40"
    },
    EM: {
      name: "East Midlands",
      color: "#3e744a",
      hover_color: "#fe5300",
      description: "£40"
    },
    ES: {
      name: "Eastern Scotland",
      color: "#c5e99b",
      hover_color: "#fe5300",
      description: "£65"
    },
    EW: {
      name: "East Wales",
      color: "#7fad84",
      hover_color: "#fe5300",
      description: "£40"
    },
    GL: {
      name: "Greater London",
      color: "#3e744a",
      hover_color: "#fe5300",
      description: "£40"
    },
    HI: {
      name: "Highlands and Islands",
      color: "#9ba17d",
      hover_color: "#fe5300",
      description: "£85"
    },
    NE: {
      name: "North East",
      color: "#c5e99b",
      hover_color: "#fe5300",
      description: "£65"
    },
    NI: {
      name: "Northern Ireland",
      color: "#74653e",
      hover_color: "#fe5300",
      description: "£40"
    },
    NS: {
      name: "North Eastern Scotland",
      color: "#9ba17d",
      hover_color: "#fe5300",
      description: "£85"
    },
    NW: {
      name: "North West",
      color: "#c5e99b",
      hover_color: "#fe5300",
      description: "£65"
    },
    SE: {
      name: "South East",
      color: "#3e744a",
      hover_color: "#fe5300",
      description: "£40"
    },
    SS: {
      name: "South Western Scotland",
      color: "#c5e99b",
      hover_color: "#fe5300",
      description: "£65"
    },
    SW: {
      name: "South West",
      color: "#7fad84",
      hover_color: "#fe5300",
      description: "£40"
    },
    WM: {
      name: "West Midlands",
      color: "#3e744a",
      hover_color: "#fe5300",
      description: "£40"
    },
    WV: {
      name: "West Wales and the Valleys",
      color: "#7fad84",
      hover_color: "#fe5300",
      description: "£40"
    },
    YH: {
      name: "Yorkshire and the Humber",
      color: "#c5e99b",
      hover_color: "#fe5300",
      description: "£65"
    }
  },
  locations: {
    "0": {
      lat: 51.506,
      lng: -0.127,
      name: "London",
      type: "circle",
      opacity: "0"
    },
    "1": {
      lat: "52.0406",
      lng: "-0.7594",
      name: "Milton Keynes",
      color: "#fe5300",
      description: "Hardlife [UK]",
      size: "40",
      image_url: "https://image.shutterstock.com/image-vector/hl-initial-letters-looping-linked-600w-417089947.jpg",
      type: "circle",
      opacity: "1"
    }
  },
  labels: {},
  regions: {}
};