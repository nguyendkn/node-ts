import mongoose from "mongoose";

class DatabaseContext {
  private URI: string;

  constructor(URI: string) {
    this.URI = URI;
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      process.exit(1);
    }
  }
}

export default DatabaseContext;
