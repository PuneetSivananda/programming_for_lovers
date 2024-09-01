-- SELECT
--     NAME, 
--     Milliseconds,
--     AlbumId
-- FROM
--     tracks;


-- ORDER BY AlbumId
-- SELECT
--     NAME, 
--     Milliseconds,
--     AlbumId
-- FROM
--     tracks
-- ORDER BY
--     albumid ASC,
--     Milliseconds DESC;


-- NULLS ORDER BY

SELECT
    TrackId, 
    Name,
    Composer
FROM
    tracks
ORDER BY
    Composer NULLS Last;
