import { Request, Response } from "express";
import surveyModel from "../models/surveyModel";
class SurveyController {
    async getAllSurveys(req: Request, res:Response){
        try{
            const surveys = await surveyModel.getAllSurvey();
            res.status(200).json({
                surveys
            })
        }catch(err){
            res.status(500).json({
                message: "Can't get all surveys"
            })
        }
    }
    async getSurveyId(req: Request, res:Response){
        try{
            const { id } = req.params;
            const survey = await surveyModel.getSurveyById(parseInt(id));
            res.status(200).json({
                survey
            })
        }catch(err){
            res.status(500).json({
                message: "Couldn't get survey"
            })
        }
    }
    async createSurvey(req: Request, res:Response){
        try{
            const newSurvey = await surveyModel.createSurvey(req.body);
            res.status(200).json({
                newSurvey
            })
        }catch(err){
            res.status(500).json({
                message: "Couldn't create survey"
            })
        }
    }
    async updateSurvey(req: Request, res:Response){
        try{
            const {id} = req.params;
            const updateSurvey = await surveyModel.updateSurvey(req.body, parseInt(id));
            res.status(200).json({
                updateSurvey
            })
        }catch(err){
            res.status(500).json({
                message: "Couldn't update"
            })
        }
    }
    async deleteSurvey(req: Request, res:Response){
        try{
            const {id} = req.params;
            const deleteSurvey = await surveyModel.deleteSurvey(parseInt(id));
            res.status(200).json({
                deleteSurvey
            })
        }catch(err){
            res.status(500).json({
                message: "Couldn't delete"
            })
        }
    }
}

export default new SurveyController();