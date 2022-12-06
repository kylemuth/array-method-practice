# Array Methods: map(), filter(), and reduce()

---

### map()

The map method is used when a user wants to manipulate or obtain individual data points from within an array. In my example, we use the map method in order to obtain the names within the four objects stored in our "people" array. The map method in this case accepts a person as an argument while returning the "name" value from each "name" key within our four objects.

The map method returns an array of strings since the name key for each object holds a string as its value.

### filter()

The filter method is used by implementing boolean logic to screen objects/values within an array. In my example, we use the filter method to see which individual(s) are over the age of 28. In order to do so, the filter method performs a function that expects a person as an argument while returning true or false based off of the boolean logic we specify within said function.

Unlike the map method, the filter method will return the entire object if it passes the boolean logic. This is particularly useful when given a large amount of information and we only want objects with certain key/value pairs.

### reduce()

Much like the semantic meaning of filter, the reduce method is used to.. reduce. If given a number of data points within an array we can use the reduce method to compile this information into a single entity. The reduce method uses a function that expects two arguments: one being our counter and the other our object argument. Much like if we were to establish a function that counts anything, we set the value of this counter to 0 (most of the time) and use said counter to store our data. In my example, we use the reduce method to obtain the total height (in inches) of all individuals within our "people" array.

---

## Key Takeaway(s):

- All of these methods can be chained onto one another. For example, this means that we could use the filter method to extract specific objects and then use the map method to extract specific information or alter values within an object. All of this information could be stored into one variable versus having to perform multiple functions in order to arrive at the same result.

- .join() can be used to take data out of an array and can then be separated by spaces or commas.
