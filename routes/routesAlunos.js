import express from "express";
import Aluno from "../models/AlunoModel.js";

const router = express.Router();
router.post("/", async (req, res) => {
    const aluno = new Aluno(req.body);
    try {
        const novoAluno = await aluno.save();
        res.status(201).json(novoAluno);
    } catch (error) {
        throw error;
    }
});
router.put("/:id", (req, res) => {
    res.send("Rota de atualização de aluno.");
});
router.delete("/:id", (req, res) => {
    res.send("Rota de remoção de aluno.");
});
router.get("/:id", (req, res) => {
    res.send("Rota de busca de aluno.");
});
router.get("/", (req, res) => {
    res.send("Rota de listagem de alunos.");
});
export default router;