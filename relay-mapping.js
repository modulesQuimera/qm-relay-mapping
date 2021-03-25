module.exports = function(RED) {

    function relay_mappingNode(config) {
        RED.nodes.createNode(this, config);
        this.slot = config.slot;

        this.NA1 = config.NA1;
        this.valueNA1 = config.valueNA1;
        this.NA2 = config.NA2;
        this.valueNA2 = config.valueNA2;
        this.NA3 = config.NA3;
        this.valueNA3 = config.valueNA3;
        this.NA4 = config.NA4;
        this.valueNA4 = config.valueNA4;
        this.NA5 = config.NA5;
        this.valueNA5 = config.valueNA5;
        this.NA6 = config.NA6;
        this.valueNA6 = config.valueNA6;
        this.NA7 = config.NA7;
        this.valueNA7 = config.valueNA7;
        this.NA8 = config.NA8;
        this.valueNA8 = config.valueNA8;
            
        this.NF9 = config.NF9;
        this.valueNF9 = config.valueNA9;
        this.NF10 = config.NF10;
        this.valueNF10 = config.valueNF10;
        this.NF11 = config.NF11;
        this.valueNF11 = config.valueNF11;
        this.NF12 = config.NF12;
        this.valueNF12 = config.valueNF12;
        this.NF13 = config.NF13;
        this.valueNF13 = config.valueNF13
        this.NF14 = config.NF14;
        this.valueNF14 = config.valueNF14
        this.NF15 = config.NF15;
        this.valueNF15 = config.valueNF15;
        this.NF16 = config.NF16;
        this.valueNF16 = config.valueNF16;

        this.CM1 = config.CM1;
        this.CM2 = config.CM2;
        this.CM3 = config.CM3;
        this.CM4 = config.CM4;
        this.CM5 = config.CM5;
        this.CM6 = config.CM6;
        this.CM7 = config.CM7;
        this.CM8 = config.CM8;
        this.CM9 = config.CM9;
        this.CM10 = config.CM10;
        this.CM11 = config.CM11;
        this.CM12 = config.CM12;
        this.CM13 = config.CM13;
        this.CM14 = config.CM14;
        this.CM15 = config.CM15;
        this.CM16 = config.CM16;

        var globalContext = this.context().global;
        var map = globalContext.get("map");

        var relay_map = [
            { feat: `RELAY INSTANCE ${this.slot} MAPPING`, pin: "", board: ""},
            { feat: "NA1", pin: "PIN 34", board: `TP ${this.NA1}`},
            { feat: "NA2", pin: "PIN 32", board: `TP ${this.NA2}`},
            { feat: "NA3", pin: "PIN 30", board: `TP ${this.NA3}`},
            { feat: "NA4", pin: "PIN 28", board: `TP ${this.NA4}`},
            { feat: "NA5", pin: "PIN 26", board: `TP ${this.NA5}`},
            { feat: "NA6", pin: "PIN 24", board: `TP ${this.NA6}`},
            { feat: "NA7", pin: "PIN 22", board: `TP ${this.NA7}`},
            { feat: "NA8", pin: "PIN 20", board: `TP ${this.NA8}`},

            { feat: "CM1", pin: "PIN 33", board: `TP ${this.CM1}`},
            { feat: "CM2", pin: "PIN 31", board: `TP ${this.CM2}`},
            { feat: "CM3", pin: "PIN 29", board: `TP ${this.CM3}`},
            { feat: "CM4", pin: "PIN 27", board: `TP ${this.CM4}`},
            { feat: "CM5", pin: "PIN 25", board: `TP ${this.CM5}`},
            { feat: "CM6", pin: "PIN 23", board: `TP ${this.CM6}`},
            { feat: "CM7", pin: "PIN 21", board: `TP ${this.CM7}`},
            { feat: "CM8", pin: "PIN 19", board: `TP ${this.CM8}`},

            { feat: "NF9", pin: "PIN 16", board: `TP ${this.NF9}`},
            { feat: "NF10", pin: "PIN 14", board: `TP ${this.NF10}`},
            { feat: "NF11", pin: "PIN 12", board: `TP ${this.NF11}`},
            { feat: "NF12", pin: "PIN 10", board: `TP ${this.NF12}`},
            { feat: "NF13", pin: "PIN 8", board: `TP ${this.NF13}`},
            { feat: "NF14", pin: "PIN 6", board: `TP ${this.NF14}`},
            { feat: "NF15", pin: "PIN 4", board: `TP ${this.NF15}`},
            { feat: "NF16", pin: "PIN 2", board: `TP ${this.NF16}`},

            { feat: "CM9", pin: "PIN 15", board: `TP ${this.CM9}`},
            { feat: "CM10", pin: "PIN 13", board: `TP ${this.CM10}`},
            { feat: "CM11", pin: "PIN 11", board: `TP ${this.CM11}`},
            { feat: "CM12", pin: "PIN 9", board: `TP ${this.CM12}`},
            { feat: "CM13", pin: "PIN 7", board: `TP ${this.CM13}`},
            { feat: "CM14", pin: "PIN 5", board: `TP ${this.CM14}`},
            { feat: "CM15", pin: "PIN 3", board: `TP ${this.CM15}`},
            { feat: "CM16", pin: "PIN 1", board: `TP ${this.CM16}`},

        ];

        if(map){
            map.relay[this.slot - 1] = [];
            for(row of relay_map){
                map.relay[this.slot - 1].push(row);
            }
        }
    }
    RED.nodes.registerType("relay-mapping", relay_mappingNode);
}