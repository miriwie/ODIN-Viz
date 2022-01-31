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
      "legend": {"title": "Overall Score"},
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
  "height": 750,
  "projection": {"center": [10, 56], "scale": 670, "type": "mercator"},
  "transform": [
    {
      "lookup": "id",
      "from": {
        "data": {"name": "data-c2713db3446741d6ec6869e974f92f9d"},
        "key": "id",
        "fields": ["Overall", "Country", "Openness", "Coverage"]
      }
    }
  ],
  "width": 1000,
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
  "datasets": {
    "data-c2713db3446741d6ec6869e974f92f9d": [
      {
        "Country Code": "CYP",
        "Name": "Cyprus",
        "Overall": 62.3,
        "Coverage": 48.4,
        "Openness": 74.1,
        "Country": "Cyprus",
        "Alpha-2 code": "CY",
        "Alpha-3 code": "CYP",
        "id": 196,
        "Latitude (average)": 35,
        "Longitude (average)": 33
      },
      {
        "Country Code": "BGR",
        "Name": "Bulgaria",
        "Overall": 69.9,
        "Coverage": 65.9,
        "Openness": 73.2,
        "Country": "Bulgaria",
        "Alpha-2 code": "BG",
        "Alpha-3 code": "BGR",
        "id": 100,
        "Latitude (average)": 43,
        "Longitude (average)": 25
      },
      {
        "Country Code": "CZE",
        "Name": "Czech Republic",
        "Overall": 69.8,
        "Coverage": 71.1,
        "Openness": 68.8,
        "Country": "Czech Republic",
        "Alpha-2 code": "CZ",
        "Alpha-3 code": "CZE",
        "id": 203,
        "Latitude (average)": 49.75,
        "Longitude (average)": 15.5
      },
      {
        "Country Code": "HUN",
        "Name": "Hungary",
        "Overall": 65.3,
        "Coverage": 63.1,
        "Openness": 67.1,
        "Country": "Hungary",
        "Alpha-2 code": "HU",
        "Alpha-3 code": "HUN",
        "id": 348,
        "Latitude (average)": 47,
        "Longitude (average)": 20
      },
      {
        "Country Code": "POL",
        "Name": "Poland",
        "Overall": 85.3,
        "Coverage": 81.2,
        "Openness": 88.8,
        "Country": "Poland",
        "Alpha-2 code": "PL",
        "Alpha-3 code": "POL",
        "id": 616,
        "Latitude (average)": 52,
        "Longitude (average)": 20
      },
      {
        "Country Code": "ROU",
        "Name": "Romania",
        "Overall": 66.2,
        "Coverage": 57.9,
        "Openness": 73.2,
        "Country": "Romania",
        "Alpha-2 code": "RO",
        "Alpha-3 code": "ROU",
        "id": 642,
        "Latitude (average)": 46,
        "Longitude (average)": 25
      },
      {
        "Country Code": "SVK",
        "Name": "Slovakia",
        "Overall": 78.2,
        "Coverage": 66.2,
        "Openness": 88.5,
        "Country": "Slovakia",
        "Alpha-2 code": "SK",
        "Alpha-3 code": "SVK",
        "id": 703,
        "Latitude (average)": 48.6667,
        "Longitude (average)": 19.5
      },
      {
        "Country Code": "DNK",
        "Name": "Denmark",
        "Overall": 84.4,
        "Coverage": 74.4,
        "Openness": 93,
        "Country": "Denmark",
        "Alpha-2 code": "DK",
        "Alpha-3 code": "DNK",
        "id": 208,
        "Latitude (average)": 56,
        "Longitude (average)": 10
      },
      {
        "Country Code": "EST",
        "Name": "Estonia",
        "Overall": 70.2,
        "Coverage": 64,
        "Openness": 75.5,
        "Country": "Estonia",
        "Alpha-2 code": "EE",
        "Alpha-3 code": "EST",
        "id": 233,
        "Latitude (average)": 59,
        "Longitude (average)": 26
      },
      {
        "Country Code": "FIN",
        "Name": "Finland",
        "Overall": 84.8,
        "Coverage": 82.1,
        "Openness": 87.1,
        "Country": "Finland",
        "Alpha-2 code": "FI",
        "Alpha-3 code": "FIN",
        "id": 246,
        "Latitude (average)": 64,
        "Longitude (average)": 26
      },
      {
        "Country Code": "IRL",
        "Name": "Ireland",
        "Overall": 77.1,
        "Coverage": 61.4,
        "Openness": 90.4,
        "Country": "Ireland",
        "Alpha-2 code": "IE",
        "Alpha-3 code": "IRL",
        "id": 372,
        "Latitude (average)": 53,
        "Longitude (average)": -8
      },
      {
        "Country Code": "LVA",
        "Name": "Latvia",
        "Overall": 58.2,
        "Coverage": 51.8,
        "Openness": 63.6,
        "Country": "Latvia",
        "Alpha-2 code": "LV",
        "Alpha-3 code": "LVA",
        "id": 428,
        "Latitude (average)": 57,
        "Longitude (average)": 25
      },
      {
        "Country Code": "LTU",
        "Name": "Lithuania",
        "Overall": 73.8,
        "Coverage": 70,
        "Openness": 77,
        "Country": "Lithuania",
        "Alpha-2 code": "LT",
        "Alpha-3 code": "LTU",
        "id": 440,
        "Latitude (average)": 56,
        "Longitude (average)": 24
      },
      {
        "Country Code": "SWE",
        "Name": "Sweden",
        "Overall": 83.9,
        "Coverage": 77.6,
        "Openness": 89.3,
        "Country": "Sweden",
        "Alpha-2 code": "SE",
        "Alpha-3 code": "SWE",
        "id": 752,
        "Latitude (average)": 62,
        "Longitude (average)": 15
      },
      {
        "Country Code": "HRV",
        "Name": "Croatia",
        "Overall": 63.8,
        "Coverage": 58.9,
        "Openness": 68,
        "Country": "Croatia",
        "Alpha-2 code": "HR",
        "Alpha-3 code": "HRV",
        "id": 191,
        "Latitude (average)": 45.1667,
        "Longitude (average)": 15.5
      },
      {
        "Country Code": "GRC",
        "Name": "Greece",
        "Overall": 60.1,
        "Coverage": 55,
        "Openness": 64.6,
        "Country": "Greece",
        "Alpha-2 code": "GR",
        "Alpha-3 code": "GRC",
        "id": 300,
        "Latitude (average)": 39,
        "Longitude (average)": 22
      },
      {
        "Country Code": "ITA",
        "Name": "Italy",
        "Overall": 65.9,
        "Coverage": 53.5,
        "Openness": 76.5,
        "Country": "Italy",
        "Alpha-2 code": "IT",
        "Alpha-3 code": "ITA",
        "id": 380,
        "Latitude (average)": 42.8333,
        "Longitude (average)": 12.8333
      },
      {
        "Country Code": "MLT",
        "Name": "Malta",
        "Overall": 47.2,
        "Coverage": 44.4,
        "Openness": 49.1,
        "Country": "Malta",
        "Alpha-2 code": "MT",
        "Alpha-3 code": "MLT",
        "id": 470,
        "Latitude (average)": 35.8333,
        "Longitude (average)": 14.5833
      },
      {
        "Country Code": "PRT",
        "Name": "Portugal",
        "Overall": 66.5,
        "Coverage": 55.8,
        "Openness": 75.7,
        "Country": "Portugal",
        "Alpha-2 code": "PT",
        "Alpha-3 code": "PRT",
        "id": 620,
        "Latitude (average)": 39.5,
        "Longitude (average)": -8
      },
      {
        "Country Code": "SVN",
        "Name": "Slovenia",
        "Overall": 79.9,
        "Coverage": 70.7,
        "Openness": 87.7,
        "Country": "Slovenia",
        "Alpha-2 code": "SI",
        "Alpha-3 code": "SVN",
        "id": 705,
        "Latitude (average)": 46,
        "Longitude (average)": 15
      },
      {
        "Country Code": "ESP",
        "Name": "Spain",
        "Overall": 71.3,
        "Coverage": 68.4,
        "Openness": 73.7,
        "Country": "Spain",
        "Alpha-2 code": "ES",
        "Alpha-3 code": "ESP",
        "id": 724,
        "Latitude (average)": 40,
        "Longitude (average)": -4
      },
      {
        "Country Code": "AUT",
        "Name": "Austria",
        "Overall": 68.7,
        "Coverage": 60.1,
        "Openness": 76.1,
        "Country": "Austria",
        "Alpha-2 code": "AT",
        "Alpha-3 code": "AUT",
        "id": 40,
        "Latitude (average)": 47.3333,
        "Longitude (average)": 13.3333
      },
      {
        "Country Code": "BEL",
        "Name": "Belgium",
        "Overall": 45.5,
        "Coverage": 44.3,
        "Openness": 46.6,
        "Country": "Belgium",
        "Alpha-2 code": "BE",
        "Alpha-3 code": "BEL",
        "id": 56,
        "Latitude (average)": 50.8333,
        "Longitude (average)": 4
      },
      {
        "Country Code": "FRA",
        "Name": "France",
        "Overall": 62,
        "Coverage": 57.1,
        "Openness": 66.3,
        "Country": "France",
        "Alpha-2 code": "FR",
        "Alpha-3 code": "FRA",
        "id": 250,
        "Latitude (average)": 46,
        "Longitude (average)": 2
      },
      {
        "Country Code": "DEU",
        "Name": "Germany",
        "Overall": 77.3,
        "Coverage": 67,
        "Openness": 86,
        "Country": "Germany",
        "Alpha-2 code": "DE",
        "Alpha-3 code": "DEU",
        "id": 276,
        "Latitude (average)": 51,
        "Longitude (average)": 9
      },
      {
        "Country Code": "NLD",
        "Name": "Netherlands",
        "Overall": 81.5,
        "Coverage": 70,
        "Openness": 91.3,
        "Country": "Netherlands",
        "Alpha-2 code": "NL",
        "Alpha-3 code": "NLD",
        "id": 528,
        "Latitude (average)": 52.5,
        "Longitude (average)": 5.75
      },
      {
        "Country Code": "LUX",
        "Name": "Luxembourg",
        "Overall": 65.1,
        "Coverage": 46.5,
        "Openness": 80.9,
        "Country": "Luxembourg",
        "Alpha-2 code": "LU",
        "Alpha-3 code": "LUX",
        "id": 442,
        "Latitude (average)": 49.75,
        "Longitude (average)": 6.1667
      }
    ]
  }
}
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div class="error" style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('map');
      vegaEmbed("#map", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
