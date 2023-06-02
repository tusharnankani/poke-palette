export const struct = [
    {
        title: "Pokemons",
        value: "pokemons",
        selected: false,
        cnt: 0,
        subMenu: [
            {
                title: "Generation",
                value: "generation",
                selected: false,
                cnt: 0,
                subMenu: [
                    {
                        title: 'Generation 1',
                        value: "generation-i",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Generation 2',
                        value: "generation-ii",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Generation 3',
                        value: "generation-iii",
                        selectType: "radio",
                        selected: false
                    }
                ]
            },
            {
                title: "Color",
                value: "color",
                selected: false,
                cnt: 0,
                subMenu: [
                    {
                        title: 'Red',
                        value: "red",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Green',
                        value: "green",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Blue',
                        value: "blue",
                        selectType: "radio",
                        selected: false
                    }
                ]
            },
            {
                title: "Habitat",
                value: "habitat",
                selected: false,
                cnt: 0,
                subMenu: [
                    {
                        title: 'Grassland',
                        value: "grassland",
                        selectType: "check",
                        selected: false
                    },
                    {
                        title: 'Mountain',
                        value: "mountain",
                        selectType: "check",
                        selected: false
                    },
                    {
                        title: 'Water',
                        value: "water",
                        selectType: "check",
                        selected: false
                    }
                ]
            },
        ]   
    },
    {
        title: "Moves",
        value: "moves",
        selected: false,
        cnt: 0,
        subMenu: [
            {
                title: "Move Class",
                value: "move-class",
                selected: false,
                cnt: 0,
                subMenu: [
                    {
                        title: 'Physical',
                        value: "physical",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Special',
                        value: "special",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'Status',
                        value: "status",
                        selectType: "radio",
                        selected: false
                    }
                ]
            },
            {
                title: "Power Points",
                value: "power-points",
                selected: false,
                cnt: 0,
                subMenu: [
                    {
                        title: 'above 10',
                        value: "pp > 10",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'above 15',
                        value: "pp > 15",
                        selectType: "radio",
                        selected: false
                    },
                    {
                        title: 'above 20',
                        value: "pp > 20",
                        selectType: "radio",
                        selected: false
                    }
                ]
            }
        ]    
    }
];