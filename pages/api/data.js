import fs from "fs";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const filePath = "data/contact.json";

    let existingData = [];
    
    try {
      const fileData = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(fileData);
    } catch (error) {
      console.error("Error", error.message);
    }

    existingData.push(data);

    fs.writeFileSync(filePath, JSON.stringify(existingData));

    res.status(200).json({ message: "Data saved successfully", comment: data });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
