SELECT 
    b.domestic_sales, b.international_sales
FROM
    BoxOffice AS b
        JOIN
    Movies AS m ON m.id = b.movie_id;