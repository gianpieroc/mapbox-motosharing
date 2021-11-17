
React Native Technical Test
===========================


You will build a tiny Yego App in React-Native, with Redux. The objective will be to test your technical skills and knowledge of this language. You will not be evaluated on the graphical quality of your application but on the way you implemented and structured it.
You are free to work on IOS or Android (or both if you can).

Feel free to ask me questions if needed, by email at pablo.giraud-carrier@rideyego.com

## Subject

You must display our scooters on a map, represented by markers. The position of the user must also be displayed.

* Display an **orange** marker if the scooter status is available and is not selected,
* Display a **black** marker if the scooter status is booked,
* Display a **green** marker if the scooter is selected,
* Display a **red** marker for all other statuses.

We must be able to select an **available** scooter by clicking on its marker. Only the scooters with the status **available** can be selected. At the bottom of the map, you must display on a panel the name and battery level of the selected scooter and the distance between it and the user. By default, the nearest available scooter must be selected.

Status name   | value
--------------|------
AVAILABLE     | 0
BOOKED        | 1
BATTERY ALERT | 2
GPS ALERT     | 3
MAINTENANCE   | 4
DISABLED      | 5
TOW           | 6

On the left of the panel, a button must allow the user to select the previously available scooter, depending on the distance to the user. If there is no scooter closer to the user, the button must not be clickable.

On the right of the panel, a button must allow the user to select the next available scooter, depending on the distance to the user. If there is no scooter further away or the distance of the next scooter to the user exceeds 1200m, the button must not be clickable.

## Specifications

To get the list of scooters, you will have to send a request to the server, using the GET method to this URL: `https://lambda.rideyego.com/technical-test`.

You will have to pass the API token as a parameter in the header :

key       | value
----------|------
x-api-key | *(check the pdf to see the api key)*

Here is a Google Maps API key you can use for the project if you need it: `(check the pdf to see the Google Maps API key)`

Here is a list of libraries that we use in the current application and that could be useful for the realization of this test :

Library name                            | Description                                                                       | Link
----------------------------------------|-----------------------------------------------------------------------------------|------
react-native-maps v0.29.4               | Used to display a map. We use Google Map on Android and MapKit on IOS (defaults). | https://github.com/react-native-community/react-native-maps
react-native-geolocation-service v5.2.0 | Used to get the location of the user on Android and IOS.                          | https://github.com/Agontuk/react-native-geolocation-service
react-redux v7.2.6                      | Official React bindings for Redux.                                                | https://github.com/reduxjs/react-redux
redux v4.1.2                            | The Redux library, a predictable state container for JavaScript apps.             | https://github.com/reduxjs/redux
redux-thunk v2.4.0                      | Thunk middleware for Redux.                                                       | https://github.com/reduxjs/redux-thunk
reselect v4.1.4                         | Selectors for redux                                                               | https://github.com/reduxjs/reselect 

You can fork the Github repository containing a default application and the libraries already installed to save time and get started quickly:
	- SSH: `git@github.com:GETYUGO/app-technical-test.git`
	- HTTPS: `https://github.com/GETYUGO/app-technical-test.git`

Good luck and have fun! :)
