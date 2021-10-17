1. It outputs `3`, the value of `i` after the last execution of the for loop because it is a global variable (even though it was declared in the for-loop, it is not only loop-local since it was declared with `var)

2. It outputs `150`, the value of `discountedPrice` after the last execution of the for loop (when `i = 3` and `prices[i] = 300`) because `discountedPrice` is a global variable (even though it was declared in the for-loop, it is not only loop-local since it was declared with `var)

3. It outputs `150`, the value of `finalPrice` after the last execution of the for loop (when `i = 3` and `prices[i] = 300`) because `finalPrice` is a global variable declared in the function before the for-loop.

4. It will return a new array `[ 50, 100, 150 ]`, which is an array of prices after applying dicounting and rounding the the input array.

5. **Error**, because `i` is only declared in the loop with `let`, so it's loop-local and cannot be accessed outside the for loop

6. **Error**, because `discountedPrice` is only declared in the loop with `discountedPrice`, so it's loop-local and cannot be accessed outside the for loop

7. It outputs `150`, the value of `finalPrice` after the last execution of the for loop (when `i = 3` and `prices[i] = 300`) because `finalPrice` is a global variable declared in the function before the for-loop (so it does not matter if it's declared with `let` or `var`, `finalPrice` is still a global variable)

8.  It will return a new array `[ 50, 100, 150 ]`, which is an array of prices after applying dicounting and rounding the the input array.

9.  **Error**, because `i` is only declared in the loop with `let`, so it's loop-local and cannot be accessed outside the for loop

10.  It outputs `3`, the length of the input arrray (length is a constant variable and has been declared within the function and right before the for-loop)

11.  It will return a new array `[ 50, 100, 150 ]` stored in `discounted`, which is an array of prices after applying dicounting to the array. Even though `discounted` is a constant array, its content (values inside the array can be modified but we just can't reference `discounted` to a new array)


### Data Type
12. 
  A. student.name
  
  B. student["Grad Year"]
  
  C. student.greeting()
  
  D. student['Favorite Teacher'].name
  
  E. student.courseLoad[0]
  
  
### Basic Operators & Type  
13.
  A. '32' (2 becomes string '2') 
  
  B. 1 ('3' becomes number 2) 
  
  C. 3 (null becomes number 0)
  
  D. '3null' (null becomes string 'null')
  
  E. 4 (true becomes number 1)
  
  F. 0 (null becomes number 0)
  
  G. '3undefined' (undefined becomes string 'undefined')
  
  H. NaN (undefined becomes NaN)


14. 
  A. true (string '2' becomes number 2, so the output is true as 2 > 1)
  
  B. false (compare two string letter-by-letter according to the “lexicographical” order, and since string '2' is greater than string '1', it returns false)
  
  C. true (string '2' becomes number 2, so the output is true as 2 = 2)
  
  D. false (`===` checks for equality without type conversion, and since this is comparison of different types ie. string vs number, it returns false)
  
  E. false (true becomes number 1, so the output is false as 1 != 2)
  
  F. true (Boolean(2) becomes true because 2 is a non-zero number)


15. Operands of different types are converted to numbers by the equality operator `==`. For `===`, it strictly checks the equality without type conversion, so any comparion of different types will return false.


17. The result will be `[ 2, 4, 6 ]`. 
    
    When we call `modifyArray([1,2,3], doSomething)`, the function `doSomething(num)` is expected to be called back to calculate the doubble of the number in the input array every time the code on line 4 is executed, then the result will be added to `newArr` once `doSomething(num)` is done. 
    
19. The output is:

    1
    
    4
    
    3
    
    2






