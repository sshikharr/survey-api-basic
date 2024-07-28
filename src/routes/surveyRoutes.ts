import { Router } from "express";
import surveyController from "../controllers/surveyController";
const router = Router();

router.get('/', surveyController.getAllSurveys);
router.get('/:id', surveyController.getSurveyId);
router.post('/', surveyController.createSurvey);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);

export default router;