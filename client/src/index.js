import { Drizzle } from "@drizzle/store";
import FomoApes from "./contracts/FomoApes.json";

//let drizzle know what contracts need to access the block chain
const options = {
    contracts: [FomoApes],
    web3:{
        fallback: {
            type: "ws",
            url: ""
        }
    }
}

const drizzle = new Drizzle(options)