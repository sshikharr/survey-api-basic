import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SurveyModel {
    async getAllSurvey(){
        return await prisma.survey.findMany();
    }
    async getSurveyById(id: number){
        return await prisma.survey.findUnique({where:{ id }})
    }
    async createSurvey(data:{title: string}){
        return await prisma.survey.create({ data })
    }
    async updateSurvey(data: {title: string}, id: number){
        return await prisma.survey.update({where:{id}, data})
    }
    async deleteSurvey(id: number){
        return await prisma.survey.delete({where: {id}});
    }
}

export default new SurveyModel();