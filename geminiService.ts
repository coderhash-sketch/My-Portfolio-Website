
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from "./constants";

const SYSTEM_INSTRUCTION = `
You are Agrim Garg's AI Portfolio Assistant. Your goal is to help recruiters and hiring managers learn about Agrim.
Agrim is an engineer based in ${PERSONAL_INFO.location}. 

Core Philosophy: ${PERSONAL_INFO.impactStatement}

Portfolio Context:
- Education: ${JSON.stringify(EDUCATION)}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Achievements: ${JSON.stringify(ACHIEVEMENTS)}
- Certifications: ${JSON.stringify(CERTIFICATIONS)}

Guidelines:
1. Be professional, concise, and helpful.
2. If asked about Agrim's education, mention they are currently pursuing B.Tech at SRM University AP with a CGPA of 9.82.
3. If asked about specific projects, detail SkillSpresso, Kaun Banega Ganitpati, AtomoraCQ, or FounderPilotAI.
4. If asked about achievements, highlight their AIR 335 in AINCAT 2025.
5. If asked about contact info, provide their email: ${PERSONAL_INFO.email}.
6. Keep answers short and direct. Use bullet points for lists.
7. If you don't know something, offer to let them leave a message via the contact form.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    // Initialize inside the function to ensure we always have the latest injected environment variables.
    // Use gemini-3-pro-preview for complex reasoning about engineering, math, and STEM projects.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    // Access text property directly as per @google/genai guidelines
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my brain right now. Please try again later!";
  }
};
