(function(vegaEmbed) {
	var spec = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
  "data": {"name": "data-a9cc25744e11b56aee79e4c1ff46ece7"},
  "mark": "bar",
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "Type",
      "legend": {"orient": "top", "title": "", "titleAnchor": "middle"},
      "scale": {"range": ["#b91f13", "#4682b4"]}
    },
    "opacity": {
      "condition": {"value": 0.7, "selection": "selector131"},
      "value": 0.2
    },
    "tooltip": [
      {"type": "nominal", "field": "Country"},
      {"type": "nominal", "field": "Type", "title": "Type"},
      {"type": "quantitative", "field": "Score", "title": "Score"}
    ],
    "x": {"type": "nominal", "field": "Country"},
    "y": {"type": "quantitative", "field": "Score", "stack": null}
  },
  "height": "container",
  "selection": {
    "selector131": {
      "type": "single",
      "on": "mouseover",
      "fields": ["Type", "Country"]
    }
  },
  "width": "container",
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
  "datasets": {
    "data-a9cc25744e11b56aee79e4c1ff46ece7": [
      {
        "Country_Code": "CYP",
        "Country": "Cyprus",
        "Overall": 62.3,
        "Score": 74.1,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "BGR",
        "Country": "Bulgaria",
        "Overall": 69.9,
        "Score": 73.2,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "HUN",
        "Country": "Hungary",
        "Overall": 65.3,
        "Score": 67.1,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "POL",
        "Country": "Poland",
        "Overall": 85.3,
        "Score": 88.8,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "ROU",
        "Country": "Romania",
        "Overall": 66.2,
        "Score": 73.2,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "SVK",
        "Country": "Slovakia",
        "Overall": 78.2,
        "Score": 88.5,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "DNK",
        "Country": "Denmark",
        "Overall": 84.4,
        "Score": 93,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "EST",
        "Country": "Estonia",
        "Overall": 70.2,
        "Score": 75.5,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "FIN",
        "Country": "Finland",
        "Overall": 84.8,
        "Score": 87.1,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "IRL",
        "Country": "Ireland",
        "Overall": 77.1,
        "Score": 90.4,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "LVA",
        "Country": "Latvia",
        "Overall": 58.2,
        "Score": 63.6,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "LTU",
        "Country": "Lithuania",
        "Overall": 73.8,
        "Score": 77,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "SWE",
        "Country": "Sweden",
        "Overall": 83.9,
        "Score": 89.3,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "HRV",
        "Country": "Croatia",
        "Overall": 63.8,
        "Score": 68,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "GRC",
        "Country": "Greece",
        "Overall": 60.1,
        "Score": 64.6,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "ITA",
        "Country": "Italy",
        "Overall": 65.9,
        "Score": 76.5,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "MLT",
        "Country": "Malta",
        "Overall": 47.2,
        "Score": 49.1,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "PRT",
        "Country": "Portugal",
        "Overall": 66.5,
        "Score": 75.7,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "SVN",
        "Country": "Slovenia",
        "Overall": 79.9,
        "Score": 87.7,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "ESP",
        "Country": "Spain",
        "Overall": 71.3,
        "Score": 73.7,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "AUT",
        "Country": "Austria",
        "Overall": 68.7,
        "Score": 76.1,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "BEL",
        "Country": "Belgium",
        "Overall": 45.5,
        "Score": 46.6,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "FRA",
        "Country": "France",
        "Overall": 62,
        "Score": 66.3,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "DEU",
        "Country": "Germany",
        "Overall": 77.3,
        "Score": 86,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "NLD",
        "Country": "Netherlands",
        "Overall": 81.5,
        "Score": 91.3,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "LUX",
        "Country": "Luxembourg",
        "Overall": 65.1,
        "Score": 80.9,
        "Type": "Openness",
        "Openness": null
      },
      {
        "Country_Code": "CZE",
        "Country": "Czech Republic",
        "Overall": 69.8,
        "Score": 71.1,
        "Type": "Coverage",
        "Openness": 68.8
      },
      {
        "Country_Code": "CYP",
        "Country": "Cyprus",
        "Overall": 62.3,
        "Score": 48.4,
        "Type": "Coverage",
        "Openness": 74.1
      },
      {
        "Country_Code": "BGR",
        "Country": "Bulgaria",
        "Overall": 69.9,
        "Score": 65.9,
        "Type": "Coverage",
        "Openness": 73.2
      },
      {
        "Country_Code": "HUN",
        "Country": "Hungary",
        "Overall": 65.3,
        "Score": 63.1,
        "Type": "Coverage",
        "Openness": 67.1
      },
      {
        "Country_Code": "POL",
        "Country": "Poland",
        "Overall": 85.3,
        "Score": 81.2,
        "Type": "Coverage",
        "Openness": 88.8
      },
      {
        "Country_Code": "ROU",
        "Country": "Romania",
        "Overall": 66.2,
        "Score": 57.9,
        "Type": "Coverage",
        "Openness": 73.2
      },
      {
        "Country_Code": "SVK",
        "Country": "Slovakia",
        "Overall": 78.2,
        "Score": 66.2,
        "Type": "Coverage",
        "Openness": 88.5
      },
      {
        "Country_Code": "DNK",
        "Country": "Denmark",
        "Overall": 84.4,
        "Score": 74.4,
        "Type": "Coverage",
        "Openness": 93
      },
      {
        "Country_Code": "EST",
        "Country": "Estonia",
        "Overall": 70.2,
        "Score": 64,
        "Type": "Coverage",
        "Openness": 75.5
      },
      {
        "Country_Code": "FIN",
        "Country": "Finland",
        "Overall": 84.8,
        "Score": 82.1,
        "Type": "Coverage",
        "Openness": 87.1
      },
      {
        "Country_Code": "IRL",
        "Country": "Ireland",
        "Overall": 77.1,
        "Score": 61.4,
        "Type": "Coverage",
        "Openness": 90.4
      },
      {
        "Country_Code": "LVA",
        "Country": "Latvia",
        "Overall": 58.2,
        "Score": 51.8,
        "Type": "Coverage",
        "Openness": 63.6
      },
      {
        "Country_Code": "LTU",
        "Country": "Lithuania",
        "Overall": 73.8,
        "Score": 70,
        "Type": "Coverage",
        "Openness": 77
      },
      {
        "Country_Code": "SWE",
        "Country": "Sweden",
        "Overall": 83.9,
        "Score": 77.6,
        "Type": "Coverage",
        "Openness": 89.3
      },
      {
        "Country_Code": "HRV",
        "Country": "Croatia",
        "Overall": 63.8,
        "Score": 58.9,
        "Type": "Coverage",
        "Openness": 68
      },
      {
        "Country_Code": "GRC",
        "Country": "Greece",
        "Overall": 60.1,
        "Score": 55,
        "Type": "Coverage",
        "Openness": 64.6
      },
      {
        "Country_Code": "ITA",
        "Country": "Italy",
        "Overall": 65.9,
        "Score": 53.5,
        "Type": "Coverage",
        "Openness": 76.5
      },
      {
        "Country_Code": "MLT",
        "Country": "Malta",
        "Overall": 47.2,
        "Score": 44.4,
        "Type": "Coverage",
        "Openness": 49.1
      },
      {
        "Country_Code": "PRT",
        "Country": "Portugal",
        "Overall": 66.5,
        "Score": 55.8,
        "Type": "Coverage",
        "Openness": 75.7
      },
      {
        "Country_Code": "SVN",
        "Country": "Slovenia",
        "Overall": 79.9,
        "Score": 70.7,
        "Type": "Coverage",
        "Openness": 87.7
      },
      {
        "Country_Code": "ESP",
        "Country": "Spain",
        "Overall": 71.3,
        "Score": 68.4,
        "Type": "Coverage",
        "Openness": 73.7
      },
      {
        "Country_Code": "AUT",
        "Country": "Austria",
        "Overall": 68.7,
        "Score": 60.1,
        "Type": "Coverage",
        "Openness": 76.1
      },
      {
        "Country_Code": "BEL",
        "Country": "Belgium",
        "Overall": 45.5,
        "Score": 44.3,
        "Type": "Coverage",
        "Openness": 46.6
      },
      {
        "Country_Code": "FRA",
        "Country": "France",
        "Overall": 62,
        "Score": 57.1,
        "Type": "Coverage",
        "Openness": 66.3
      },
      {
        "Country_Code": "DEU",
        "Country": "Germany",
        "Overall": 77.3,
        "Score": 67,
        "Type": "Coverage",
        "Openness": 86
      },
      {
        "Country_Code": "NLD",
        "Country": "Netherlands",
        "Overall": 81.5,
        "Score": 70,
        "Type": "Coverage",
        "Openness": 91.3
      },
      {
        "Country_Code": "LUX",
        "Country": "Luxembourg",
        "Overall": 65.1,
        "Score": 46.5,
        "Type": "Coverage",
        "Openness": 80.9
      },
      {
        "Country_Code": "CZE",
        "Country": "Czech Republic",
        "Overall": 69.8,
        "Score": 68.8,
        "Type": "Openness",
        "Openness": null
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
      const el = document.getElementById('linked');
      vegaEmbed("#linked", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
