
import { templateRepository } from "../repository/templateRepository"

export function getHomeTemplate (req, res) {

    try {
        const dbTemplateResult = await templateRepository.getHomeTemplate()
    } catch {
        
    }
}