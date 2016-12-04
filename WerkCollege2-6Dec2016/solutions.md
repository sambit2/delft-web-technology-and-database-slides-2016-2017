#### Ex.1 - Consider the <a href="http://lh4.ggpht.com/_oKo6zFhdD98/SWFPtyfHJFI/AAAAAAAAAMc/GdrlzeBNsZM/s800/ChinookDatabaseSchema1.1.png" target="_blank">schema</a> of the Chinook database. Is it possible for albums not to be associated with tracks?:
__Solution__:
Yes, because the Album table has no attribute referencing the primary key of the Track table.

#### Ex.1 - feeback
1. __I think the students mastered the taught material assesed by this question__
Strongly disagree __1 2 3 4 5__ Strongly agree

2. __What percentage of students gave the correct answer__
    0-10%
    10-20%
    20-30%
    30-40%
    40-50%
    50-60%
    60-70%
    70-80%
    80-90%
    90-100%



#### Ex.2 - Consider the following query (The TIMESTAMPDIFF returns the difference in years between two dates. Which statement better describes the meaning of the query?

```sql
SELECT c.FirstName, c.LastName, c.Country
FROM Chinook.customer AS c, Chinook.employee AS e
WHERE c.supportRepId = e.employeeId 
AND TIMESTAMPDIFF(year, birthdate, hiredate) < 35
```

__Solution__:
List the names and the countries of those customers who are supported by an employee who was younger than 35 when hired.

#### Ex.2 - feeback
1. __I think the students mastered the taught material assesed by this question__
Strongly disagree __1 2 3 4 5__ Strongly agree

2. __What percentage of students gave the correct answer__
0-10%
10-20%
20-30%
30-40%
40-50%
50-60%
60-70%
70-80%
80-90%
90-100%

#### Ex.3 - Retrieve the name of Artists that published an album having a 3-letter title that contains a 2-letters song:

__Solution__:
```sql
SELECT DISTINCT Artist.Name
FROM Artist JOIN Album ON Artist.ArtistId = Album.ArtistId
JOIN Track ON Album.AlbumId = Track.AlbumId
WHERE Album.Title LIKE "___" AND Track.Name LIKE "__"
```

#### Ex.3 - feeback
1. __I think the students mastered the taught material assesed by this question__
Strongly disagree __1 2 3 4 5__ Strongly agree

2. __What percentage of students gave the correct answer__
0-10%
10-20%
20-30%
30-40%
40-50%
50-60%
60-70%
70-80%
80-90%
90-100%

#### Ex.4 - Retrieve the name of all the pair of artists that published an album containing the number 5 in the title:

__Solution__:
```sql
SELECT ar1.name, ar2.name
FROM Album AS al1, Album AS al2, Artist AS ar1, Artist AS ar2
WHERE al1.title LIKE "%5%" and  al2.title LIKE "%5%"
AND al1.AlbumId < al2.AlbumId
AND al1.ArtistId = ar1.ArtistId AND al2.ArtistId = ar2.ArtistId
```

#### Ex.4 - feeback
1. __I think the students mastered the taught material assesed by this question__
Strongly disagree __1 2 3 4 5__ Strongly agree

2. __What percentage of students gave the correct answer__
0-10%
10-20%
20-30%
30-40%
40-50%
50-60%
60-70%
70-80%
80-90%
90-100%

#### Ex.5 - Retrieve the name of composers of classical songs longer than 5 minutes:

__Solution__:
```sql
SELECT DISTINCT Composer 
FROM track JOIN Genre ON track.GenreId = Genre.GenreId 
WHERE Genre.Name = "Classical" AND track.Milliseconds > 300000
ORDER BY track.Milliseconds DESC
```

#### Ex.5 - feeback
1. __I think the students mastered the taught material assesed by this question__
Strongly disagree __1 2 3 4 5__ Strongly agree

2. __What percentage of students gave the correct answer__
0-10%
10-20%
20-30%
30-40%
40-50%
50-60%
60-70%
70-80%
80-90%
90-100%
