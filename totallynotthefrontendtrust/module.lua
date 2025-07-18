
-- Hop off, skids
-- This is a simple Luau script that prints a message and performs a basic calculation.
-- Fun fact: Luau is a programming language derived from Lua, designed for use in Roblox.
-- Declare a variable
local greeting = "Hello, Luau!"

-- Print the greeting to the console
print(greeting)

-- Declare two numbers
local num1 = 15
local num2 = 7

-- Perform an addition operation
local sum = num1 + num2

-- Print the result of the addition
print("The sum of " .. num1 .. " and " .. num2 .. " is: " .. sum)

-- You can also define functions
local function multiply(a, b)
    return a * b
end

-- Call the function and print its result
local product = multiply(5, 4)
print("The product of 5 and 4 is: " .. product)

-- Conditional statement
local age = 18
if age >= 18 then
    print("You are an adult.")
else
    print("You are a minor.")
end

-- Loop example (for loop)
print("Counting from 1 to 3:")
for i = 1, 3 do
    print(i)
end