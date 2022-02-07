# Discrepancies in governmental data publications of the EU states

## Table of Contents
- [Context](#context)
- [Concept](#concept)
- [Visualization Design](#munzner)
	- [Domain problem characterization](#Domain-problem)
	- [Data and task abstraction](#data-abstraction)
	- [Visual encoding and interaction design](#interaction-design)
	- [ Algorithm design](#algorithm-design)
- [Evaluation](#evaluation)
- [Interactive web-based visualization](#viz)

## Context <a name="context"></a>

The importance of openness of data has increased in recent years. Many new laws have been enacted to regulate and improve "Open Data". So for example, the 2003 and 2019 Open Data Directive of the EU, the OPEN Government Data Act in the USA or the Open-Data-Gesetz 2017 in Germany. Nevertheless, these laws mainly associate open data with openness. This is certainly one of the main aspects, however the coverage, i.e. the quantity and quality of the data, is not less important. While everyone is free to use the data, the problems cannot be solved without sufficient data. Since without qualitative data or without data in general, the best openness is worthless.

To help countries build better and more resilient national statistical systems, the <a href="https://opendatawatch.com" target="_blank" rel="noopener noreferrer">Open Data Watch</a> publishes the Odin score. ODIN rates the government publications on a score from 0 to 100 dividing it into both the openness and coverage of data.

## Concept <a name="concept"></a>
The concept of the visualization is to introduce the user to the ODIN score and then go into detail visualizing the problem, the missing coverage. For this purpose, the visualization is divided into four slides, from the general Odin Score to the coverage elements of the data categories. Thereby, users can select the countries and data categories that are relevant for them and use the explanatory texts, understand the complex topic.

## Visualization Design <a name="visualization-design"></a>

### Domain problem characterization <a name="Domain-problem"></a>

Access to the pulic released data has been an important topic in the last years. Therefore many countries have been making effort to improve the openness of their data. Nevertheless, such an important data component as coverage of the data has been neglected. Therefore many topics may not be able to be discussed through the absence of the date. Not only the quantity but also the quality of the data is the component of the coverage. So statistics with low coverage about a topic can be corrupted, which may have more severe consequences as if it not be discussed at all.

Our target group are (net-)politicians and people interested in politics from the EU. Prior knowledge is not necessary, but with a netpolitical background, many contexts might be better understood. Nevertheless, the coverage is not well-known among the people we talked to and Open Data itself is mainly associated with availability or usability. Since we did not talk to politicians, only to people interested in politics, we don't know if the coverage is a political issue at the moment. But since neither the political discourse is about it, nor the corresponding Open Data laws dealing with coverage, we assume that the topic is not beeing discussed either.

### Data and task abstraction <a name="data-abstraction"></a>

The task of this visualization is to create understanding of openness and coverage as independent data components, to make clear the importance of coverage component, as well as make users pay more attention to this coverage component and maybe contribute (as politicians) to improving the situation.
For the information about the ODIN dataset, purpose of it and whose behalf it was created see above [Context](#context). The used data set was collected in 2020. Open Data Watch analysed the governmental data releases. For example in Germany publications of the Statistisches Bundesamt.


### Visual encoding and interaction design <a name="interaction-design"></a>
The visualization includes four slides. On every slide is an textual description provided to make the complexity of the ODIN score undestandable.
 
- Overall View (map of Europe): Introducing the ODIN Score in countries of the EU
	- The used color scheme consists of distinguishable shades of green, from light to dark. Countries not considered are marked in gray.
	- By using a tooltip with the exact score value countries in the same color group can be compared.
- Comparison View (barchart + scatterplott): Compare the Opennes and the Coverage for different EU countries in the barchart and showing an overview including the overall score in the scatterplot.
	- The color scheme in the barchart consists of blue for openness and red for coverage. The scatterplot, uses the same color scheme as the map, as it is also used to visualize the ODIN score.
	- With a mouse hover selection the individual bars and exact values can be viewed. It also clarifies the layered barchart. In the scatterplot all three values, openness coverage and the overall ODIN score can be viewed in a tooltip.
- Data Categories View (bubblechart): Show the coverage score in different data categories on a symple coverage axis from 0 to 100. The different statistical fields are displayed on different levels and in different colors.
	- The three statistical fields and the overall score are color coded with blue, red, purple and black. But other blue and red tones are used than in the barchart.
	- The embadded plotly graph offers many possibilities of interaction, from zoom, to displaying the exact value or disabling parts of the legend. In addition, the name of the data category is displayed in a tooltip.
- Coverage Element View (barchart): By selecting a data category the coverage elements of the data category are plotted in a bar chart.
	- The bars are visualized in another shade of blue. Since only the scores are visualized, no further colors are necessary.
	- There is also a tooltip with the coverage value and the plotly interactions.

The background and highlight color are the color scheme of the ODIN score (light blue and orange).

### Algorithm Design <a name="algorithm-design"></a>

The ODIN data set contains data for 187 countries (4836 rows x 19 columns). Since only the EU states are considered in the visualization, the data set could be reduced to 702 rows. In addition, data frames were created for the different visualizations with the necessary data in each case in order to process only the smallest possible sets.

The biggest bottleneck are currently the embedded plotly graphs. Due to the current inefficient code the website takes a few seconds to load.

## Evaluation <a name="evaluation"></a>

What did not work as expected?
Due to bad time management, the prototype was not finished until shortly before the deadline and could not be tested sufficiently. As a result, tests with the target group were also not possible any more.
We have planed to implement animations and more interactions between the visualisations, but because of the limited Java script knowledge it was not possible.

What would you improve if you had more time? 
Implement animation to involve the user in the topic and more interaction possibilities for better usability with Java Script using React and D3 libraries. 
The loading of the website is also a little bit to long because of the bottle neck. This Issues could be also solved with Java Script.

If you used other libraries or frameworks other than Altair please explain briefly why.
For the third and forth Visualisation We used plotly in python, because we aimed to create interaction and animation, because Altair hardly offers that possibilities. But how it turned out plotly in python hasn’t been better than Altair at this point. I also tried to use plotly in Java Script, but it required Java Script experience.

## Interactive web-based visualization <a name="viz"></a>

See our visualization at https://miriwie.github.io/ODIN-Viz/

<!--## To-Do-->
<!--- [X] To-Do list-->
<!--- [X] redesign barchart-->
<!--- [X] redesign map-->
<!--- [X] Implement text description-->
<!--- [X] css design-->
<!--- [X] add intractions-->
<!--- [ ] add bubble animation-->
<!--- [ ] implement language change-->
