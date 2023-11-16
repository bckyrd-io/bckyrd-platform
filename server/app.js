import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "mysql://root:@localhost:3306/db_prisma",
        },
    },
});

(async () => {
    try {
        await prisma.$connect();
        await prisma.$executeRaw`SELECT 1`;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    } finally {
        await prisma.$disconnect();
    }
})();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static(path.join(__dirname, 'uploads')));


app.post("/api/submit-form", upload.single('image'), async (req, res) => {
    const formData = req.body;
    const imagePath = req.file.path; // The path where multer saved the uploaded image
    console.log("Received form data:", formData);

    try {
        const { title, additionalContent } = formData;
        const response = await prisma.formData.create({
            data: {
                title,
                image: imagePath, // This is the path to the saved image file
                additionalContent,
            },
        });

        res.json({ success: true, message: "Form submitted successfully!", data: response });
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


app.get("/api/form-data", async (req, res) => {
    try {
        const formData = await prisma.formData.findMany();
        res.json(formData);
    } catch (error) {
        console.error("Error fetching form data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
