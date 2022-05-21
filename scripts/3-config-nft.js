import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x06FD14Cd902868C358082318536acB0832FEde73");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "HeadQuarter",
        description: "This NFT will give you access to FGYDAO!",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();