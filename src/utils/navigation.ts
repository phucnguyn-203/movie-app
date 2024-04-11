interface Navigation {
    label: string;
    path: string;
}

export const navigationList: Navigation[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Trending",
        path: "/trending?page=1",
    },
    {
        label: "Movies",
        path: "/movies?page=1",
    },
    {
        label: "TV Shows",
        path: "/tvshows?page=1",
    },
];
