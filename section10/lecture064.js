/*

WHAT ABOUT
BIG O?

O(log n)

Worst and Average Case

O(1)

Best Case






Suppose we're searching for 13

[2,4,5,9,11,14,15]

[11,14,15]

[11]

NOPE, NOT HERE!
16 elements = 4 "steps"








To add another "step", we need to double the number of elements

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]

[17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]

[24,25,26,27,28,29,30,32,35]

[29,30,32,35]

[32,35]

[32,35]

32 elements = 5 "steps" (worst case)


*/
