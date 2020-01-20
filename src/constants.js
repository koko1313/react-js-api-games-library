export default {

    baseURL: "https://api.rawg.io/api/",

    allGenres: () => {
        return [
            {
                id: 1,
                name: "Horror",
            },
            {
                id: 2,
                name: "Action",
            },
        ];
    },

    allPlatforms: () => {
        return [
            {
                id: 1,
                name: "PC",
            },
            {
                id: 2,
                name: "XBOX",
            },
        ];
    }
    
}