# graphql-coding-challenge

### Brief
Develop a JavaScript web application that fetches a relevantly-sized list of posts from the mock GraphQL API available at https://fakerql.stephix.uk/ and displays a histogram representing the number of posts created in each month of 2019.

### Requirements and Suggestions

* The application must be built using React, how you scaffold it is up to you
* We use Apollo for GraphQL API communication, but you can use a different solution if you feel it is better suited
* The histogram must be constructed using D3 or VX (recommended)
* Use Git for version control and to commit any progress you make
* Write a brief summary in your README about your process, your choices and any challenges you faced
* Please do not spend more than 4 hours on development for this task, just submit your progress at the end of that time

### Developing process

Upon reading the list of requirements, I was thinking to follow this process:
* Read the documentation for GraphQL/Apollo/vx and do some basic examples
* Create a basic React app
* Hook up the app to the provided GraphQL API and do some tests with the fetched data
* Process the fetched data:
  * Extract year and month from the timestamp of the posts
  * Filter the posts made in 2019
  * Count the elements of the array posted in each month
  * Final output should be an array of objects having the properties *month* and *postCount*
* Create a Chart component and import the relevant dependencies for a bar chart from vx. I used the basic template for a bar chart from [here](https://github.com/airbnb/visx). Since the API seems to be down, I used a mockup array as input data.
* Add some basic CSS styling

### Challenges

* The API seemed to be down for the whole day, so I tried to develop the app with a mockup set of data. The step of processing the graphQL query is missing at the moment, but I would like to give it a chance.
* It was my first time using GraphQL and vx, so I had to do some additional reading (around 1h) and do some test queries to the API to get familiarized with them.

### Improvements to make

* Finish the third step - the processing of the query output
* Add some labels on the left axis, to indicate the post count level
* Improve user experience by showing the postcount when a bar is hovered
* Maybe add a button to fetch another set of data and see how the chart changes
