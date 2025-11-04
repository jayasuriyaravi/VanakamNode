const { MongoClient } = require("mongodb");

// Connection URL (Local MongoDB)
const url = "mongodb://localhost:27017";

// Database name
const dbName = "studentDB";

// Create a new MongoClient instance
const client = new MongoClient(url);

async function main() {
  try {
    // 1️⃣ Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB!");

    // 2️⃣ Select the database and collection

// If the database already exists, it connects to it.
// If it doesn’t exist yet, MongoDB will not immediately create it —
// it will be created automatically when you insert the first document.
    const db = client.db(dbName);
    const collection = db.collection("students");

    // =========================
    // CREATE (Insert)
    // =========================
    const newStudent = { name: "Jayasuriya", age: 21, course: "Computer Science" };
    
    const insertResult = await collection.insertOne(newStudent);
    console.log("📥 Inserted:", insertResult.insertedId);

    // =========================
    // READ (Find)
    // =========================
    const allStudents = await collection.find().toArray();
    console.log("📖 All Students:", allStudents);

    // =========================
    // UPDATE (Modify)
    // =========================
    const updateResult = await collection.updateOne(
      { name: "Jayasuriya" },
      { $set: { age: 22 } }
    );
    console.log("✏️ Updated Documents:", updateResult.modifiedCount);

    // =========================
    // DELETE (Remove)
    // =========================
    const deleteResult = await collection.deleteOne({ name: "Jayasuriya" });
    console.log("🗑️ Deleted Documents:", deleteResult.deletedCount);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    // Always close the connection
    await client.close();
    console.log("🔒 Connection closed.");
  }
}

main();
