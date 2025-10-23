import { SystemPromptSection } from "../templates/placeholders"
import { TemplateEngine } from "../templates/TemplateEngine"
import type { PromptVariant, SystemPromptContext } from "../types"

export const TECH_STACK_CONTENT = `
## 技术栈支持

### 支持的框架
- **KingScript (KS)**
  - 说明： KingScript 是金蝶苍穹平台的后端脚本语言，与 TypeScript 语言的语法一致。
  - 应用场景: 金蝶平台开发~

### 语法要求
  - 使用正确的导入函数与基类
  - 遵循各自框架的最佳实践和设计模式
  - 函数与基类请参考 MCP 获取最新文档和示例代码，若有场景示例代码，请按示例代码编写。
  - 遇到不确定的用法、函数及其参数错误时，务必调用 MCP 服务查询对应的函数或基类资料。`

export async function getTechStackSection(variant: PromptVariant, _context: SystemPromptContext): Promise<string> {
	const template = variant.componentOverrides?.[SystemPromptSection.TECH_STACK]?.template || TECH_STACK_CONTENT
	return new TemplateEngine().resolve(template, {})
}
