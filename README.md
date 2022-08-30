## Setup

Clone this repo and run `npm i` and then `npm start`

## Project Instructions

#### Getting Familiar (DON'T SKIP THIS)

* We're continuing to make make the Cars App more robust. This time we've added a Pie Chart, total, the ability to add and remove cars. Take a minute to go through the following files (under the components folder):
    * Dashboard.js
    * Chart.js
    * Total.js
    * AddCar.js

* Also, make sure to run the app and go to the dashboard page to see these components in action. Keep in mind that there are things that aren't connected yet. 

#### Project Work

* The first thing we need to do is create an `actions.js` file underneath our "redux" folder.

##### addCar

* Now, let's create an `action creator` called "addCar" that takes one parameter called "car". Have it return an object whose type is "ADD_CAR" and its value is the car parameter.

* Now we need to go to our `reducers.js` file and update the "cars" reducer. First, give it a second parameter called "action". This will represent whichever action is passed in on dispatch. Now it's time to change this function and give it a switch statement. You can reference prior material for this but ultimately we want to switch on `(action.type)`, provide a case for `ADD_CAR` that returns a copy of the state array plus the new car (`[ ...state, action.value]`) and handle the default case that simply returns the state.

* We will be dispatching this action from the `AddCar` component so let's go look at that now. Notice there is a form that is collecting the input data. It happens in a dialog box that appears when you click the "Add Car" button on the dashboard page.

* We need to create a container for this component so that we can hook it up to Redux. Create a file called `AddCar.js` under the containers folder.

* Import the `{ connect }` function at the top of the file like we have in the other containers. Then, import the `AddCar` component from the components file. We also need to import the action so import `{ addCar }` from the "redux/actions" file.

* Now we are going to write a `mapDispatchToProps` function. Remember, it takes one argument called "dispatch" and it returns an object whose keys are the props you want to pass. For us we will create a key called "addCar" and we'll set its value to a function that dispatches our "addCar" action creator. It looks like this: `(car) => dispatch(addCar(car))`. The car on the left will be passed from our component when we call this function. It will then be passed onto the inner "addCar" function.

* Remember to "connect" this function to the AddCar component and export it. A little tip this time, since there is no mapStateToProps function we need to pass `null` in its place. It's expected as the first parameter of the `connect` function. So our export will look like this: `export default connect(null, mapDispatchToProps)(AddCar)`

* Now we will go to the `Dashboard` component and swap out the import at the top so that the "AddCar" component references the new "container" instead of the regular "component".

* Finally, go to the AddCar COMPONENT and find the `handleSubmit` function. Pass that payload to our prop function. Basically, call `this.props.addCar(payload)`. Underneath that, call `this.setState({ open: false })` to close the dialog box. The new car should be added to the bottom of the list.

##### removeCar

* Ok we can add cars to our table but now we need to be able to remove them. There's a delete column on the table with a little trash can icon and when we click that we're going to want to remove an item from the list. The first step is adding a new action. Hopefully we're getting some of this repetion into our heads. 

* Go to `redux/actions.js` and create a new function called `removeCar`. You can copy paste directly from the `addCar` function however we want to change the parameter from "car" to "index" in both places. Also, (this may seem like a given) change the type to "REMOVE_CAR".
    * Why are we changing "car" to "index"? Because that's an easy way to remove an item from an array. If I know its index, I can `splice` it. So this time we are going to pass an "index" value to the "removeCar" prop instead of a car object.

* Once that's done it's time to update our reducer again. Go to `redux/reducers.js` and make another case statement for `REMOVE_CAR`. In this one, create a copy of the state and then splice the index out of it. Finally, return the copy variable you created. If you forget, the "splice" function takes a starting index and a number of items to delete as its parameters so it will look like this: `splice(action.value, 1)` where action.value is the index we are passing.

* Ok so since the button we want to tie this to is in the Dashboard component and it already has a container.. we don't need to create a new one. We do need to go to `containers/Dashboard.js` and add the `mapDispatchToProps` function though. Do that right below that `mapStateToprops` one. This function should return an object with a key of "removeCar" and a value of `(index) => dispatch(removeCar(index))`. Also, don't forget to import that `{ removeCar }` action at the top of the file. We also need to ensure that we pass the `mapDispatchToProps` function to `connect`.

* Now that everything is hooked up we need to use our new action. In the Dashboard.js COMPONENT, create an "onClick" method on the Icon (the last TableCell) that is a function. It should call `props.removeCar` with the index. The current index can be found in the beginning of the map function. Its value is "idx".

* When you click the trash can icon the corresponding row should be removed. Is it working? If not, ask the instructor for direction.

##### Pie Chart & Total

* Now that we have that working we are going to practice what we learned last class and add containers and mapStateToProps function for the `Chart` and `Total` components. Why? Because we want these to always have the current "cars" information. We'll see how this is useful in a second.

* Create a file called `Total.js` underneath the "containers" folder and create a `mapStateToProps` function. You can use the `Car.js` file as an example and simply change the component from "Car" to "Total".

* Next, go to the Dashboard COMPONENT and change the import for "Total" to reference the container instead of the component. Ex. `import Total from './Total'`

* Finally, go to the `Total.js` file under the components folder and change the number "4" to `{props.cars.length}`. The total should now display "20".

* Go ahead and add and remove items from the table. Notice the total update in real time. This is something that wouldn't have been possible with normal React state because the information for "Total" lives in a different component. Components are meant to be re-usable so if we ever wanted to put this "Total" somewhere else in our application we could just import it and use it like in dashboard and it will always have the correct cars data.

* Now we need to do the same thing for the `Chart` component. Create a file called `Chart.js` under containers and hook up the `mapStateToProps` function so that it has access to the "cars" prop. You can copy from `Total` and change the component names.

* Once again in Dashboard COMPONENT, change the Chart import so that it points to the container.

* Finally, in `components/Chart.js` above the return statement, create two variables called "over" and "under". Use the "filter" method to filter the "props.cars" for cars whose horsepower match the criteria. Then use those values in the corresponding Pie Chart. They will be "over.length" and "under.length"

* You should see 4 (red) over 200 and 16 (orange) under 200. But wait.. since this data is connected to Redux it will change according to our actions. So go ahead and delete 3 cars whose horsepower is under 200. Did you see the chart change? Again, since Dashboard, Chart and Total are all referencing the same data... they will always be in sync. The addition of the Pie Chart will always equal the total.

* One more thing, when you remove a user from the list you can also go to the homepage and notice that its card has also been removed. Pretty cool, huh? It's all tied together.
