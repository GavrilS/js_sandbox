# Global scope encompasses everything. Creating a variable that's not in a function or object is in the global scope.

## The browser's top most object is window and we can access it directly as it is a part of the global scope. It provides a list of functions and properties available for us.

### Function scope works like expected.

#### Difference between declaring variables with 'var' and 'let'(This is IMPORTANT!):

    - if you declare a variable with 'let' in a block scope(if statements/loops), that variable is available only in the block scope
    - if you declare a variable with 'var' in a block scope, that variable is available outside of the block scope as well; in the context of a function scope 'var' is limited to the scope of the function; when we declare a global variable with 'var' it also gets added to the 'window' object

##### Nested scope:

    - if you have a function within another funtion you can access variables from the parent function in the child one, but you can't access variables from the child function in the parent function
    - the same is true for nested blocks

#\* Hoisting - it pulls function declarations to the top when it loads a page, which allows you to have a call to a function prior to the function declaration in your code. Hoisting doesn't work with function expressions, only with function declarations.
