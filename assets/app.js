
var Treedata = {
    "result": [{
        "id": "l01",
        "displayName": "Can the player log in the game...</strong>",
        "hasChild": true,
        "isLoaded": true,
        "children": [{
            "id": "b01",
            "displayName": "does the player want to remove the Application?",
            "hasChild": true,
            "isLoaded": true
        },
        {
            "id": "b01",
            "displayName": "Coffee",
            "hasChild": true,
            "isLoaded": true
        },
        {
            "id": "b01",
            "displayName": "Tea",
            "hasChild": false,
            "isLoaded": false
        }
        ]
    }, {
        "id": "l02",
        "displayName": "does the player want to remove the Application?",
        "hasChild": true,
        "isLoaded": true,
        "children": [{
            "id": "b01",
            "displayName": "Water",
            "hasChild": false,
            "isLoaded": false
        },
        {
            "id": "b01",
            "displayName": "Coffee",
            "hasChild": false,
            "isLoaded": false
        },
        {
            "id": "b01",
            "displayName": "Tea",
            "hasChild": false,
            "isLoaded": false
        }
        ]
    }, {
        "id": "l03",
        "displayName": "Beverages2",
        "hasChild": true,
        "isLoaded": true,
        "children": [{
            "id": "b01",
            "displayName": "Water",
            "hasChild": false,
            "isLoaded": false
        },
        {
            "id": "b01",
            "displayName": "Coffee",
            "hasChild": false,
            "isLoaded": false
        },
        {
            "id": "b01",
            "displayName": "Tea",
            "hasChild": false,
            "isLoaded": false
        }
        ]
    }, {
        "id": "l05",
        "displayName": "Beverages3",
        "hasChild": true,
        "isLoaded": true,
        "children": []
    }]
};

$('#myListTree').tree({
    data: function(){
        return Treedata.result
    },
    onDemandData: function () {
        return Treedata.result
    }
});


