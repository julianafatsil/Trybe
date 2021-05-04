SELECT 
    m.title AS movie, b.rating
FROM
    BoxOffice AS b
        JOIN
    Movies AS m ON b.movie_id = m.id
ORDER BY b.rating DESC;
