SELECT 
    t.id,
    t.name,
    t.location,
    m.theater_id,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater AS t
        LEFT JOIN
    Movies AS m ON m.theater_id = t.id
ORDER BY t.name ASC;