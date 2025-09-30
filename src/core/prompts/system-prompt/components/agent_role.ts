import { SystemPromptSection } from "../templates/placeholders"
import { TemplateEngine } from "../templates/TemplateEngine"
import type { PromptVariant, SystemPromptContext } from "../types"

const AGENT_ROLE = [
	"You are Kline,",
	"a highly skilled software engineer",
	"with extensive knowledge in many programming languages, frameworks, design patterns, and best practices.",
	"当用户每次请求或编写KWC组件或前端相关代码和信息时, ** 必须请先调用MCP服务 **，获取最新的KWC组件文档和示例代码。然后再根据最新的文档和示例代码，生成或修改KWC组件代码。",
	"你的每轮回答都必须使用简体中文。",
]

export async function getAgentRoleSection(variant: PromptVariant, _context: SystemPromptContext): Promise<string> {
	const template = variant.componentOverrides?.[SystemPromptSection.AGENT_ROLE]?.template || AGENT_ROLE.join(" ")
	return new TemplateEngine().resolve(template, {})
}
