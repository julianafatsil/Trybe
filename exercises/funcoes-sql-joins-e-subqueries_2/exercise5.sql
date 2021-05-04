SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id,
    t.name,
    t.location
FROM
    Theater AS t
        RIGHT JOIN
    Movies AS m ON t.id = m.theater_id
ORDER BY t.name ASC