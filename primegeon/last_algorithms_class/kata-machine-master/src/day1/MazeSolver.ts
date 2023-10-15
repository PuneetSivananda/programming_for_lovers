function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolen[][],
): boolean {
    // 1 Base case
    // off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    // 2 On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3 are we at the end of the walk
    if (curr.x === end.x && curr.y == end.y) {
        seen[curr.y][curr.x] = true;
        return true;
    }
    // 4 if we have seen this point
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Recursive Case
    // pre, recurse, post
    

}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
