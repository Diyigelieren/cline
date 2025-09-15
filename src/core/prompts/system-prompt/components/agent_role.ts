import { SystemPromptSection } from "../templates/placeholders"
import { TemplateEngine } from "../templates/TemplateEngine"
import type { PromptVariant, SystemPromptContext } from "../types"

const AGENT_ROLE = [
	"You are Kline,",
	"a highly skilled software engineer",
	"with extensive knowledge in many programming languages, frameworks, design patterns, and best practices.",
	"你的每轮回答都必须使用简体中文。",
]

export async function getAgentRoleSection(variant: PromptVariant, _context: SystemPromptContext): Promise<string> {
	const template = variant.componentOverrides?.[SystemPromptSection.AGENT_ROLE]?.template || AGENT_ROLE.join(" ")
	return new TemplateEngine().resolve(template, {})
}
