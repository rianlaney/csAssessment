Results for the tinyArray(10)
insert 49 μs  
append 125.2 μs

Results for the smallArray(100)
insert 131.9 μs
append 214.9 μs

Results for the mediumArray(1000)
insert 378.2 μs
append 214.3 μs

Results for the LargeArray(10000)
insert 11.07 ms
append 765.7 μs

Results for the extraLargeArray(10000)
insert 1.1891711 s
append 4.1284 ms


 write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

insert scales at O(n) and is linear but it uses unshift so the index is changing as well so its taking more time to calculate and delete that at ever interval which would be the slower function


append scales at O(n) and is linear which uses push which is the quicker function because its just adding to the end and counting up so qppend scales better 