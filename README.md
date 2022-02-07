# Discrepancy in public data publications

## Context <a name="context"></a>

The openness of data has increased in importance in recent years. Many new laws have been enacted to regulate and improve "Open Data". For example, the 2003 and 2019 Open Data Directive of the EU, the OPEN Government Data Act in the USA or the Open-Data-Gesetz 2017 in Germany. But these laws mainly associate openness with open data. This is certainly one of the main aspects, but at least as important is the coverage, i.e. the quantity and quality of the data. Because without qualitative data or without data in general, the best openness is worthless. While everyone is free to use the data, the problems cannot be solved without sufficient data.

To help countries build better and more resilient national statistical systems, the <a href="https://opendatawatch.com" target="_blank" rel="noopener noreferrer">Open Data Watch</a> publishes the Odin score. ODIN rates the government publications on a score from 0 to 100 dividing it into both the openness and coverage of data.

## Concept <a name="concept"></a>
The concept of the visualization is to introduce the user to the ODIN score and then go into detail to visualize the problem, the missing coverage. For this purpose, the visualization is divided into 4 slides. From the general Odin Score, to the coverage elements of the data categories. Thereby, users can select the countries and data categories that are relevant for them.

## Visualization Design <a name="visualization-design"></a>

### Domain problem characterization <a name="Domain problem characterization"></a>


### Data and task abstraction <a name="data-abstraction"></a>


### Visual encoding and interaction design <a name="interaction-design"></a>
The visualization includes 4 slides. On every slide is an textual description to undestand the complexity of the ODIN score. 
- Overall View (map of europe): Introducing the ODIN Score in countries of the EU
	- The used color scheme consists of distinguishable shades of green, from light to dark. Countries not considered are marked in gray.
	- By using a tooltip with the exact score value, countries in the same color group can be compared.
- Comparison View (barchart + scatterplott): Compare the Opennes and the Coverage for different EU countries in the barchart and showing an overview including the overall score in the scatterplot.
	- The color scheme in the barchart consists of blue for openness and red for coverage. The scatterplot, uses the same color scheme as the map, as it is also used to visualize the ODIN score.
	- With a mouse hover selection, the individual bars and exact values can be viewed. It also clarifies the layered barchart. In the scatterplot all three values, openness coverage and the overall ODIN score can be viewed in a tooltip.
- Data Categories View (bubblechart): Show the coverage score in different data categories on a symple coverage axis from 0 to 100. The different statistical fields are displayed on different levels and in different colors.
	- The three statistical fields and the overall score are color coded with blue, red, purple and black. But other blue and red tones are used than in the barchart.
	- 
- Coverage Element View (barchart): By selecting a data category, the coverage elements of the data category are plotted in a bar chart.

The background and highlight color are the color scheme of the ODIN score (light blue and orange).

### Algorithm Design <a name="algorithm-design"></a>

## Interactive web-based visualization

See our visualization at https://miriwie.github.io/ODIN-Viz/

To-Do:
- [X] To-Do list
- [X] redesign barchart
- [X] redesign map
- [X] Implement text description
- [X] css design
- [X] add intractions
- [ ] add bubble animation
- [ ] implement language change
