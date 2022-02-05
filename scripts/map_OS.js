(function(vegaEmbed) {
      var spec = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
  "data": {
    "url": "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/world-110m.json",
    "format": {"feature": "countries", "type": "topojson"}
  },
  "mark": {"type": "geoshape", "stroke": "white"},
  "encoding": {
    "color": {
      "type": "ordinal",
      "bin": true,
      "field": "Overall",
      "legend": {"title": "ODIN Score:"},
      "scale": {
        "range": [
          "#D3D3D3",
          "#dbefdc",
          "#a6d7a8",
          "#5eb762",
          "#3d8c40",
          "#2e6930"
        ]
      }
    },
    "tooltip": [
      {"type": "nominal", "field": "Country"},
      {"type": "quantitative", "field": "Overall"},
      {"type": "quantitative", "field": "Openness"},
      {"type": "quantitative", "field": "Coverage"}
    ]
  },
  "height": "container",
  "projection": {"center": [10, 56], "scale": 570, "type": "mercator"},
  "transform": [
    {
      "lookup": "id",
      "from": {
        "data": {"name": "data-d41dcaa0ff1a8fbe8377b8a09f971e79"},
        "key": "id",
        "fields": ["Overall", "Country", "Openness", "Coverage"]
      }
    }
  ],
  "width": "container",
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
  "datasets": {
    "data-d41dcaa0ff1a8fbe8377b8a09f971e79": [
      {
        "Overall": 62.3,
        "Coverage": 48.4,
        "Openness": 74.1,
        "Country": "Cyprus",
        "id": 196,
        "Latitude (average)": 35,
        "Longitude (average)": 33
      },
      {
        "Overall": 69.9,
        "Coverage": 65.9,
        "Openness": 73.2,
        "Country": "Bulgaria",
        "id": 100,
        "Latitude (average)": 43,
        "Longitude (average)": 25
      },
      {
        "Overall": 69.8,
        "Coverage": 71.1,
        "Openness": 68.8,
        "Country": "Czech Republic",
        "id": 203,
        "Latitude (average)": 49.75,
        "Longitude (average)": 15.5
      },
      {
        "Overall": 65.3,
        "Coverage": 63.1,
        "Openness": 67.1,
        "Country": "Hungary",
        "id": 348,
        "Latitude (average)": 47,
        "Longitude (average)": 20
      },
      {
        "Overall": 85.3,
        "Coverage": 81.2,
        "Openness": 88.8,
        "Country": "Poland",
        "id": 616,
        "Latitude (average)": 52,
        "Longitude (average)": 20
      },
      {
        "Overall": 66.2,
        "Coverage": 57.9,
        "Openness": 73.2,
        "Country": "Romania",
        "id": 642,
        "Latitude (average)": 46,
        "Longitude (average)": 25
      },
      {
        "Overall": 78.2,
        "Coverage": 66.2,
        "Openness": 88.5,
        "Country": "Slovakia",
        "id": 703,
        "Latitude (average)": 48.6667,
        "Longitude (average)": 19.5
      },
      {
        "Overall": 84.4,
        "Coverage": 74.4,
        "Openness": 93,
        "Country": "Denmark",
        "id": 208,
        "Latitude (average)": 56,
        "Longitude (average)": 10
      },
      {
        "Overall": 70.2,
        "Coverage": 64,
        "Openness": 75.5,
        "Country": "Estonia",
        "id": 233,
        "Latitude (average)": 59,
        "Longitude (average)": 26
      },
      {
        "Overall": 84.8,
        "Coverage": 82.1,
        "Openness": 87.1,
        "Country": "Finland",
        "id": 246,
        "Latitude (average)": 64,
        "Longitude (average)": 26
      },
      {
        "Overall": 77.1,
        "Coverage": 61.4,
        "Openness": 90.4,
        "Country": "Ireland",
        "id": 372,
        "Latitude (average)": 53,
        "Longitude (average)": -8
      },
      {
        "Overall": 58.2,
        "Coverage": 51.8,
        "Openness": 63.6,
        "Country": "Latvia",
        "id": 428,
        "Latitude (average)": 57,
        "Longitude (average)": 25
      },
      {
        "Overall": 73.8,
        "Coverage": 70,
        "Openness": 77,
        "Country": "Lithuania",
        "id": 440,
        "Latitude (average)": 56,
        "Longitude (average)": 24
      },
      {
        "Overall": 83.9,
        "Coverage": 77.6,
        "Openness": 89.3,
        "Country": "Sweden",
        "id": 752,
        "Latitude (average)": 62,
        "Longitude (average)": 15
      },
      {
        "Overall": 63.8,
        "Coverage": 58.9,
        "Openness": 68,
        "Country": "Croatia",
        "id": 191,
        "Latitude (average)": 45.1667,
        "Longitude (average)": 15.5
      },
      {
        "Overall": 60.1,
        "Coverage": 55,
        "Openness": 64.6,
        "Country": "Greece",
        "id": 300,
        "Latitude (average)": 39,
        "Longitude (average)": 22
      },
      {
        "Overall": 65.9,
        "Coverage": 53.5,
        "Openness": 76.5,
        "Country": "Italy",
        "id": 380,
        "Latitude (average)": 42.8333,
        "Longitude (average)": 12.8333
      },
      {
        "Overall": 47.2,
        "Coverage": 44.4,
        "Openness": 49.1,
        "Country": "Malta",
        "id": 470,
        "Latitude (average)": 35.8333,
        "Longitude (average)": 14.5833
      },
      {
        "Overall": 66.5,
        "Coverage": 55.8,
        "Openness": 75.7,
        "Country": "Portugal",
        "id": 620,
        "Latitude (average)": 39.5,
        "Longitude (average)": -8
      },
      {
        "Overall": 79.9,
        "Coverage": 70.7,
        "Openness": 87.7,
        "Country": "Slovenia",
        "id": 705,
        "Latitude (average)": 46,
        "Longitude (average)": 15
      },
      {
        "Overall": 71.3,
        "Coverage": 68.4,
        "Openness": 73.7,
        "Country": "Spain",
        "id": 724,
        "Latitude (average)": 40,
        "Longitude (average)": -4
      },
      {
        "Overall": 68.7,
        "Coverage": 60.1,
        "Openness": 76.1,
        "Country": "Austria",
        "id": 40,
        "Latitude (average)": 47.3333,
        "Longitude (average)": 13.3333
      },
      {
        "Overall": 45.5,
        "Coverage": 44.3,
        "Openness": 46.6,
        "Country": "Belgium",
        "id": 56,
        "Latitude (average)": 50.8333,
        "Longitude (average)": 4
      },
      {
        "Overall": 62,
        "Coverage": 57.1,
        "Openness": 66.3,
        "Country": "France",
        "id": 250,
        "Latitude (average)": 46,
        "Longitude (average)": 2
      },
      {
        "Overall": 77.3,
        "Coverage": 67,
        "Openness": 86,
        "Country": "Germany",
        "id": 276,
        "Latitude (average)": 51,
        "Longitude (average)": 9
      },
      {
        "Overall": 81.5,
        "Coverage": 70,
        "Openness": 91.3,
        "Country": "Netherlands",
        "id": 528,
        "Latitude (average)": 52.5,
        "Longitude (average)": 5.75
      },
      {
        "Overall": 65.1,
        "Coverage": 46.5,
        "Openness": 80.9,
        "Country": "Luxembourg",
        "id": 442,
        "Latitude (average)": 49.75,
        "Longitude (average)": 6.1667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Afghanistan",
        "id": 4,
        "Latitude (average)": 33,
        "Longitude (average)": 65
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Albania",
        "id": 8,
        "Latitude (average)": 41,
        "Longitude (average)": 20
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Algeria",
        "id": 12,
        "Latitude (average)": 28,
        "Longitude (average)": 3
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "American Samoa",
        "id": 16,
        "Latitude (average)": -14.3333,
        "Longitude (average)": -170
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Andorra",
        "id": 20,
        "Latitude (average)": 42.5,
        "Longitude (average)": 1.6
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Angola",
        "id": 24,
        "Latitude (average)": -12.5,
        "Longitude (average)": 18.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Anguilla",
        "id": 660,
        "Latitude (average)": 18.25,
        "Longitude (average)": -63.1667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Antarctica",
        "id": 10,
        "Latitude (average)": -90,
        "Longitude (average)": 0
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Antigua and Barbuda",
        "id": 28,
        "Latitude (average)": 17.05,
        "Longitude (average)": -61.8
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Argentina",
        "id": 32,
        "Latitude (average)": -34,
        "Longitude (average)": -64
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Armenia",
        "id": 51,
        "Latitude (average)": 40,
        "Longitude (average)": 45
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Aruba",
        "id": 533,
        "Latitude (average)": 12.5,
        "Longitude (average)": -69.9667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Australia",
        "id": 36,
        "Latitude (average)": -27,
        "Longitude (average)": 133
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Azerbaijan",
        "id": 31,
        "Latitude (average)": 40.5,
        "Longitude (average)": 47.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bahamas",
        "id": 44,
        "Latitude (average)": 24.25,
        "Longitude (average)": -76
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bahrain",
        "id": 48,
        "Latitude (average)": 26,
        "Longitude (average)": 50.55
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bangladesh",
        "id": 50,
        "Latitude (average)": 24,
        "Longitude (average)": 90
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Barbados",
        "id": 52,
        "Latitude (average)": 13.1667,
        "Longitude (average)": -59.5333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Belarus",
        "id": 112,
        "Latitude (average)": 53,
        "Longitude (average)": 28
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Belize",
        "id": 84,
        "Latitude (average)": 17.25,
        "Longitude (average)": -88.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Benin",
        "id": 204,
        "Latitude (average)": 9.5,
        "Longitude (average)": 2.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bermuda",
        "id": 60,
        "Latitude (average)": 32.3333,
        "Longitude (average)": -64.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bhutan",
        "id": 64,
        "Latitude (average)": 27.5,
        "Longitude (average)": 90.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bolivia,Plurinational State of",
        "id": 68,
        "Latitude (average)": -17,
        "Longitude (average)": -65
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bolivia",
        "id": 68,
        "Latitude (average)": -17,
        "Longitude (average)": -65
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bosnia and Herzegovina",
        "id": 70,
        "Latitude (average)": 44,
        "Longitude (average)": 18
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Botswana",
        "id": 72,
        "Latitude (average)": -22,
        "Longitude (average)": 24
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Bouvet Island",
        "id": 74,
        "Latitude (average)": -54.4333,
        "Longitude (average)": 3.4
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Brazil",
        "id": 76,
        "Latitude (average)": -10,
        "Longitude (average)": -55
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "British Indian Ocean Territory",
        "id": 86,
        "Latitude (average)": -6,
        "Longitude (average)": 71.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Brunei Darussalam",
        "id": 96,
        "Latitude (average)": 4.5,
        "Longitude (average)": 114.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Brunei",
        "id": 96,
        "Latitude (average)": 4.5,
        "Longitude (average)": 114.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Burkina Faso",
        "id": 854,
        "Latitude (average)": 13,
        "Longitude (average)": -2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Burundi",
        "id": 108,
        "Latitude (average)": -3.5,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cambodia",
        "id": 116,
        "Latitude (average)": 13,
        "Longitude (average)": 105
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cameroon",
        "id": 120,
        "Latitude (average)": 6,
        "Longitude (average)": 12
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Canada",
        "id": 124,
        "Latitude (average)": 60,
        "Longitude (average)": -95
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cape Verde",
        "id": 132,
        "Latitude (average)": 16,
        "Longitude (average)": -24
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cayman Islands",
        "id": 136,
        "Latitude (average)": 19.5,
        "Longitude (average)": -80.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Central African Republic",
        "id": 140,
        "Latitude (average)": 7,
        "Longitude (average)": 21
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Chad",
        "id": 148,
        "Latitude (average)": 15,
        "Longitude (average)": 19
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Chile",
        "id": 152,
        "Latitude (average)": -30,
        "Longitude (average)": -71
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "China",
        "id": 156,
        "Latitude (average)": 35,
        "Longitude (average)": 105
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Christmas Island",
        "id": 162,
        "Latitude (average)": -10.5,
        "Longitude (average)": 105.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cocos (Keeling) Islands",
        "id": 166,
        "Latitude (average)": -12.5,
        "Longitude (average)": 96.8333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Colombia",
        "id": 170,
        "Latitude (average)": 4,
        "Longitude (average)": -72
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Comoros",
        "id": 174,
        "Latitude (average)": -12.1667,
        "Longitude (average)": 44.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Congo",
        "id": 178,
        "Latitude (average)": -1,
        "Longitude (average)": 15
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Congo,the Democratic Republic of the",
        "id": 180,
        "Latitude (average)": 0,
        "Longitude (average)": 25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cook Islands",
        "id": 184,
        "Latitude (average)": -21.2333,
        "Longitude (average)": -159.7667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Costa Rica",
        "id": 188,
        "Latitude (average)": 10,
        "Longitude (average)": -84
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Côte d'Ivoire",
        "id": 384,
        "Latitude (average)": 8,
        "Longitude (average)": -5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Ivory Coast",
        "id": 384,
        "Latitude (average)": 8,
        "Longitude (average)": -5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Cuba",
        "id": 192,
        "Latitude (average)": 21.5,
        "Longitude (average)": -80
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Djibouti",
        "id": 262,
        "Latitude (average)": 11.5,
        "Longitude (average)": 43
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Dominica",
        "id": 212,
        "Latitude (average)": 15.4167,
        "Longitude (average)": -61.3333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Dominican Republic",
        "id": 214,
        "Latitude (average)": 19,
        "Longitude (average)": -70.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Ecuador",
        "id": 218,
        "Latitude (average)": -2,
        "Longitude (average)": -77.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Egypt",
        "id": 818,
        "Latitude (average)": 27,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "El Salvador",
        "id": 222,
        "Latitude (average)": 13.8333,
        "Longitude (average)": -88.9167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Equatorial Guinea",
        "id": 226,
        "Latitude (average)": 2,
        "Longitude (average)": 10
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Eritrea",
        "id": 232,
        "Latitude (average)": 15,
        "Longitude (average)": 39
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Ethiopia",
        "id": 231,
        "Latitude (average)": 8,
        "Longitude (average)": 38
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Falkland Islands (Malvinas)",
        "id": 238,
        "Latitude (average)": -51.75,
        "Longitude (average)": -59
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Faroe Islands",
        "id": 234,
        "Latitude (average)": 62,
        "Longitude (average)": -7
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Fiji",
        "id": 242,
        "Latitude (average)": -18,
        "Longitude (average)": 175
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "French Guiana",
        "id": 254,
        "Latitude (average)": 4,
        "Longitude (average)": -53
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "French Polynesia",
        "id": 258,
        "Latitude (average)": -15,
        "Longitude (average)": -140
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "French Southern Territories",
        "id": 260,
        "Latitude (average)": -43,
        "Longitude (average)": 67
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Gabon",
        "id": 266,
        "Latitude (average)": -1,
        "Longitude (average)": 11.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Gambia",
        "id": 270,
        "Latitude (average)": 13.4667,
        "Longitude (average)": -16.5667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Georgia",
        "id": 268,
        "Latitude (average)": 42,
        "Longitude (average)": 43.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Ghana",
        "id": 288,
        "Latitude (average)": 8,
        "Longitude (average)": -2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Gibraltar",
        "id": 292,
        "Latitude (average)": 36.1833,
        "Longitude (average)": -5.3667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Greenland",
        "id": 304,
        "Latitude (average)": 72,
        "Longitude (average)": -40
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Grenada",
        "id": 308,
        "Latitude (average)": 12.1167,
        "Longitude (average)": -61.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guadeloupe",
        "id": 312,
        "Latitude (average)": 16.25,
        "Longitude (average)": -61.5833
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guam",
        "id": 316,
        "Latitude (average)": 13.4667,
        "Longitude (average)": 144.7833
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guatemala",
        "id": 320,
        "Latitude (average)": 15.5,
        "Longitude (average)": -90.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guernsey",
        "id": 831,
        "Latitude (average)": 49.5,
        "Longitude (average)": -2.56
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guinea",
        "id": 324,
        "Latitude (average)": 11,
        "Longitude (average)": -10
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guinea-Bissau",
        "id": 624,
        "Latitude (average)": 12,
        "Longitude (average)": -15
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Guyana",
        "id": 328,
        "Latitude (average)": 5,
        "Longitude (average)": -59
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Haiti",
        "id": 332,
        "Latitude (average)": 19,
        "Longitude (average)": -72.4167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Heard Island and McDonald Islands",
        "id": 334,
        "Latitude (average)": -53.1,
        "Longitude (average)": 72.5167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Holy See (Vatican City State)",
        "id": 336,
        "Latitude (average)": 41.9,
        "Longitude (average)": 12.45
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Honduras",
        "id": 340,
        "Latitude (average)": 15,
        "Longitude (average)": -86.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Hong Kong",
        "id": 344,
        "Latitude (average)": 22.25,
        "Longitude (average)": 114.1667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Iceland",
        "id": 352,
        "Latitude (average)": 65,
        "Longitude (average)": -18
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "India",
        "id": 356,
        "Latitude (average)": 20,
        "Longitude (average)": 77
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Indonesia",
        "id": 360,
        "Latitude (average)": -5,
        "Longitude (average)": 120
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Iran,Islamic Republic of",
        "id": 364,
        "Latitude (average)": 32,
        "Longitude (average)": 53
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Iraq",
        "id": 368,
        "Latitude (average)": 33,
        "Longitude (average)": 44
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Isle of Man",
        "id": 833,
        "Latitude (average)": 54.23,
        "Longitude (average)": -4.55
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Israel",
        "id": 376,
        "Latitude (average)": 31.5,
        "Longitude (average)": 34.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Jamaica",
        "id": 388,
        "Latitude (average)": 18.25,
        "Longitude (average)": -77.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Japan",
        "id": 392,
        "Latitude (average)": 36,
        "Longitude (average)": 138
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Jersey",
        "id": 832,
        "Latitude (average)": 49.21,
        "Longitude (average)": -2.13
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Jordan",
        "id": 400,
        "Latitude (average)": 31,
        "Longitude (average)": 36
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Kazakhstan",
        "id": 398,
        "Latitude (average)": 48,
        "Longitude (average)": 68
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Kenya",
        "id": 404,
        "Latitude (average)": 1,
        "Longitude (average)": 38
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Kiribati",
        "id": 296,
        "Latitude (average)": 1.4167,
        "Longitude (average)": 173
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Korea,Democratic People's Republic of",
        "id": 408,
        "Latitude (average)": 40,
        "Longitude (average)": 127
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Korea,Republic of",
        "id": 410,
        "Latitude (average)": 37,
        "Longitude (average)": 127.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "South Korea",
        "id": 410,
        "Latitude (average)": 37,
        "Longitude (average)": 127.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Kuwait",
        "id": 414,
        "Latitude (average)": 29.3375,
        "Longitude (average)": 47.6581
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Kyrgyzstan",
        "id": 417,
        "Latitude (average)": 41,
        "Longitude (average)": 75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Lao People's Democratic Republic",
        "id": 418,
        "Latitude (average)": 18,
        "Longitude (average)": 105
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Lebanon",
        "id": 422,
        "Latitude (average)": 33.8333,
        "Longitude (average)": 35.8333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Lesotho",
        "id": 426,
        "Latitude (average)": -29.5,
        "Longitude (average)": 28.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Liberia",
        "id": 430,
        "Latitude (average)": 6.5,
        "Longitude (average)": -9.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Libyan Arab Jamahiriya",
        "id": 434,
        "Latitude (average)": 25,
        "Longitude (average)": 17
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Libya",
        "id": 434,
        "Latitude (average)": 25,
        "Longitude (average)": 17
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Liechtenstein",
        "id": 438,
        "Latitude (average)": 47.1667,
        "Longitude (average)": 9.5333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Macao",
        "id": 446,
        "Latitude (average)": 22.1667,
        "Longitude (average)": 113.55
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Macedonia,the former Yugoslav Republic of",
        "id": 807,
        "Latitude (average)": 41.8333,
        "Longitude (average)": 22
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Madagascar",
        "id": 450,
        "Latitude (average)": -20,
        "Longitude (average)": 47
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Malawi",
        "id": 454,
        "Latitude (average)": -13.5,
        "Longitude (average)": 34
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Malaysia",
        "id": 458,
        "Latitude (average)": 2.5,
        "Longitude (average)": 112.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Maldives",
        "id": 462,
        "Latitude (average)": 3.25,
        "Longitude (average)": 73
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mali",
        "id": 466,
        "Latitude (average)": 17,
        "Longitude (average)": -4
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Marshall Islands",
        "id": 584,
        "Latitude (average)": 9,
        "Longitude (average)": 168
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Martinique",
        "id": 474,
        "Latitude (average)": 14.6667,
        "Longitude (average)": -61
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mauritania",
        "id": 478,
        "Latitude (average)": 20,
        "Longitude (average)": -12
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mauritius",
        "id": 480,
        "Latitude (average)": -20.2833,
        "Longitude (average)": 57.55
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mayotte",
        "id": 175,
        "Latitude (average)": -12.8333,
        "Longitude (average)": 45.1667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mexico",
        "id": 484,
        "Latitude (average)": 23,
        "Longitude (average)": -102
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Micronesia,Federated States of",
        "id": 583,
        "Latitude (average)": 6.9167,
        "Longitude (average)": 158.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Moldova,Republic of",
        "id": 498,
        "Latitude (average)": 47,
        "Longitude (average)": 29
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Monaco",
        "id": 492,
        "Latitude (average)": 43.7333,
        "Longitude (average)": 7.4
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mongolia",
        "id": 496,
        "Latitude (average)": 46,
        "Longitude (average)": 105
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Montenegro",
        "id": 499,
        "Latitude (average)": 42,
        "Longitude (average)": 19
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Montserrat",
        "id": 500,
        "Latitude (average)": 16.75,
        "Longitude (average)": -62.2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Morocco",
        "id": 504,
        "Latitude (average)": 32,
        "Longitude (average)": -5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Mozambique",
        "id": 508,
        "Latitude (average)": -18.25,
        "Longitude (average)": 35
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Myanmar",
        "id": 104,
        "Latitude (average)": 22,
        "Longitude (average)": 98
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Burma",
        "id": 104,
        "Latitude (average)": 22,
        "Longitude (average)": 98
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Namibia",
        "id": 516,
        "Latitude (average)": -22,
        "Longitude (average)": 17
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Nauru",
        "id": 520,
        "Latitude (average)": -0.5333,
        "Longitude (average)": 166.9167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Nepal",
        "id": 524,
        "Latitude (average)": 28,
        "Longitude (average)": 84
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Netherlands Antilles",
        "id": 530,
        "Latitude (average)": 12.25,
        "Longitude (average)": -68.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "New Caledonia",
        "id": 540,
        "Latitude (average)": -21.5,
        "Longitude (average)": 165.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "New Zealand",
        "id": 554,
        "Latitude (average)": -41,
        "Longitude (average)": 174
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Nicaragua",
        "id": 558,
        "Latitude (average)": 13,
        "Longitude (average)": -85
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Niger",
        "id": 562,
        "Latitude (average)": 16,
        "Longitude (average)": 8
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Nigeria",
        "id": 566,
        "Latitude (average)": 10,
        "Longitude (average)": 8
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Niue",
        "id": 570,
        "Latitude (average)": -19.0333,
        "Longitude (average)": -169.8667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Norfolk Island",
        "id": 574,
        "Latitude (average)": -29.0333,
        "Longitude (average)": 167.95
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Northern Mariana Islands",
        "id": 580,
        "Latitude (average)": 15.2,
        "Longitude (average)": 145.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Norway",
        "id": 578,
        "Latitude (average)": 62,
        "Longitude (average)": 10
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Oman",
        "id": 512,
        "Latitude (average)": 21,
        "Longitude (average)": 57
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Pakistan",
        "id": 586,
        "Latitude (average)": 30,
        "Longitude (average)": 70
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Palau",
        "id": 585,
        "Latitude (average)": 7.5,
        "Longitude (average)": 134.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Palestinian Territory,Occupied",
        "id": 275,
        "Latitude (average)": 32,
        "Longitude (average)": 35.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Panama",
        "id": 591,
        "Latitude (average)": 9,
        "Longitude (average)": -80
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Papua New Guinea",
        "id": 598,
        "Latitude (average)": -6,
        "Longitude (average)": 147
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Paraguay",
        "id": 600,
        "Latitude (average)": -23,
        "Longitude (average)": -58
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Peru",
        "id": 604,
        "Latitude (average)": -10,
        "Longitude (average)": -76
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Philippines",
        "id": 608,
        "Latitude (average)": 13,
        "Longitude (average)": 122
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Pitcairn",
        "id": 612,
        "Latitude (average)": -24.7,
        "Longitude (average)": -127.4
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Puerto Rico",
        "id": 630,
        "Latitude (average)": 18.25,
        "Longitude (average)": -66.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Qatar",
        "id": 634,
        "Latitude (average)": 25.5,
        "Longitude (average)": 51.25
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Réunion",
        "id": 638,
        "Latitude (average)": -21.1,
        "Longitude (average)": 55.6
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Russian Federation",
        "id": 643,
        "Latitude (average)": 60,
        "Longitude (average)": 100
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Russia",
        "id": 643,
        "Latitude (average)": 60,
        "Longitude (average)": 100
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Rwanda",
        "id": 646,
        "Latitude (average)": -2,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Helena,Ascension and Tristan da Cunha",
        "id": 654,
        "Latitude (average)": -15.9333,
        "Longitude (average)": -5.7
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Kitts and Nevis",
        "id": 659,
        "Latitude (average)": 17.3333,
        "Longitude (average)": -62.75
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Lucia",
        "id": 662,
        "Latitude (average)": 13.8833,
        "Longitude (average)": -61.1333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Pierre and Miquelon",
        "id": 666,
        "Latitude (average)": 46.8333,
        "Longitude (average)": -56.3333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Vincent and the Grenadines",
        "id": 670,
        "Latitude (average)": 13.25,
        "Longitude (average)": -61.2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saint Vincent & the Grenadines",
        "id": 670,
        "Latitude (average)": 13.25,
        "Longitude (average)": -61.2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "St. Vincent and the Grenadines",
        "id": 670,
        "Latitude (average)": 13.25,
        "Longitude (average)": -61.2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Samoa",
        "id": 882,
        "Latitude (average)": -13.5833,
        "Longitude (average)": -172.3333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "San Marino",
        "id": 674,
        "Latitude (average)": 43.7667,
        "Longitude (average)": 12.4167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Sao Tome and Principe",
        "id": 678,
        "Latitude (average)": 1,
        "Longitude (average)": 7
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Saudi Arabia",
        "id": 682,
        "Latitude (average)": 25,
        "Longitude (average)": 45
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Senegal",
        "id": 686,
        "Latitude (average)": 14,
        "Longitude (average)": -14
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Serbia",
        "id": 688,
        "Latitude (average)": 44,
        "Longitude (average)": 21
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Seychelles",
        "id": 690,
        "Latitude (average)": -4.5833,
        "Longitude (average)": 55.6667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Sierra Leone",
        "id": 694,
        "Latitude (average)": 8.5,
        "Longitude (average)": -11.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Singapore",
        "id": 702,
        "Latitude (average)": 1.3667,
        "Longitude (average)": 103.8
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Solomon Islands",
        "id": 90,
        "Latitude (average)": -8,
        "Longitude (average)": 159
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Somalia",
        "id": 706,
        "Latitude (average)": 10,
        "Longitude (average)": 49
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "South Africa",
        "id": 710,
        "Latitude (average)": -29,
        "Longitude (average)": 24
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "South Georgia and the South Sandwich Islands",
        "id": 239,
        "Latitude (average)": -54.5,
        "Longitude (average)": -37
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "South Sudan",
        "id": 728,
        "Latitude (average)": 8,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Sri Lanka",
        "id": 144,
        "Latitude (average)": 7,
        "Longitude (average)": 81
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Sudan",
        "id": 736,
        "Latitude (average)": 15,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Suriname",
        "id": 740,
        "Latitude (average)": 4,
        "Longitude (average)": -56
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Svalbard and Jan Mayen",
        "id": 744,
        "Latitude (average)": 78,
        "Longitude (average)": 20
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Swaziland",
        "id": 748,
        "Latitude (average)": -26.5,
        "Longitude (average)": 31.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Switzerland",
        "id": 756,
        "Latitude (average)": 47,
        "Longitude (average)": 8
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Syrian Arab Republic",
        "id": 760,
        "Latitude (average)": 35,
        "Longitude (average)": 38
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Taiwan,Province of China",
        "id": 158,
        "Latitude (average)": 23.5,
        "Longitude (average)": 121
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Taiwan",
        "id": 158,
        "Latitude (average)": 23.5,
        "Longitude (average)": 121
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tajikistan",
        "id": 762,
        "Latitude (average)": 39,
        "Longitude (average)": 71
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tanzania,United Republic of",
        "id": 834,
        "Latitude (average)": -6,
        "Longitude (average)": 35
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Thailand",
        "id": 764,
        "Latitude (average)": 15,
        "Longitude (average)": 100
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Timor-Leste",
        "id": 626,
        "Latitude (average)": -8.55,
        "Longitude (average)": 125.5167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Togo",
        "id": 768,
        "Latitude (average)": 8,
        "Longitude (average)": 1.1667
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tokelau",
        "id": 772,
        "Latitude (average)": -9,
        "Longitude (average)": -172
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tonga",
        "id": 776,
        "Latitude (average)": -20,
        "Longitude (average)": -175
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Trinidad and Tobago",
        "id": 780,
        "Latitude (average)": 11,
        "Longitude (average)": -61
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tunisia",
        "id": 788,
        "Latitude (average)": 34,
        "Longitude (average)": 9
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Turkey",
        "id": 792,
        "Latitude (average)": 39,
        "Longitude (average)": 35
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Turkmenistan",
        "id": 795,
        "Latitude (average)": 40,
        "Longitude (average)": 60
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Turks and Caicos Islands",
        "id": 796,
        "Latitude (average)": 21.75,
        "Longitude (average)": -71.5833
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Tuvalu",
        "id": 798,
        "Latitude (average)": -8,
        "Longitude (average)": 178
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Uganda",
        "id": 800,
        "Latitude (average)": 1,
        "Longitude (average)": 32
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Ukraine",
        "id": 804,
        "Latitude (average)": 49,
        "Longitude (average)": 32
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "United Arab Emirates",
        "id": 784,
        "Latitude (average)": 24,
        "Longitude (average)": 54
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "United Kingdom",
        "id": 826,
        "Latitude (average)": 54,
        "Longitude (average)": -2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "United States",
        "id": 840,
        "Latitude (average)": 38,
        "Longitude (average)": -97
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "United States Minor Outlying Islands",
        "id": 581,
        "Latitude (average)": 19.2833,
        "Longitude (average)": 166.6
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Uruguay",
        "id": 858,
        "Latitude (average)": -33,
        "Longitude (average)": -56
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Uzbekistan",
        "id": 860,
        "Latitude (average)": 41,
        "Longitude (average)": 64
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Vanuatu",
        "id": 548,
        "Latitude (average)": -16,
        "Longitude (average)": 167
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Venezuela,Bolivarian Republic of",
        "id": 862,
        "Latitude (average)": 8,
        "Longitude (average)": -66
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Venezuela",
        "id": 862,
        "Latitude (average)": 8,
        "Longitude (average)": -66
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Viet Nam",
        "id": 704,
        "Latitude (average)": 16,
        "Longitude (average)": 106
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Vietnam",
        "id": 704,
        "Latitude (average)": 16,
        "Longitude (average)": 106
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Virgin Islands,British",
        "id": 92,
        "Latitude (average)": 18.5,
        "Longitude (average)": -64.5
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Virgin Islands,U.S.",
        "id": 850,
        "Latitude (average)": 18.3333,
        "Longitude (average)": -64.8333
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Wallis and Futuna",
        "id": 876,
        "Latitude (average)": -13.3,
        "Longitude (average)": -176.2
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Western Sahara",
        "id": 732,
        "Latitude (average)": 24.5,
        "Longitude (average)": -13
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Yemen",
        "id": 887,
        "Latitude (average)": 15,
        "Longitude (average)": 48
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Zambia",
        "id": 894,
        "Latitude (average)": -15,
        "Longitude (average)": 30
      },
      {
        "Overall": null,
        "Coverage": null,
        "Openness": null,
        "Country": "Zimbabwe",
        "id": 716,
        "Latitude (average)": -20,
        "Longitude (average)": 30
      }
    ]
  }
};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div class="error" style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('odin_map');
      vegaEmbed("#odin_map", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
