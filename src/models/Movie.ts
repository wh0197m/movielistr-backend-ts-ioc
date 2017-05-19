import Director from "./Director";

export default class Movie {

    private id: string;
    private title: string;
    private releaseYear: number;
    private duration: number;
    private rating: number = 0;
    private seen: boolean = false;
    private director: Director;

    constructor() { }

    public static newMovie(id: string, title: string, releaseYear: number, duration: number, director: Director, rating: number, seen: boolean) {
        const movie = new Movie();
        movie.id = id;
        movie.title = title;
        movie.releaseYear = releaseYear;
        movie.duration = duration;
        movie.director = director;
        movie.rating = rating;
        movie.seen = seen;
        return movie;
    }

    public get $id(): string {
        return this.id;
    }

    public get $title(): string {
        return this.title;
    }

    public set $title(value: string) {
        this.title = value;
    }

    public get $releaseYear(): number {
        return this.releaseYear;
    }

    public set $releaseYear(value: number) {
        this.releaseYear = value;
    }

    public get $duration(): number {
        return this.duration;
    }

    public set $duration(value: number) {
        this.duration = value;
    }

    public get $director(): Director {
        return this.director;
    }

    public set $director(value: Director) {
        this.director = value;
    }

    public get $rating(): number {
        return this.rating;
    }

    public set $rating(value: number) {
        this.rating = value;
    }

    public get $seen(): boolean {
        return this.seen;
    }

    public set $seen(value: boolean) {
        this.seen = value;
    }
}