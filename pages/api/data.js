import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://Miank12:Yusuf.dg12@atlascluster.eh8thnx.mongodb.net/?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  if (req.method === "POST") {
    const newProduct = req.body;

    const client = new MongoClient(url);

    try {
      await client.connect();
      const db = client.db();
      const result = await db.collection("products").insertOne(newProduct);
    } catch (error) {
      return res.json({ message: "Could not store data." });
    }
    client.close();

    res.json(newProduct);
  } else {
    return;
  }
};

export default createProduct;


// import fs from "fs";

// function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     const filePath = "data/contact.json";

//     let existingData = [];

//     try {
//       const fileData = fs.readFileSync(filePath, "utf-8");
//       existingData = JSON.parse(fileData);
//     } catch (error) {
//       console.error("Error", error.message);
//     }

//     existingData.push(data);

//     fs.writeFileSync(filePath, JSON.stringify(existingData));

//     res.status(200).json({ message: "Data saved successfully", comment: data });
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

// export default handler;
